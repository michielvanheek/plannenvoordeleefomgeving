import { Injectable, NgZone } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { CenterScale, Envelope, FocusModel, Layer, WKTConverter } from "ng-niney";
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

      this.imowModel.setMarkerLocaties([]);
    } else {
      const point = this.markerModel.xy;
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/xy/" + point.x + "/" + point.y;
      this.http.get(url).subscribe(response => {
        const plannen = response["plannen"];
        if (plannen != null) {
          plannen.forEach(plan => this.planDecorator.decoratePlan(plan, true));
        }
        this.setPlanalysis(plannen);

        this.stateModel.enterSelectPlan();

        const options = environment.dsoOptions;
        const url = environment.dsoUrl + "locaties/zoekgebied/_zoek";
        const post = {
          geo: {
            geometrie: {
              type:"Point",
              coordinates:[point.x, point.y]
            },
            spatialOperator:"intersects"
          }
        };
        this.imowModel.markerLoading = true;
        this.http.post(url, post, options).subscribe(response => {
          this.imowModel.setMarkerLocaties(response["_embedded"].locaties);
          this.imowModel.markerLoading = false;

          const locatieIdentificaties = this.imowModel.markerLocaties.map(locatie => locatie.identificatie);
          const url = environment.dsoUrl + "omgevingsdocumenten/_zoek?page=0&size=2000";
          const post = {
            zoekParameters: [{
              parameter: "locatie.identificatie",
              zoekWaarden: locatieIdentificaties
            }]
          };
          this.http.post(url, post, options).subscribe(response => {
            const omgevingsdocumenten = response["_embedded"].omgevingsdocumenten;
            omgevingsdocumenten.forEach(plan => {
              this.planDecorator.decorateOmgevingsdocument(plan);
              this.planDecorator.decoratePlan(plan, true);
            });
            this.setPlanalysis(plannen.concat(omgevingsdocumenten));

            const url = environment.dsoUrl + "omgevingsdocumenten/beleid/_zoek?page=0&size=2000";
            this.http.post(url, post, options).subscribe(response => {
              const omgevingsdocumentenBeleid = response["_embedded"].omgevingsdocumenten;
              omgevingsdocumentenBeleid.forEach(plan => {
                this.planDecorator.decorateOmgevingsdocument(plan);
                this.planDecorator.decoratePlan(plan, true);
              });
              this.setPlanalysis(plannen.concat(omgevingsdocumenten, omgevingsdocumentenBeleid));
            });
          });
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

  loadPlan(idn, dossierSet, zoomToPlan, local) {
    if ((this.plan != null) && (idn == this.plan.identificatie)) {
      return;
    }

    if (dossierSet == "CURRENT") {
      dossierSet = this.dossierSet;
    } else if (dossierSet == "PLANALYSIS") {
      dossierSet = this.planalysis.dossierSets[idn];
    }

    if (idn.indexOf("NL.IMRO") == 0) {
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + idn;
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

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + idn + "/geometrie";
        this.http.get(url).subscribe(response => {
          plan.geometrie = (new WKTConverter()).wktToCoordPath(response["geometrie"]);
        });
      });
    } else {  // AKN.
      const plan = this.omgevingsdocumentModel.omgevingsdocumenten.find(omgevingsdocument => omgevingsdocument.identificatie == idn);
      this.setPlan(plan, dossierSet);
//      if (zoomToPlan) {
//        this.zoomToPlan();
//      }

      const underscoredDocumentId = idn.replace(/[^a-zA-Z0-9]/g, "_");
      const options = environment.dsoOptions;
      const url = local? `/assets/${underscoredDocumentId}.json`: environment.dsoUrl + "omgevingsdocumenten/" + underscoredDocumentId + "/documentcomponenten";
      this.http.get(url, options).subscribe(response => {
        let i = 0;
        const components = [];
        const doc = document.implementation.createHTMLDocument();
        const processComponent = component => {
          if (component.identificatie != null) {
            components.push(component);
          }
          for (const key in component) {
            if (key == "type") {
              if ((component[key] == "ALGEMENE_TOELICHTING") || (component[key] == "ARTIKELGEWIJZE_TOELICHTING")) {
                component.opschrift = component[key].replace("_", " ");
                component[key] = "DIVISIE";
              }
            } else if (key == "inhoud") {
              if (component[key].includes("od-Li") || component[key].includes("od-Noot")) {
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
                const nootElements = el.getElementsByClassName("od-Noot");
                for (let j = 0; j < nootElements.length; j++) {
                  const nootElement = nootElements.item(j);
                  const nootChildren = nootElement.children;
                  const nootId = "noot_" + i++;
                  const nootIndex = nootChildren.item(0).textContent;
                  const nootText = nootChildren.item(1).innerHTML;
                  nootElement.innerHTML = "<sup><a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='block'\">[" + nootIndex + "]</a></sup><div id=\"" + nootId + "\" class=\"od-Al\" style=\"display: none\"><sup>[" + nootIndex + "]</sup> " + nootText + "<a href=\"javascript:void(0)\" onclick=\"document.getElementById('" + nootId + "').style['display']='none'\" class=\"hide\"><span class=\"fa fa-times\"></span></a></div>";
                }
                component[key] = this.sanitizer.bypassSecurityTrustHtml(el.innerHTML);
              }
            } else if ((component[key] != null) && (typeof component[key] == "object")) {
              processComponent(component[key]);
            }
          }
        }
        processComponent(response);
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
    this.setImowPlanIdentificatie();
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

  setImowPlanIdentificatie() {
    if ((this.plan == null) || (this.plan.versieImro != null)) {
      this.imowModel.setPlanIdentificatie(null);
      return;
    }

    this.imowModel.setPlanIdentificatie(this.plan.identificatie);
  }

  zoomToPlan() {
    const centerX = this.plan.boundingBox.minX + this.plan.boundingBox.width / 2;
    const centerY = this.plan.boundingBox.minY + this.plan.boundingBox.height / 2;
    const scale = Math.max(
      this.plan.boundingBox.width / this.nineyDefault.defaultBoundsModel.bounds.width,
      this.plan.boundingBox.height / this.nineyDefault.defaultBoundsModel.bounds.height
    ) / this.nineyDefault.defaultFocusModel.centerScale.coordPixFactor * 1.05;
    this.nineyDefault.defaultFocusModel.setCenterScale(new CenterScale(centerX, centerY, scale), FocusModel.IF_REQUIRED_UPPER);
  }
}
