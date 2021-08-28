import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WKTConverter } from "ng-niney";
import { LayerModelService } from "./layer-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HighlightModelService {
  private loading = {};

  imroHighlight = {};
  imowHighlight = "nothing";

  constructor(
    private http: HttpClient,
    private layerModel: LayerModelService
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
    } else {  // Omgevingsdocument or IMOW info or IMOW locatie.
      if (planOrInfo == null) {
        this.layerModel.layers[7].visible = false;
        return;
      }

      const identificatie = planOrInfo.locatieIdentificatie || planOrInfo.identificatie;
      this.imowHighlight = identificatie;
      this.layerModel.layers[7].visible = true;
    }
  }
}
