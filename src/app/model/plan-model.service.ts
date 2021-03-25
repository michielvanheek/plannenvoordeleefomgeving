import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CenterScale, Envelope, FocusModel, Layer } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { LayerModelService } from "./layer-model.service";
import { MarkerModelService } from "./marker-model.service";
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

  planalysis = new Planalysis(null, null, null);
  plan = null;
  dossierSet = null;
  kaart = null;

  constructor(
    private zone: NgZone,
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    private stateModel: StateModelService,
    private parapluModel: ParapluModelService,
    private layerModel: LayerModelService,
    private markerModel: MarkerModelService,
    private planLevelModel: PlanLevelModelService,
    private planDecorator: PlanDecoratorService
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
    } else {
      const point = this.markerModel.xy;
      const url = environment.websiteProxyURL + "web-roo/rest/search/plannen/xy/" + point.x + "/" + point.y;
      this.http.get(url).subscribe(response => {
        const plannen = response["plannen"];
        if (plannen != null) {
          for (let i = 0; i < plannen.length; i++) {
            this.planDecorator.decoratePlan(plannen[i], true); 
          }
        }
        this.setPlanalysis(plannen);

        this.stateModel.enterSelectPlan();
      });
    }
  }

  setPlanalysis(plannen) {
    this.planalysis = new Planalysis(plannen, this.planLevelModel.planLevels, this.parapluModel.parapluItems);
//    this.setPlanInPlanalysis();
  }

  loadPlan(idn, dossierSet, zoomToPlan) {
    if ((this.plan != null) && (idn == this.plan.identificatie)) {
        return;
    }

    if (dossierSet == "CURRENT") {
        dossierSet = this.dossierSet;
    } else if (dossierSet == "PLANALYSIS") {
        dossierSet = this.planalysis.dossierSets[idn];
    }

    const url = environment.websiteProxyURL + "web-roo/rest/search/plan/id/" + idn;
    this.http.get(url).subscribe(response => {
      this.planDecorator.decoratePlan(response, true);

        const bb = response["boundingBox"];
        response["viewEnvelope"] = new Envelope(bb.minX, bb.minY, bb.maxX, bb.maxY);

        response["viewSymbols"] = {};
        for (let i = 0; i < response["kaarten"].length; i++) {
            setSymbols(response["kaarten"][i].planObjecten);
        }
        function setSymbols(symbolObjects) {
            for (let i = 0; i < symbolObjects.length; i++) {
                const symbolObject = symbolObjects[i];
                if (symbolObject.symboolCodes[0] != null) {
                    response["viewSymbols"][symbolObject.identificatie] = symbolObject.symboolCodes[0];
                }
                if (symbolObject.hasChildren) {
                    setSymbols(symbolObject.children);
                }
            }
        }

        this.setPlan(response, dossierSet);
        if (zoomToPlan) {
            this.zoomToPlan();
        }
    });
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
        layers[4] = null;
    } else {
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
                styleURL = environment.websiteURL + "web-roo/remote-sld/v-plangebied.jsp?plangebied=" + this.plan.identificatie;
            } else {
                styleURL = environment.websiteURL + "web-roo/remote-sld/i-plangebied.jsp?plangebied=" + this.plan.identificatie;
            }
        } else {
            layers[1] = new Layer("BP%3AHuidigeBestemming");
            layers[1].baseURL = environment.geoURL + "afnemers/services";
            layers[1].vendorSpecifics = {"PLANGEBIED": this.plan.identificatie, "RELATEDPLANS": "false"};
            this.setKaart(null);
            layers[3].visible = true;
            styleURL = environment.websiteURL + "web-roo/remote-sld/b-plangebied.jsp?plangebied=" + this.plan.identificatie;
        }
        layers[4] = new Layer(null);
        layers[4].baseURL = environment.geoURL + "afnemers/services";
        layers[4].styleURL = styleURL;
    }
//    this.setPlanInPlanalysis();
//    this.loadPlantekst();
//    this.setDocuments();
//    this.setOutOfBounds();
  }

  setKaart(kaart) {
    this.kaart = kaart;

    if (kaart == null) {
      this.layerModel.layers[2] = null;
    } else {
      this.layerModel.layers[2] = new Layer(this.plan.identificatie.replace(/\./g, "_") + "_" + kaart.kaartNummer);
      this.layerModel.layers[2].baseURL = environment.geoURL + "geowebcache/service/wms";
    }
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
