import { Component } from "@angular/core";
import { CenterScale, FocusModel, Loader } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { LayerModelService } from "src/app/model/layer-model.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { MeasureModelService } from "src/app/model/measure-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-map-panel",
  templateUrl: "./map-panel.component.html",
  styleUrls: ["./map-panel.component.scss"]
})
export class MapPanelComponent {
  loader = new Loader();

  private baselines = [
    {fill: "none", "stroke-width": "2px"},
    {fill: "none", "stroke-width": "1.5px"},
    {fill: "none", "stroke-width": "1px"},
    {fill: "none", "stroke-width": "0.3px"},
    {fill: "none", "stroke-width": "0.1px"}
  ];
  private highlines = [
    {fill: "none", "stroke-width": "3px"},
    {fill: "none", "stroke-width": "2.5px"},
    {fill: "none", "stroke-width": "2px"}
  ];
  private bumpses = [
    {fill: "none", "stroke-width": "10px", "stroke-dasharray": "0 26.05", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "8.5px", "stroke-dasharray": "0 21.99", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "7px", "stroke-dasharray": "0 15.98", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "6px", "stroke-dasharray": "0 14", "stroke-linecap": "round"}
  ];

  constructor(
    public nineyDefaultService: NineyDefaultService,
    public layerModel: LayerModelService,
    public highlightModel: HighlightModelService,
    public markerModel: MarkerModelService,
    public measureModel: MeasureModelService,
    public imowModel: ImowModelService,
    public planModel: PlanModelService
  ) { }

  get baseline() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    if (focusModel.centerScale.scale < 892.912823362) {
      return this.baselines[0];
    }
    if (focusModel.centerScale.scale < 3571.651293448) {
      return this.baselines[1];
    }
    if (focusModel.centerScale.scale < 57146.420695168) {
      return this.baselines[2];
    }
    if (focusModel.centerScale.scale < 914342.731122689) {
      return this.baselines[3];
    }
    return this.baselines[4];
  }

  get highline() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    if (focusModel.centerScale.scale < 892.912823362) {
      return this.highlines[0];
    }
    if (focusModel.centerScale.scale < 3571.651293448) {
      return this.highlines[1];
    }
    return this.highlines[2];
  }

  get bumps() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    if (focusModel.centerScale.scale < 892.912823362) {
      return this.bumpses[0];
    }
    if (focusModel.centerScale.scale < 3571.651293448) {
      return this.bumpses[1];
    }
    if (focusModel.centerScale.scale < 14286.605173792) {
      return this.bumpses[2];
    }
    return this.bumpses[3];
  }

  mark(x, y) {
    this.markerModel.setXY(x, y, null);
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
