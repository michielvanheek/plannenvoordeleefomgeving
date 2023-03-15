import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WKTConverter } from "ng-niney";
import { AnnotationLayer } from "../domain/annotation-layer";
import { ImowModelService } from "./imow-model.service";
import { LayerModelService } from "./layer-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HighlightModelService {
  private loading = {};

  imroHighlight = {};
  imowHighlight = {filter: {identificatie: "nothing"}, cssFunction: null, confineFill: false};

  constructor(
    private http: HttpClient,
    private layerModel: LayerModelService,
    private imowModel: ImowModelService
  ) { }

  setHighlight(planOrInfo, imro = true) {
    if (imro) {  // IMRO plan or IMRO info.
      if (planOrInfo == null) {
        this.imroHighlight = {};
        return;
      }

      this.imroHighlight = planOrInfo;

      if (planOrInfo.geometrie != null) {
        return;
      }
      const identificatie = planOrInfo.identificatie;
      if (this.loading[identificatie]) {
        return;
      }
      this.loading[identificatie] = true;
      const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + identificatie + "/geometrie";
      this.http.get(url).subscribe(
        response => {
          delete this.loading[identificatie];
          planOrInfo.geometrie = (new WKTConverter()).wktToCoordPath(response["geometrie"]);
        },
        response => {
          delete this.loading[identificatie];
        }
      );
    } else {  // Regeling or IMOW info or IMOW annotation (with locaties) or IMOW locatie.
      if (planOrInfo == null) {
        this.layerModel.layers[7].visible = false;
        delete this.imowModel.loadLocatieForPlanPostActions["highlightVisible"];
        return;
      }

      if (planOrInfo.locatieIdentificatie != null) {  // Regeling.
        this.layerModel.layers[7].visible = false;
        this.imowModel.loadLocatieForPlanPostActions["highlightVisible"] = () => {
          this.imowHighlight = {
            filter: planOrInfo.locatie,
            cssFunction: null,
            confineFill: !planOrInfo.locatie.locatieType.indexOf("Lijn")
          };
          this.layerModel.layers[7].visible = true;
        };
        this.imowModel.loadLocatieForPlan(planOrInfo);
      } else {
        this.layerModel.layers[7].visible = true;
        if (planOrInfo.locaties != null) {           // IMOW info or IMOW annotation (with locaties).
          const locaties = planOrInfo.locaties.concat(planOrInfo.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []));
          this.imowHighlight = {
            filter: locaties,
            cssFunction: (planOrInfo.annotation?.omgevingsnorm || planOrInfo.annotation || planOrInfo.omgevingsnorm)?.layer?.labelCssFunction,
            confineFill: !locaties[0].locatieType.indexOf("Lijn")
          };
        } else if (planOrInfo.normwaarde != null) {  // IMOW omgevingsnorm.
          const locaties = planOrInfo.normwaarde.reduce((locaties, normwaarde) => locaties.concat(normwaarde.locaties.concat(normwaarde.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))), []);
          this.imowHighlight = {
            filter: locaties,
            cssFunction: (planOrInfo.layer || new AnnotationLayer(this.imowModel["imowValueModel"], planOrInfo)/* TEMP until OZON supports POST */).labelCssFunction,
            confineFill: !locaties[0].locatieType.indexOf("Lijn")
          };
        } else {                                     // IMOW locatie.
          this.imowHighlight = {
            filter: planOrInfo,
            cssFunction: null,
            confineFill: !planOrInfo.locatieType.indexOf("Lijn")
          };
        }
      }
    }
  }
}
