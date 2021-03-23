import { Component } from "@angular/core";
import { CenterScale, Envelope, FocusModel, Loader, ZoomLevel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { LayerModelService } from "src/app/model/layer-model.service";

@Component({
  selector: "dso-map-panel",
  templateUrl: "./map-panel.component.html",
  styleUrls: ["./map-panel.component.scss"]
})
export class MapPanelComponent {
  loader = new Loader();

  constructor(
    public nineyDefaultService: NineyDefaultService,
    public layerModel: LayerModelService
  ) {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    focusModel.srs.srid = 28992;
    focusModel.srs.zoomLevels = [
        new ZoomLevel(0, 9752989.13197535, 3440.64),
        new ZoomLevel(1, 4876494.565987675, 1720.32),
        new ZoomLevel(2, 2438247.282993837, 860.16),
        new ZoomLevel(3, 1219123.641496919, 430.08),
        new ZoomLevel(4, 609561.820748459, 215.04),
        new ZoomLevel(5, 304780.91037423, 107.52),
        new ZoomLevel(6, 152390.455187115, 53.76),
        new ZoomLevel(7, 76195.227593557, 26.88),
        new ZoomLevel(8, 38097.613796779, 13.44),
        new ZoomLevel(9, 19048.806898389, 6.72),
        new ZoomLevel(10, 9524.403449195, 3.36),
        new ZoomLevel(11, 4762.201724597, 1.68),
        new ZoomLevel(12, 2381.100862299, 0.84),
        new ZoomLevel(13, 1190.550431149, 0.42),
        new ZoomLevel(14, 595.275215575, 0.21)
    ];
    focusModel.srs.minX = -285401.92;
    focusModel.srs.maxY = 903401.9199999999;
    focusModel.maxEnvelope = new Envelope(-285401.92, 0, 600000, 903401.9199999999);
    focusModel.minScale = 595.275215575;
    focusModel.maxScale = 2438247.282993837;
    focusModel.setCenterScale(new CenterScale(148000, 465000, 1219123.641496919));
  }

  zoomIn() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    const cs = focusModel.centerScale;
    focusModel.setCenterScale(new CenterScale(cs.centerX, cs.centerY, cs.scale / 2), FocusModel.ALWAYS_NEAREST);
  }

  zoomOut() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    const cs = focusModel.centerScale;
    focusModel.setCenterScale(new CenterScale(cs.centerX, cs.centerY, cs.scale * 2), FocusModel.ALWAYS_NEAREST);
  }
}
