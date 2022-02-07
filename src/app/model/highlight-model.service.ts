import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WKTConverter } from "ng-niney";
import { ImowModelService } from "./imow-model.service";
import { LayerModelService } from "./layer-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HighlightModelService {
  private loading = {};

  imroHighlight = {};
  imowHighlight = {locaties: null, locatie: {identificatie: "nothing"}};

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
    } else {  // Omgevingsdocument or IMOW info or IMOW annotation (with locaties) or IMOW locatie.
      if (planOrInfo == null) {
        this.layerModel.layers[7].visible = false;
        delete this.imowModel.loadLocatieForPlanPostActions["highlightVisible"];
        return;
      }

      if (planOrInfo.locatieIdentificatie != null) {  // Omgevingsdocument.
        this.layerModel.layers[7].visible = false;
        this.imowModel.loadLocatieForPlanPostActions["highlightVisible"] = () => { this.layerModel.layers[7].visible = true; };
        this.imowModel.loadLocatieForPlan(planOrInfo);
        this.imowHighlight = planOrInfo;
      } else {
        this.layerModel.layers[7].visible = true;
        if (planOrInfo.locaties != null) {           // IMOW info or IMOW annotation (with locaties).
          const locaties = planOrInfo.locaties.concat(planOrInfo.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []));
          this.imowHighlight = {locaties: locaties, locatie: null};
        } else if (planOrInfo.normwaarde != null) {  // IMOW omgevingsnorm.
          const locaties = planOrInfo.normwaarde.reduce((locaties, normwaarde) => locaties.concat(normwaarde.locaties.concat(normwaarde.locaties.reduce((locaties, locatie) => locaties.concat(locatie.omvat || []), []))), []);
          this.imowHighlight = {locaties: locaties, locatie: null};
        } else {                                     // IMOW locatie.
          this.imowHighlight = {locaties: null, locatie: planOrInfo};
        }
      }
    }
  }
}
