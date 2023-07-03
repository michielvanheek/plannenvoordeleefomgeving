import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { Envelope, JsonConverter, Layer, WKTConverter } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppEvent } from "../event/AppEvent";
import { AppEventDispatcher } from "../event/AppEventDispatcher";
import { AppEventListener } from "../event/AppEventListener";
import { DisplayModelService } from "./display-model.service";
import { ImowModelService } from "./imow-model.service";
import { LayerModelService } from "./layer-model.service";
import { MarkerModelService } from "./marker-model.service";
import { RegelingModelService } from "src/app/model/regeling-model.service";
import { ParapluModelService } from "./paraplu-model.service";
import { Planalysis } from "../domain/planalysis"
import { PlanDecoratorService } from "./plan-decorator.service";
import { PlanLevelModelService } from "./plan-level-model.service";
import { TimeModelService } from "./time-model.service";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root"
})
export class PlanModelService extends AppEventDispatcher implements AppEventListener {
  private titleSymbols = {
    BOEK: "BOEK",
    DEEL: "DEEL",
    HOOFDSTUK: "HOOFDSTUK",
    BIJLAGE: "BIJLAGE",
    TITEL: "TITEL",
    AFDELING: "AFDELING",
    PARAGRAAF: "§",
    SUBPARAGRAAF: "§",
    SUBSUBPARAGRAAF: "§",
    ARTIKEL: "ARTIKEL"
  };
  private plannen = [];  // IMRO plannen only.

  numLoadingR = 0;
  numLoadingC = 0;

  planalysis = null;
  plan = null;
  diffPlan = null;
  dossierSet = null;
  planInPlanalysis = false;
  kaart = null;
  documents = [];

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    private displayModel: DisplayModelService,
    private parapluModel: ParapluModelService,
    private layerModel: LayerModelService,
    private timeModel: TimeModelService,
    private markerModel: MarkerModelService,
    private planLevelModel: PlanLevelModelService,
    private planDecorator: PlanDecoratorService,
    public regelingModel: RegelingModelService,
    private imowModel: ImowModelService
  ) {
    super();

    this.markerModel.addEventListener(this);
    this.regelingModel.addEventListener(this);
    this.imowModel.addEventListener(this);
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "markerModel.xy") {
      this.loadPlanalysis();
    } else if (event.type == "regelingModel.regelingen") {
      this.setPlanalysis();

      if ((this.plan != null) && !this.plan.identificatie.match(/^NL\.IMRO/)) {
        this.loadPlan(this.plan.viewId, null, false, false);
      }
    } else if (event.type == "imowModel.markerLocatieIdentificaties") {
      this.setPlanalysis();
    }
  }

  private loadPlanalysis() {
    if (this.markerModel.xy == null) {
      this.plannen = [];
      this.setPlanalysis();
    } else {
      const point = this.markerModel.xy;
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/xy/" + point.x + "/" + point.y;
      this.numLoadingR++;
      this.http.get(url).subscribe(
        response => {
          this.plannen = response["plannen"] || [];
          this.plannen.forEach(plan => this.planDecorator.decoratePlan(plan, true));
          this.setPlanalysis();

          if (environment.ihr) {
            const options = environment.ihrOptions;
            const url = environment.ihrUrl + "plannen/_zoek?pageSize=100&beleidsmatigVerantwoordelijkeOverheid.type=gemeentelijke overheid";
            const post = {
              _geo: {
                intersects: (new JsonConverter()).geometryToJson(this.markerModel.polygon || this.markerModel.xy, false)
              }
            };
            this.numLoadingR++;
            this.http.post(url, post, options).subscribe(
              response => {
                const rp = [window.location.pathname];
                const rpPlannen = this.plannen.filter(plan => plan.viewPlanLevel.name == "Gemeente").sort((a, b) => (a.datum < b.datum)? 1: (a.datum > b.datum)? -1: 0);
                rpPlannen.filter(plan => plan.typePlan != "structuurvisie").forEach(plan => rp.push([plan.naam, plan.typePlan, plan.planStatus, plan.dossierStatus, plan.datum, plan.identificatie].join(" - ")));
                rpPlannen.filter(plan => plan.typePlan == "structuurvisie").forEach(plan => rp.push([plan.naam, plan.typePlan, plan.planStatus, plan.dossierStatus, plan.datum, plan.identificatie].join(" - ")));

                const ihr = [window.location.pathname];
                const ihrPlannen = response["_embedded"].plannen.filter(plan => !plan.verwijderdOp && (!plan.dossier || (plan.dossier.status != "vervallen")));
                ihrPlannen.filter(plan => plan.type != "structuurvisie").forEach(plan => ihr.push([plan.naam, plan.type, plan.planstatusInfo.planstatus, plan.dossier?.status, plan.planstatusInfo.datum, plan.id].join(" - ")));
                ihrPlannen.filter(plan => plan.type == "structuurvisie").forEach(plan => ihr.push([plan.naam, plan.type, plan.planstatusInfo.planstatus, plan.dossier?.status, plan.planstatusInfo.datum, plan.id].join(" - ")));

                console.log(rp.join("\n") + "\n\n");
                console.log(ihr.join("\n") + "\n\n");

                this.numLoadingR--;
              },
              error => {
                this.numLoadingR--;
              }
            );
          }
          this.numLoadingR--;
        },
        error => {
          this.numLoadingR--;
        }
      );
    }
  }

  private setPlanalysis() {
    const regelingen = this.regelingModel.regelingen.filter(regeling => this.imowModel.markerLocatieIdentificaties.includes(regeling.locatieIdentificatie));
    const plannen = this.plannen.concat(regelingen);

    if (plannen.length == 0) {
      this.planalysis = null;
    } else {
      this.planalysis = new Planalysis(plannen, this.planLevelModel.planLevels, this.parapluModel.parapluItems);
    }
    this.setPlanInPlanalysis();
  }

  loadPlan(viewId, dossierSet, zoomToPlan, local) {
    if (dossierSet == "CURRENT") {
      dossierSet = this.dossierSet;
    } else if (dossierSet == "PLANALYSIS") {
      dossierSet = this.planalysis.dossierSets[viewId];
    }

    if (viewId.indexOf("NL.IMRO") == 0) {
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + viewId;
      this.http.get(url).subscribe(response => {
        const plan: any = response;

        this.planDecorator.decoratePlan(plan, true);

        const bb = plan.boundingBox;
        plan.viewEnvelope = new Envelope(bb.minX, bb.minY, bb.maxX, bb.maxY);

        plan.viewSymbols = {};
        for (let i = 0; i < plan.kaarten.length; i++) {
          setSymbols(plan.kaarten[i].planObjecten);
        }
        function setSymbols(symbolObjects) {
          for (let i = 0; i < symbolObjects.length; i++) {
            const symbolObject = symbolObjects[i];
            if (symbolObject.symboolCodes[0] != null) {
              plan.viewSymbols[symbolObject.identificatie] = symbolObject.symboolCodes[0];
            }
            if (symbolObject.hasChildren) {
              setSymbols(symbolObject.children);
            }
          }
        }

        this.setPlan(plan, dossierSet);
        if (zoomToPlan) {
          this.zoomTo(plan);
        }

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + viewId + "/geometrie";
        this.http.get(url).subscribe(response => {
          plan.geometrie = (new WKTConverter()).wktToCoordPath(response["geometrie"]);
        });
      });
    } else {  // AKN.
      if ((this.plan != null) && (this.plan.viewId == viewId) && !this.isPlanInvalid(this.plan)) {
        this.planDecorator.decorateRegelingStatus(this.plan);  // If after a time change, the plan is still valid, its status may need a reset.
        this.regelingModel.resetTijdelijkDeel(this.plan);      // And its tijdelijk deel references.
        this.regelingModel.resetVersions(this.plan);           // And its version info.
        this.resetComponents(this.plan);                       // And the annotations of its components.
        return;
      }
      if ((this.diffPlan != null) && (this.diffPlan.viewId == viewId) && local) {
        return;
      }

      if (this.regelingModel.regelingen.length == 0) {
        const plan: any = (viewId[0] != "_")?
          {identificatie: viewId.replace(/\|.+$/, "")}:
          {identificatie: viewId.split("_akn_nl_bill")[0].replace(/_/g, "/"), technischId: viewId};
        plan.geregistreerdMet = {tijdstipRegistratie: "9999T"};
        plan.viewId = viewId;
        this.plan = plan;
        return;
      }

      let plan = this.regelingModel.regelingen.find(regeling => regeling.viewId == viewId);
      if (plan == null) {
        const identificatie = (viewId[0] != "_")? viewId.replace(/\|.+$/, ""): viewId.split("_akn_nl_bill")[0].replace(/_/g, "/");
        const regelingen = this.regelingModel.regelingen.filter(regeling => !regeling.technischId && (regeling.identificatie == identificatie));
        if (regelingen.length > 0) {
          const versie = (viewId[0] != "_")? parseInt(viewId.replace(/^[^|]+\|/, "")): Number.MAX_SAFE_INTEGER;
          regelingen.sort((a, b) => (Math.abs(a.geregistreerdMet.versie - versie) < Math.abs(b.geregistreerdMet.versie - versie))? 1: (Math.abs(a.geregistreerdMet.versie - versie) > Math.abs(b.geregistreerdMet.versie - versie))? -1: 0);
          plan = regelingen[0];
        }
      }

      this.loadDocumentComponenten(plan, local);

      if (!local) {
        if (plan == null) {
          this.setPlan(null, null);
          return;
        }

        this.displayModel.setLabel(plan.typePlan);
        this.regelingModel.loadVersions(plan);

        this.imowModel.loadLocatieForPlanPostActions["setPlan"] = () => {
          if (zoomToPlan) {
            this.zoomTo(plan);

            setTimeout(() => {
              this.setPlan(plan, dossierSet);
            }, 2000);
          } else {
            this.setPlan(plan, dossierSet);
          }
        };
        this.imowModel.loadLocatieForPlan(plan);
      } else {
        this.diffPlan = plan;
      }
    }

//    oepModel.load(idn);
  }

  private loadDocumentComponenten(plan, local) {
    if (plan == null) {
      return;
    }
    if (plan.documentComponenten != null) {
      this.setDocumentComponenten(plan, local);
      return;
    }

    const underscoredIdentificatie = plan.technischId || plan.identificatie.replace(/[^a-zA-Z0-9]/g, "_");
    const options = environment.dsoOptions;
    const url = local? `/assets/${underscoredIdentificatie}.json`: environment.dsoUrl + (!plan.technischId? "regelingen/": "ontwerpregelingen/") + underscoredIdentificatie + "/" + (!plan.technischId? "documentcomponenten?": "ontwerpdocumentcomponenten?") + this.timeModel.getVersionParams(plan, !!plan.technischId);
    this.numLoadingC++;
    this.http.get(url, options).subscribe(
      response => {
        plan.documentComponenten = response;
        const eid2wid = this.getEid2wid(plan.documentComponenten);
        this.convertToHtml(plan.documentComponenten, eid2wid);

        this.numLoadingC--;
        if (this.numLoadingC == 0) {
          this.setDocumentComponenten(plan, local);
        }
      },
      error => {
        this.numLoadingC--;
      }
    );
  }

  private setDocumentComponenten(plan, local) {
    if (!local) {
      this.displayModel.setDocumentComponenten(plan.documentComponenten);
    }

    this.displayModel.setComponents(plan.documentComponenten, local);

    if (plan == this.plan) {
      this.dispatchEvent("planModel.plan.documentComponenten");
    }
  }

  private resetComponents(plan) {
    this.displayModel.tabs[2].components.forEach(component => {
      if (component.tekst != null) {
        if (this.imowModel.isTekstInvalidForPlan(component.tekst, plan)) {
          delete component.tekst;
        } else {
          // TODO re-register
        }
      }
      delete component.inheritedTeksten;  // TODO only if invalid
    });
  }

  private getEid2wid(documentComponenten) {
    const eid2wid = {};
    const processComponent = component => {
      if (component.expressie != null) {
        eid2wid[component.expressie] = component.identificatie;
      }

      if (component._embedded != null) {
        if (component._embedded.documentComponenten != null) {
          component._embedded.documentComponenten.forEach(childComponent => processComponent(childComponent));
        } else if (component._embedded.ontwerpDocumentComponenten != null) {
          component._embedded.ontwerpDocumentComponenten.forEach(childComponent => processComponent(childComponent));
        }
      }
    }
    processComponent(documentComponenten);
    return eid2wid;
  }

  private convertToHtml(documentComponenten, eid2wid) {
    let i = 0;
    const doc = document.implementation.createHTMLDocument();
    const processComponent = (component, parentComponent) => {
      if ((parentComponent != null) && (parentComponent._links != null)) {
        if (parentComponent._links.inheritedDivisieannotaties != null) {
          component._links.inheritedDivisieannotaties = parentComponent._links.inheritedDivisieannotaties.concat();
        }
        if (parentComponent._links.divisieannotatie != null) {
          component._links.inheritedDivisieannotaties = component._links.inheritedDivisieannotaties || [];
          component._links.inheritedDivisieannotaties.push(parentComponent._links.divisieannotatie);
        }
        if (parentComponent._links.inheritedOntwerpdivisieannotaties != null) {
          component._links.inheritedOntwerpdivisieannotaties = parentComponent._links.inheritedOntwerpdivisieannotaties.concat();
        }
        if (parentComponent._links.ontwerpdivisieannotatie != null) {
          component._links.inheritedOntwerpdivisieannotaties = component._links.inheritedOntwerpdivisieannotaties || [];
          component._links.inheritedOntwerpdivisieannotaties.push(parentComponent._links.ontwerpdivisieannotatie);
        }
      }

      if (component.type == "LID") {
        component.artikelNummer = parentComponent.nummer;
      } else if ((component.type == "DIVISIETEKST") && (component.nummer == null)) {
        component.divisieNummer = parentComponent.nummer;
      } else if ((component.type == "LICHAAM") && (component.conditieArtikel != null)) {
        const conditieArtikel = component.conditieArtikel;
        delete component.conditieArtikel;
        conditieArtikel._links = {};
        conditieArtikel.identificatie = "cond";
        conditieArtikel.expressie = component.expressie.replace(/body$/, "") + "cond";
        conditieArtikel.type = "ARTIKEL";
        conditieArtikel.geregistreerdMet = component.geregistreerdMet;
        conditieArtikel.inhoud = '<div class="od-Al">' + conditieArtikel.inhoud + '</div class="od-Al">';
        component._embedded = component._embedded || {documentComponenten: []};
        component._embedded.documentComponenten.unshift(conditieArtikel);
      } else if ((component.type == "ALGEMENE_TOELICHTING") || (component.type == "ARTIKELGEWIJZE_TOELICHTING")) {
        component.opschrift = component.type.replace("_", " ");
        component.type = "DIVISIE";
      }

      ["inhoud", "opschrift"].forEach(inhoudOrOpschrift => {
        if (component[inhoudOrOpschrift] != null) {
          let needsTrust = false;
          if (component[inhoudOrOpschrift].match(/ style="[^"]+"/)) {
            needsTrust = true;
          }
          if (component[inhoudOrOpschrift].includes("data-verwijst-naar-documentcomponent")) {
            component[inhoudOrOpschrift] = component[inhoudOrOpschrift].replace(
              /<span data-verwijst-naar-documentcomponent="([^"]+)" data-scope="">([^<]+)<\/span>/g,
              (match, eid, content) => "<a href=\"javascript:void(0)\" onclick=\"window.stopPlanViewerComponent.displaySetTab('lookup', '" + eid2wid[eid] + "')\" title=\"Naar deze tekst gaan\">" + content + "</a>"
            );
            needsTrust = true;
          }
          if (component[inhoudOrOpschrift].includes("od-Li") || component[inhoudOrOpschrift].includes("class=\"noot\"") || component[inhoudOrOpschrift].includes("od-IntIoRef")) {
            const el = doc.createElement("div");
            el.innerHTML = component[inhoudOrOpschrift];
            const liElements = el.getElementsByClassName("od-Li");
            for (let j = 0; j < liElements.length; j++) {
              const liElement = liElements.item(j);
              const liContainer = doc.createElement("div");
              liContainer.className = "od-LiContainer";
              liElement.before(liContainer);
              liContainer.appendChild(liElement);
              if (liElement.firstElementChild.className.includes("od-LiNummer")) {
                liElement.before(liElement.firstElementChild);
              } else {
                const liNummerElement = doc.createElement("div");
                liNummerElement.className = "od-LiNummer";
                liNummerElement.innerHTML = "&bull;";
                liElement.before(liNummerElement);
              }
            }
            const nootElements = el.querySelectorAll("div.noot");
            for (let j = 0; j < nootElements.length; j++) {
              const nootElement = nootElements.item(j);
              const nootId = "noot_" + i++;
              const nootIndex = nootElement.firstElementChild.textContent;
              const nootText = nootElement.nextElementSibling.firstElementChild.innerHTML;
              nootElement.nextSibling.remove();
              nootElement.outerHTML = "<div onclick=\"event.stopPropagation()\" class=\"od-Noot\"><sup><a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='block'\">[" + nootIndex + "]</a></sup><div id=\"" + nootId + "\" class=\"od-Al\" style=\"display: none\"><sup>[" + nootIndex + "]</sup> " + nootText + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='none'\" class=\"hide\"><span class=\"fa fa-times\"></span></a></div></div>";
              needsTrust = true;
            }
            const intIoRefElements = el.getElementsByClassName("od-IntIoRef");
            for (let j = 0; j < intIoRefElements.length; j++) {
              const intIoRefElement = intIoRefElements.item(j);
              const content = intIoRefElement.innerHTML;
              intIoRefElement.innerHTML = "<a href=\"javascript:void(0)\" onclick=\"window.stopPlanViewerComponent.displayEmit('annotationsVisible', '" + content.replace(/'/g, "") + "')\" title=\"Locatie tonen\">" + content + "</a>";
              needsTrust = true;
            }
            component[inhoudOrOpschrift] = el.innerHTML;
          }
          if (needsTrust) {
            component[inhoudOrOpschrift] = this.sanitizer.bypassSecurityTrustHtml(component[inhoudOrOpschrift]);
          }
        }
      });

      if (component.type == "LID") {
        component.viewHeader = component.nummer;
      } else if (((component.type != "DIVISIETEKST") || component.opschrift) && (component.type != "BEGRIP")) {
        component.viewHeader = "";
        if ((component.nummer != null) || (component.opschrift == null)) {
          if (this.titleSymbols[component.type] != null) {
            component.viewHeader += "<div>" + this.titleSymbols[component.type] + "</div>";
          } else if (component.label != null) {
            component.viewHeader += "<div>" + component.label + "</div>";
          }
          component.viewHeader += "<div>" + (component.nummer || "[ongenummerd]") + "</div>";
        }
        if (component.opschrift != null) {
          component.viewHeader += component.opschrift.changingThisBreaksApplicationSecurity || component.opschrift;
        }
        if (component.gereserveerd) {
          component.viewHeader += "<div>[gereserveerd]</div>";
        }
        if (component.vervallen) {
          component.viewHeader += "<div>[vervallen]</div>";
        }
        if (component.opschrift?.changingThisBreaksApplicationSecurity != null) {
          component.viewHeader = this.sanitizer.bypassSecurityTrustHtml(component.viewHeader);
        }
      }

      if (component._embedded != null) {
        if (component._embedded.documentComponenten != null) {
          component._embedded.documentComponenten.forEach(childComponent => processComponent(childComponent, component));
        } else if (component._embedded.ontwerpDocumentComponenten != null) {
          component._embedded.ontwerpDocumentComponenten.forEach(childComponent => processComponent(childComponent, component));
        }
      }
    }
    processComponent(documentComponenten, null);
  }

  setPlan(plan, dossierSet) {
    this.plan = plan;
    this.diffPlan = null;
    this.dossierSet = dossierSet;

    const layers = this.layerModel.layers;
    if (plan == null) {
      layers[1] = null;
      this.setKaart(null);
      layers[3].visible = false;
      layers[5].visible = false;
    } else if (plan.versieImro != null) {
      this.planLevelModel.setPlanLevel(plan.viewPlanLevel);

      let styleURL = null;
      if (plan.vormvrijType || (plan.kaarten.length > 0)) {
        layers[1] = null;
        if (plan.kaarten.length > 0) {
          this.setKaart(plan.kaarten[0]);
        } else {
          this.setKaart(null);
        }
        layers[3].visible = false;
        if (plan.typePlan == "structuurvisie") {
          styleURL = environment.websiteUrl + "web-roo/remote-sld/v-plangebied.jsp?plangebied=" + this.plan.identificatie;
        } else {
          styleURL = environment.websiteUrl + "web-roo/remote-sld/i-plangebied.jsp?plangebied=" + this.plan.identificatie;
        }
      } else {
        layers[1] = new Layer("BP%3AHuidigeBestemming");
        layers[1].baseURL = environment.geoUrl + "afnemers/services";
        layers[1].vendorSpecifics = {"PLANGEBIED": this.plan.identificatie, "RELATEDPLANS": "false"};
        this.setKaart(null);
        layers[3].visible = true;
        styleURL = environment.websiteUrl + "web-roo/remote-sld/b-plangebied.jsp?plangebied=" + this.plan.identificatie;
      }
      layers[5].visible = false;
    } else {  // Regeling.
      layers[1] = null;
      this.setKaart(null);
      layers[3].visible = false;
      layers[5].visible = true;
    }

    this.setPlanInPlanalysis();
    this.setDocuments();
    this.setImowPlan();
//    this.setOutOfBounds();

    this.dispatchEvent("planModel.plan");
  }

  setPlanInPlanalysis() {
    if ((this.planalysis == null) || (this.plan == null)) {
      this.planInPlanalysis = false;
      return;
    }

    for (let i = 0; i < this.planalysis.planItems.length; i++) {
      for (let j = 0; j < this.planalysis.planItems[i].length; j++) {
        for (let k = 0; k < this.planalysis.planItems[i][j].length; k++) {
          if (this.plan.identificatie == this.planalysis.planItems[i][j][k].plan.identificatie) {
            this.planInPlanalysis = true;
            return;
          }
        }
      }
    }
    this.planInPlanalysis = false;
  }

  setKaart(kaart) {
    this.kaart = kaart;

    if (kaart == null) {
      this.layerModel.layers[2] = null;
    } else {
      this.layerModel.layers[2] = new Layer(this.plan.identificatie.replace(/\./g, "_") + "_" + kaart.kaartNummer);
      this.layerModel.layers[2].baseURL = environment.geoWebCacheUrl;
    }
  }

  setDocuments() {
    this.documents = [];

    if ((this.plan == null) || (this.plan.versieImro == null)) {
      return;
    }

    const documentTypes = [
      ["plantekst", "regels", "bijlage bij regels", "voorschriften", "bijlage bij voorschriften", "toelichting", "bijlage bij toelichting", "beleidstekst", "bijlage bij beleidstekst", "beleidsdocument", "bijlage bij beleidsdocument", "beleidsteksten", "illustratie", "plankaart", "bijlage", "externe verwijzing"],
      ["vaststellingsbesluit", "besluitdocument", "bijlage bij besluitdocument"]
    ];
    const urlPrefix = environment.websiteUrl + "documents/" + this.plan.identificatie + "/";
    for (let i = 0; i < 2; i++) {  // 0: non-expert document types, 1: expert document types
      for (let j = 0; j < documentTypes[i].length; j++) {
        const documentType = documentTypes[i][j];
        const documentObjects = this.plan.verwijzingen.verwijzingenPerType[documentType];
        if (documentObjects != null) {
          for (let k = 0; k < documentObjects.length; k++) {
            const documentObject = documentObjects[k];
            let labelPostfix = "";
            if ((documentType == "bijlage") && (documentObject.label != null) && (documentObject.label.indexOf("rb") == 0)) {
              labelPostfix = " bij de regels";
            } else if ((documentType == "bijlage") && (documentObject.label != null) && (documentObject.label.indexOf("tb") == 0)) {
              labelPostfix = " bij de toelichting";
            } else if (documentObjects.length > 1) {
              labelPostfix = " " + (k + 1);
            }
            this.documents.push({
              "label": documentType + labelPostfix,
              "url": ((documentType == "externe verwijzing")? "": urlPrefix) + documentObject.verwijzingLink,
              "expert": (i == 1)
            });
          }
        }
      }
    }
  }

  zoomTo(plan) {
    this.nineyDefault.defaultEnvelopeModel.setEnvelope(plan.viewEnvelope);
  }

  private isPlanInvalid(plan) {
    if (this.timeModel.time < plan.geregistreerdMet.tijdstipRegistratie.split("T")[0]) {
      return true;
    }
    if (plan.technischId != null) {
      return false;
    }
    if (this.timeModel.time > plan.timeRequested) {
      return true;
    }
    if (this.timeModel.time >= plan.geregistreerdMet.eindGeldigheid) {
      return true;
    }
    return false;
  }

  private setImowPlan() {
    if ((this.plan == null) || (this.plan.versieImro != null)) {
      this.imowModel.setPlan(null);
      return;
    }

    this.imowModel.setPlan(this.plan);
  }
}
