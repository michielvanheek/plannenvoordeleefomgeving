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
    {scale:    892.912823362, css: {fill: "none", stroke: "#222", "stroke-width": "2.0021px"}},
    {scale:   3571.651293448, css: {fill: "none", stroke: "#444", "stroke-width": "1.5012px"}},
    {scale:  57146.420695168, css: {fill: "none", stroke: "#555", "stroke-width": "1.006px"}},
    {scale: 914342.731122689, css: {fill: "none", stroke: "#555", "stroke-width": "0.301px"}},
    {scale: Number.MAX_VALUE, css: {fill: "none", stroke: "#555", "stroke-width": "0.101px"}}
  ];
  private highlines = [
    {scale:    892.912823362, css: {fill: "none",                 "stroke-width": "3px"}},
    {scale:   3571.651293448, css: {fill: "none",                 "stroke-width": "2.5px"}},
    {scale: Number.MAX_VALUE, css: {fill: "none",                 "stroke-width": "2px"}}
  ];
  private underlines = [
    {scale:    892.912823362, css: {fill: "none", stroke: "#fff", "stroke-width": "7px",   "stroke-linejoin": "round"}},
    {scale:   3571.651293448, css: {fill: "none", stroke: "#fff", "stroke-width": "6px",   "stroke-linejoin": "round"}},
    {scale: Number.MAX_VALUE, css: {fill: "none", stroke: "#fff", "stroke-width": "5px",   "stroke-linejoin": "round"}}
  ];
  private bumpses = [
    {scale:    892.912823362, css: {fill: "none",                 "stroke-width": "10px",  "stroke-dasharray": "0 26.05", "stroke-linecap": "round"}},
    {scale:   3571.651293448, css: {fill: "none",                 "stroke-width": "8.5px", "stroke-dasharray": "0 21.99", "stroke-linecap": "round"}},
    {scale:  14286.605173792, css: {fill: "none",                 "stroke-width": "7px",   "stroke-dasharray": "0 15.98", "stroke-linecap": "round"}},
    {scale: Number.MAX_VALUE, css: {fill: "none",                 "stroke-width": "6px",   "stroke-dasharray": "0 14",    "stroke-linecap": "round"}}
  ];
  private labels = [
    {scale:    892.912823362, css: {fill: "#fff", stroke: "#222", "stroke-width": "6px",   "stroke-linejoin": "round", "font-size": "25px"}},
    {scale:   3571.651293448, css: {fill: "#fff", stroke: "#444", "stroke-width": "3.5px", "stroke-linejoin": "round", "font-size": "15px"}},
    {scale: Number.MAX_VALUE, css: {fill: "#fff", stroke: "#555", "stroke-width": "2px",   "stroke-linejoin": "round", "font-size": "12px"}}
  ];
  private graphicSizes = [
    {scale:    892.912823362, css: {"--graphic-size": "40px"}},
    {scale:   3571.651293448, css: {"--graphic-size": "25px"}},
    {scale: Number.MAX_VALUE, css: {"--graphic-size": "20px"}}
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
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.baselines.find(baseline => cs.scale < baseline.scale).css;
  }

  get highline() {
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.highlines.find(highline => cs.scale < highline.scale).css;
  }

  get underline() {
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.underlines.find(underline => cs.scale < underline.scale).css;
  }

  get bumps() {
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.bumpses.find(bumps => cs.scale < bumps.scale).css;
  }

  get label() {
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.labels.find(label => cs.scale < label.scale).css;
  }

  get graphicSize() {
    const cs = this.nineyDefaultService.defaultFocusModel.centerScale;
    return this.graphicSizes.find(graphicSize => cs.scale < graphicSize.scale).css;
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
