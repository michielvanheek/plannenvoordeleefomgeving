import { Component, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CenterScale, Envelope, Point, WKTConverter, ZoomLevel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-routing",
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.scss"]
})
export class RoutingComponent implements DoCheck {
  private markerXY = this.markerModel.xy;
  private planIdentificatie = this.planModel.plan? (this.planModel.plan.technischId || this.planModel.plan.identificatie): null;

  private ignoreRoute = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nineyDefault: NineyDefaultService,
    private markerModel: MarkerModelService,
    private planModel: PlanModelService
  ) {
    const focusModel = this.nineyDefault.defaultFocusModel;
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
    focusModel.maxEnvelope = new Envelope(-40000, 305000, 280000, 850000);
    focusModel.minScale = 595.275215575;
    focusModel.maxScale = 2438247.282993837;

    this.activatedRoute.params.subscribe(params => {
      if (this.ignoreRoute) {
        this.ignoreRoute = false;
        return;
      }

      const centerX = parseFloat(params.centerX);
      const centerY = parseFloat(params.centerY);
      const scale = parseFloat(params.scale);
      focusModel.setCenterScale(new CenterScale(centerX, centerY, scale));

      if ((params.marker != null) || ((params.markerOrPlan != null) && params.markerOrPlan.match(/^PO/))) {
        const marker = (new WKTConverter()).wktToGeometry((params.marker || params.markerOrPlan).replaceAll("[", "(").replaceAll("]", ")"));
        if (marker instanceof Point) {
          setTimeout(() => { this.markerModel.setXY(marker.x, marker.y, null); this.markerXY = this.markerModel.xy; });
        } else {
          setTimeout(() => { this.markerModel.setPolygon(marker); this.markerXY = this.markerModel.xy; });
        }
      } else {
        setTimeout(() => { this.markerModel.clear(); this.markerXY = null; });
      }
      if ((params.plan != null) || ((params.markerOrPlan != null) && !params.markerOrPlan.match(/^PO/))) {
        const identificatie = decodeURIComponent(params.plan || params.markerOrPlan);
        const local = this.activatedRoute.snapshot.data.local;
        setTimeout(() => { this.planModel.loadPlan(identificatie, null, false, local, () => { this.planIdentificatie = identificatie; }); });
      } else {
        setTimeout(() => { this.planModel.setPlan(null, null); this.planIdentificatie = null; });
      }
    });
  }

  ngDoCheck() {
    if ((this.markerXY != this.markerModel.xy) || (this.planIdentificatie != (this.planModel.plan? (this.planModel.plan.technischId || this.planModel.plan.identificatie): null))) {
      if (this.markerXY != this.markerModel.xy) {
        this.markerXY = this.markerModel.xy;
      }
      if (this.planIdentificatie != (this.planModel.plan? (this.planModel.plan.technischId || this.planModel.plan.identificatie): null)) {
        this.planIdentificatie = this.planModel.plan? (this.planModel.plan.technischId || this.planModel.plan.identificatie): null;
      }

      const cs = this.nineyDefault.defaultFocusModel.centerScale;
      let url = `/viewer/${cs.centerX}/${cs.centerY}/${cs.scale}`;
      if (this.markerModel.xy != null) {
        url += "/" + (new WKTConverter()).geometryToWKT(this.markerModel.polygon || this.markerModel.xy).replaceAll("(", "[").replaceAll(")", "]");
      }
      if (this.planModel.plan != null) {
        url += "/" + encodeURIComponent(this.planModel.plan.technischId || this.planModel.plan.identificatie);
      }
      if (this.activatedRoute.snapshot.data.local) {
        url += "/local";
      }

      if (this.router.url != url) {
        this.ignoreRoute = true;
        this.router.navigateByUrl(url);
      }
    }
  }
}
