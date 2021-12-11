import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CenterScale, FocusModel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { LayerModelService } from "src/app/model/layer-model.service";

@Component({
  selector: "dso-legend-panel",
  templateUrl: "./legend-panel.component.html",
  styleUrls: ["./legend-panel.component.scss"]
})
export class LegendPanelComponent implements OnInit {
  wide = true;
  tab = "background";
  expertSettingsVisible = false;

  @Output() close: EventEmitter<any> = new EventEmitter(false);

  constructor(
    public nineyDefaultService: NineyDefaultService,
    public layerModel: LayerModelService,
    public imowModel: ImowModelService,
    public highlightModel: HighlightModelService
  ) { }

  ngOnInit() {
    if (this.imowModel.annotationLayers.length > 0) {
      this.tab = "legend";
    } else {
      this.tab = "background";
    }
  }

  zoomInToDetailLevel() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    const cs = focusModel.centerScale;
    if (cs.scale > 2381.100862299) {
      focusModel.setCenterScale(new CenterScale(cs.centerX, cs.centerY, 2381.100862299), FocusModel.ALWAYS_NEAREST);
    }
  }

  toggleExpertSettingsVisible() {
    this.expertSettingsVisible = !this.expertSettingsVisible;
    if (!this.expertSettingsVisible) {
        this.layerModel.reset();
    }
  }
}
