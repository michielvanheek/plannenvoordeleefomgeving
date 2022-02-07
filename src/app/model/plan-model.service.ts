import { Injectable, NgZone } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { Envelope, JsonConverter, Layer, WKTConverter } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
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

  numLoadingR = 0;

  planalysis = null;
  plan = null;
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
    private parapluModel: ParapluModelService,
    private layerModel: LayerModelService,
    private markerModel: MarkerModelService,
    private planLevelModel: PlanLevelModelService,
    private planDecorator: PlanDecoratorService,
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
      //this.imowModel.setMarkerOntwerpLocatieIds(locatieIdentificaties);
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

      const options = environment.dsoOptions;
      const post = {
        geo: {
          geometrie: (new JsonConverter()).geometryToJson(this.markerModel.polygon || this.markerModel.xy, false),
          spatialOperator:"intersects"
        }
      };
      [false, true].forEach(ontwerpLocaties => {
        const url = environment.dsoUrl + (!ontwerpLocaties? "locatieidentificaties/_zoek": "ontwerplocaties/technischids/_zoek");
        this.numLoadingR++;
        this.http.post(url, post, options).subscribe(
          response => {
            const locatieIdentificaties = response["_embedded"].locatieidentificaties || response["_embedded"].technischIds;
            if (locatieIdentificaties.length > 0) {
              const post = {
                zoekParameters: [{
                  parameter: !ontwerpLocaties? "locatie.identificatie": "ontwerplocatie.technischId",
                  zoekWaarden: locatieIdentificaties
                }]
              };
              [false, true].forEach(ontwerpRegelingen => {
                if (!ontwerpRegelingen && ontwerpLocaties) {
                  return;
                }

                ["regels", "tekstdelen"].forEach(type => {
                  const url = environment.dsoUrl + (ontwerpRegelingen? "ontwerp": "") + "regelingen/" + type + "/_zoek?page=0&size=200";
                  this.numLoadingR++;
                  this.http.post(url, post, options).subscribe(
                    response => {
                      const regelingen = response["_embedded"].regelingen || response["_embedded"].ontwerpRegelingen;
                      regelingen.forEach(regeling => {
                        this.planDecorator.decorateOmgevingsdocument(regeling);
                        this.planDecorator.decoratePlan(regeling, true);
                      });
                      plannen = plannen.concat(regelingen);
                      this.setPlanalysis(plannen);

                      this.numLoadingR--;
                    },
                    error => {
                      this.numLoadingR--;
                    }
                  );
                });
              });
            }
            if (!ontwerpLocaties) {
              this.imowModel.setMarkerLocatieIdentificaties(locatieIdentificaties);
            } else {
              //this.imowModel.setMarkerOntwerpLocatieIds(locatieIdentificaties);
            }
            this.numLoadingR--;
          },
          error => {
            this.numLoadingR--;
          }
        );
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
    if ((this.plan != null) && ((identificatie == this.plan.identificatie) || (identificatie == this.plan.technischId))) {
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
      const plan = this.omgevingsdocumentModel.regelingen.find(regeling => (regeling.identificatie == identificatie) || (regeling.technischId == identificatie));
      this.setPlan(plan, dossierSet);
      if (zoomToPlan) {
        this.imowModel.loadLocatieForPlanPostActions["zoomToPlan"] = () => { if (this.plan == plan) { this.zoomToPlan(); }};
      }
      this.imowModel.loadLocatieForPlan(plan);
      if (postAction != null) {
        postAction();
      }

      const underscoredDocumentId = identificatie.replace(/[^a-zA-Z0-9]/g, "_");
      const options = environment.dsoOptions;
      const url = local? `/assets/${underscoredDocumentId}.json`: environment.dsoUrl + (plan.technischId? "ontwerp": "") + "regelingen/" + underscoredDocumentId + "/" + (plan.technischId? "ontwerp": "") + "documentcomponenten";
      this.http.get(url, options).subscribe(response => {
        let i = 0;
        const components = [];
        const doc = document.implementation.createHTMLDocument();
        const processComponent = (component, parentComponent) => {
          if (component.identificatie != null) {
            components.push(component);
          }
          if ((parentComponent != null) && (parentComponent._links != null)) {
            if (parentComponent._links.inheritedDivisies != null) {
              component._links.inheritedDivisies = parentComponent._links.inheritedDivisies.concat();
            }
            if (parentComponent._links.divisie != null) {
              component._links.inheritedDivisies = component._links.inheritedDivisies || [];
              component._links.inheritedDivisies.push(parentComponent._links.divisie);
            }
            if (parentComponent._links.inheritedOntwerpDivisies != null) {
              component._links.inheritedOntwerpDivisies = parentComponent._links.inheritedOntwerpDivisies.concat();
            }
            if (parentComponent._links.ontwerpdivisie != null) {
              component._links.inheritedOntwerpDivisies = component._links.inheritedOntwerpDivisies || [];
              component._links.inheritedOntwerpDivisies.push(parentComponent._links.ontwerpdivisie);
            }
          }
          for (const key in component) {
            if (key == "type") {
              if (component[key] == "LID") {
                component.artikelNummer = parentComponent.nummer;
              } else if ((component[key] == "DIVISIETEKST") && (component.nummer == null)) {
                component.divisieNummer = parentComponent.nummer;
              } else if ((component[key] == "ALGEMENE_TOELICHTING") || (component[key] == "ARTIKELGEWIJZE_TOELICHTING")) {
                component.opschrift = component[key].replace("_", " ");
                component[key] = "DIVISIE";
              }
            } else if (key == "opschrift") {
              if (component[key].includes("od-Noot")) {
                const el = doc.createElement("div");
                el.innerHTML = component[key];
                const nootElements = el.getElementsByClassName("od-Noot");
                for (let j = 0; j < nootElements.length; j++) {
                  const nootElement = nootElements.item(j);
                  const nootChildren = nootElement.children;
                  const nootId = "noot_" + i++;
                  const nootIndex = nootChildren.item(0).textContent;
                  const nootText = nootChildren.item(1).innerHTML;
                  nootElement.outerHTML = "<div onclick=\"event.stopPropagation()\" class=\"od-Noot\"><sup><a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='block'\">[" + nootIndex + "]</a></sup><div id=\"" + nootId + "\" class=\"od-Al\" style=\"display: none\"><sup>[" + nootIndex + "]</sup> " + nootText + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='none'\" class=\"hide\"><span class=\"fa fa-times\"></span></a></div></div>";
                }
                component[key] = this.sanitizer.bypassSecurityTrustHtml(el.innerHTML);
              }
            } else if (key == "inhoud") {
              if (component[key].includes("od-Li") || component[key].includes("class=\"noot\"") || component[key].includes("od-IntIoRef")) {
                const el = doc.createElement("div");
                el.innerHTML = component[key];
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
                }
                const intIoRefElements = el.getElementsByClassName("od-IntIoRef");
                for (let j = 0; j < intIoRefElements.length; j++) {
                  const intIoRefElement = intIoRefElements.item(j);
                  const content = intIoRefElement.innerHTML;
                  intIoRefElement.innerHTML = "<a href=\"javascript:void(0)\" onclick=\"window.stopPlanViewerComponent.displayEmit('annotationsVisible', '" + content + "')\" title=\"Geografische begrenzing tonen\">" + content + "</a>";
                }
                component[key] = this.sanitizer.bypassSecurityTrustHtml(el.innerHTML);
              }
            } else if ((key == "_embedded") && (component[key].documentComponenten != null)) {
              component[key].documentComponenten.forEach(childComponent => processComponent(childComponent, component));
            } else if ((key == "_embedded") && (component[key].ontwerpDocumentComponenten != null)) {
              component[key].ontwerpDocumentComponenten.forEach(childComponent => processComponent(childComponent, component));
            }
          }
        }
        processComponent(response, null);
        this.imowModel.components = components;

        plan.structuur = response;
      });
    }

//    oepModel.load(idn);
  }

  setPlan(plan, dossierSet) {
    this.plan = plan;
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
