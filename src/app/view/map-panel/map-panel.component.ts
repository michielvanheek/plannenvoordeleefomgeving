import { Component, DoCheck } from "@angular/core";
import { CenterScale, FocusModel, Loader, Point, Polygon } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { ImowValueModelService } from "src/app/model/imow-value-model.service";
import { LayerModelService } from "src/app/model/layer-model.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { MeasureModelService } from "src/app/model/measure-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-map-panel",
  templateUrl: "./map-panel.component.html",
  styleUrls: ["./map-panel.component.scss"]
})
export class MapPanelComponent implements DoCheck {
  loader = new Loader();
  numLoading = 0;
  legendPanelVisible = false;

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
  private underlines = [
    {fill: "none", "stroke-width": "7px"},
    {fill: "none", "stroke-width": "6px"},
    {fill: "none", "stroke-width": "5px"}
  ];
  private bumpses = [
    {fill: "none", "stroke-width": "10px", "stroke-dasharray": "0 26.05", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "8.5px", "stroke-dasharray": "0 21.99", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "7px", "stroke-dasharray": "0 15.98", "stroke-linecap": "round"},
    {fill: "none", "stroke-width": "6px", "stroke-dasharray": "0 14", "stroke-linecap": "round"}
  ];
  private labels = [
    {fill: "#fff", "stroke-width": 6, "font-size": "25px"},
    {fill: "#fff", "stroke-width": 4, "font-size": "15px"},
    {fill: "#fff", "stroke-width": 3, "font-size": "10px"}
  ];

  constructor(
    public nineyDefaultService: NineyDefaultService,
    public layerModel: LayerModelService,
    public markerModel: MarkerModelService,
    public measureModel: MeasureModelService,
    public imowValueModel: ImowValueModelService,
    public imowModel: ImowModelService,
    public highlightModel: HighlightModelService,
    public planModel: PlanModelService
  ) { }

  ngDoCheck(): void {
    if (this.numLoading != this.loader.numLoading) {
      this.numLoading = this.loader.numLoading;
    }
  }

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

  get underline() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    if (focusModel.centerScale.scale < 892.912823362) {
      return this.underlines[0];
    }
    if (focusModel.centerScale.scale < 3571.651293448) {
      return this.underlines[1];
    }
    return this.underlines[2];
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

  get label() {
    const focusModel = this.nineyDefaultService.defaultFocusModel;
    if (focusModel.centerScale.scale < 892.912823362) {
      return this.labels[0];
    }
    if (focusModel.centerScale.scale < 3571.651293448) {
      return this.labels[1];
    }
    return this.labels[2];
  }

  get annotationLayersVisible() {
    return this.imowModel.annotationLayers.some(annotationLayer => annotationLayer.visible);
  }

  get measureButtonTitle() {
    if (this.measureModel.geometry == null) {
      return "Een lijn of gebied tekenen:\n - afstand, oppervlakte meten\n - als plek markeren";
    } else if (!(this.measureModel.geometry instanceof Polygon)) {
      return "Stoppen met tekenen";
    } else {
      return "Het getekende gebied wissen";
    }
  }

  get legendButtonTitle() {
    if (this.legendPanelVisible) {
      return "Legenda sluiten";
    }
    if (this.imowModel.annotationLayers.length > 0) {
      return "Legenda openen (" + this.imowModel.annotationLayers.length + ((this.imowModel.annotationLayers.length == 1)? " kaartlaag)": " kaartlagen)");
    }
    return "Een andere achtergrondkaart kiezen";
  }

  get pointOrLineString() {
    return ((this.measureModel.geometry != null) && !(this.measureModel.geometry instanceof Polygon));
  }

  get lineStringOrPolygon() {
    return ((this.measureModel.geometry != null) && this.measureModel.geometry.childGeometries.length);
  }

  get realPolygon() {
    return ((this.measureModel.geometry != null) && (this.measureModel.geometry instanceof Polygon) && this.measureModel.geometry.getArea());
  }

  mark(x, y) {
    this.measureModel.reset();
    this.markerModel.setXY(new Point(x, y), null);
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
