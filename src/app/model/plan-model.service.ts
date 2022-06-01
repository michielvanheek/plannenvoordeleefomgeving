import { Injectable, NgZone } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { Envelope, JsonConverter, Layer, WKTConverter } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { DiffBuilderService } from "./diff-builder.service";
import { DisplayModelService } from "./display-model.service";
import { ImowModelService } from "./imow-model.service";
import { LayerModelService } from "./layer-model.service";
import { MarkerModelService } from "./marker-model.service";
import { OmgevingsdocumentModelService } from "src/app/model/omgevingsdocument-model.service";
import { ParapluModelService } from "./paraplu-model.service";
import { Planalysis } from "../domain/planalysis"
import { PlanDecoratorService } from "./plan-decorator.service";
import { PlanLevelModelService } from "./plan-level-model.service";
import { StateModelService } from "./state-model.service";
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root"
})
export class PlanModelService {
  private markerXY = null;

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

  numLoadingR = 0;

  planalysis = null;
  plan = null;
  diffPlan = null;
  dossierSet = null;
  planInPlanalysis = false;
  kaart = null;
  documents = [];

  constructor(
    private zone: NgZone,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    private stateModel: StateModelService,
    private displayModel: DisplayModelService,
    private parapluModel: ParapluModelService,
    private layerModel: LayerModelService,
    private markerModel: MarkerModelService,
    private planLevelModel: PlanLevelModelService,
    private planDecorator: PlanDecoratorService,
    private diffBuilder: DiffBuilderService,
    private omgevingsdocumentModel: OmgevingsdocumentModelService,
    private imowModel: ImowModelService
  ) {
    this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        if (this.markerXY != this.markerModel.xy) {
          this.markerXY = this.markerModel.xy;
          this.loadPlanalysis();
        }
      }
    });
  }

  loadPlanalysis() {
    if (this.markerModel.xy == null) {
      this.setPlanalysis(null);

      this.stateModel.leaveSelectPlan();

      this.imowModel.setMarkerLocatieIdentificaties([]);
    } else {
      let plannen = [];

      const point = this.markerModel.xy;
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/xy/" + point.x + "/" + point.y;
      this.numLoadingR++;
      this.http.get(url).subscribe(
        response => {
          const plannen1 = response["plannen"] || [];
          plannen1.forEach(plan => this.planDecorator.decoratePlan(plan, true));
          plannen = plannen.concat(plannen1);
          this.setPlanalysis(plannen);

          this.stateModel.enterSelectPlan();

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
                const rpPlannen = plannen1.filter(plan => plan.viewPlanLevel.name == "Gemeente").sort((a, b) => (a.datum < b.datum)? 1: (a.datum > b.datum)? -1: 0);
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

      let locatieIdentificaties = [];

      const options = environment.dsoOptions;
      const post = {
        geo: {
          geometrie: (new JsonConverter()).geometryToJson(this.markerModel.polygon || this.markerModel.xy, false),
          spatialOperator:"intersects"
        }
      };
      [false, true].forEach(ontwerpLocaties => {
        const url = environment.dsoUrl + (!ontwerpLocaties? "locatieidentificaties/_zoek": "ontwerplocaties/technischids/_zoek");
        this.http.post(url, post, options).subscribe(response => {
          const locatieIdentificaties1 = Object.values(response["_embedded"])[0] as any[];
          if (locatieIdentificaties1.length > 0) {
            const regelingen = this.omgevingsdocumentModel.regelingen.filter(regeling => locatieIdentificaties1.includes(regeling.locatieIdentificatie));
            plannen = plannen.concat(regelingen);
            this.setPlanalysis(plannen);
            locatieIdentificaties = locatieIdentificaties.concat(locatieIdentificaties1);
          }
          this.imowModel.setMarkerLocatieIdentificaties(locatieIdentificaties);
        });
      });
    }
  }

  setPlanalysis(plannen) {
    if (plannen == null) {
      this.planalysis = null;
    } else {
      this.planalysis = new Planalysis(plannen, this.planLevelModel.planLevels, this.parapluModel.parapluItems);
    }
    this.setPlanInPlanalysis();
  }

  loadPlan(identificatie, dossierSet, zoomToPlan, local, postAction = null) {
    if (
      ((this.plan != null) && (identificatie == (this.plan.technischId || this.plan.identificatie))) ||
      ((this.diffPlan != null) && (identificatie == (this.diffPlan.technischId || this.diffPlan.identificatie)) && local)
    ) {
      return;
    }

    if (dossierSet == "CURRENT") {
      dossierSet = this.dossierSet;
    } else if (dossierSet == "PLANALYSIS") {
      dossierSet = this.planalysis.dossierSets[identificatie];
    }

    if (identificatie.indexOf("NL.IMRO") == 0) {
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + identificatie;
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
          this.zoomToPlan();
        }
        if (postAction != null) {
          postAction();
        }

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + identificatie + "/geometrie";
        this.http.get(url).subscribe(response => {
          plan.geometrie = (new WKTConverter()).wktToCoordPath(response["geometrie"]);
        });
      });
    } else {  // AKN.
      const plan = this.omgevingsdocumentModel.regelingen.find(regeling => (regeling.technischId || regeling.identificatie) == identificatie);
      if (!local) {
        this.setPlan(plan, dossierSet);
        if (zoomToPlan) {
          this.imowModel.loadLocatieForPlanPostActions["zoomToPlan"] = () => { if (this.plan == plan) { this.zoomToPlan(); }};
        }
        this.imowModel.loadLocatieForPlan(plan);
        if (postAction != null) {
          postAction();
        }
      } else {
        this.diffPlan = plan;
      }

      const underscoredDocumentId = identificatie.replace(/[^a-zA-Z0-9]/g, "_");
      const options = environment.dsoOptions;
      const url = local? `/assets/${underscoredDocumentId}.json`: environment.dsoUrl + (plan.technischId? "ontwerp": "") + "regelingen/" + underscoredDocumentId + "/" + (plan.technischId? "ontwerp": "") + "documentcomponenten";
      this.imowModel.numLoadingC++;
      this.http.get(url, options).subscribe(
        response => {
          plan.documentComponenten = response;

          if (!local) {
            this.displayModel.initTabs(plan.documentComponenten, plan.typePlan);
          }

          this.displayModel.tabs.filter(tab => tab.algo).forEach((tab, i) => {
            if (!local || (i == 0)) {
              const components = this.getComponents(tab.algo(plan.documentComponenten));
              if (!local) {
                tab.components = components;
                tab.diffComponents = [];
              } else {  // i == 0
                tab.diffComponents = this.diffBuilder.getDiffComponents(components, tab.components);
              }
            }
          });
          this.imowModel.numLoadingC--;
        },
        error => {
          this.imowModel.numLoadingC--;
        }
      );
    }

//    oepModel.load(idn);
  }

  getComponents(documentComponenten) {
        let i = 0;
        const components = [];
        const doc = document.implementation.createHTMLDocument();
        const processComponent = (component, parentComponent) => {
          if (component.identificatie != null) {
            components.push(component);
          }

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
          } else if ((component.type == "ALGEMENE_TOELICHTING") || (component.type == "ARTIKELGEWIJZE_TOELICHTING")) {
            component.opschrift = component.type.replace("_", " ");
            component.type = "DIVISIE";
          }

          if (component.inhoud != null) {
              if (component.inhoud.match(/ style="[^"]+"/)) {
                component.inhoud = component.inhoud.replace(/ style="[^"]+"/g, "");
              }
              if (component.inhoud.includes("od-Li")) {
                const el = doc.createElement("div");
                el.innerHTML = component.inhoud;
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
                component.inhoud = el.innerHTML;
              }
          }

          ["inhoud", "opschrift"].forEach(inhoudOrOpschrift => {
            if (component[inhoudOrOpschrift] != null) {
              if (component[inhoudOrOpschrift].includes("class=\"noot\"") || component[inhoudOrOpschrift].includes("od-IntIoRef")) {
                const el = doc.createElement("div");
                el.innerHTML = component[inhoudOrOpschrift];
                const nootElements = el.querySelectorAll("div.noot");
                for (let j = 0; j < nootElements.length; j++) {
                  const nootElement = nootElements.item(j);
                  const nootId = "noot_" + i++;
                  const nootIndex = nootElement.firstElementChild.textContent;
                  const nootText = nootElement.nextElementSibling.firstElementChild.innerHTML;
                  nootElement.nextSibling.remove();
                  nootElement.outerHTML = "<div onclick=\"event.stopPropagation()\" class=\"od-Noot\"><sup><a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='block'\">[" + nootIndex + "]</a></sup><div id=\"" + nootId + "\" class=\"od-Al\" style=\"display: none\"><sup>[" + nootIndex + "]</sup> " + nootText + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='none'\" class=\"hide\"><span class=\"fa fa-times\"></span></a></div></div>";
                }
                const intIoRefElements = el.getElementsByClassName("od-IntIoRef");
                for (let j = 0; j < intIoRefElements.length; j++) {
                  const intIoRefElement = intIoRefElements.item(j);
                  const content = intIoRefElement.innerHTML;
                  intIoRefElement.innerHTML = "<a href=\"javascript:void(0)\" onclick=\"window.stopPlanViewerComponent.displayEmit('annotationsVisible', '" + content + "')\" title=\"Geografische begrenzing tonen\">" + content + "</a>";
                }
                component[inhoudOrOpschrift] = this.sanitizer.bypassSecurityTrustHtml(el.innerHTML);
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
        return components;
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
    } else {  // Omgevingsdocument.
      layers[1] = null;
      this.setKaart(null);
      layers[3].visible = false;
      layers[5].visible = true;
    }
    this.setPlanInPlanalysis();
    this.setDocuments();
    this.setImowPlan();
//    this.setOutOfBounds();
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

  zoomToPlan() {
    this.nineyDefault.defaultEnvelopeModel.setEnvelope(this.plan.viewEnvelope);
  }

  private setImowPlan() {
    if ((this.plan == null) || (this.plan.versieImro != null)) {
      this.imowModel.setPlan(null);
      return;
    }

    this.imowModel.setPlan(this.plan);
  }
}
