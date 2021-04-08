import { Component, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CenterScale } from "ng-niney";
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
  private plan = this.planModel.plan;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nineyDefault: NineyDefaultService,
    private markerModel: MarkerModelService,
    private planModel: PlanModelService
  ) {
    this.activatedRoute.params.subscribe(params => {
      const centerX = parseFloat(params.centerX);
      const centerY = parseFloat(params.centerY);
      const scale = parseFloat(params.scale);
      this.nineyDefault.defaultFocusModel.setCenterScale(new CenterScale(centerX, centerY, scale));

      if ((params.markerX != null) && (params.markerY != null)) {
        const markerX = parseFloat(params.markerX);
        const markerY = parseFloat(params.markerY);
        setTimeout(() => { this.markerModel.setXY(markerX, markerY, null); this.markerXY = this.markerModel.xy; });
      } else {
        setTimeout(() => { this.markerModel.clear(); });
      }
      if (params.documentId != null) {
        const identificatie = decodeURIComponent(params.documentId);
        const local = this.activatedRoute.snapshot.data.local;
        setTimeout(() => { this.planModel.loadPlan(identificatie, null, false, local); });
      } else {
        setTimeout(() => { this.planModel.setPlan(null, null); });
      }
    });
  }

  ngDoCheck() {
    if ((this.markerXY != this.markerModel.xy) || (this.plan != this.planModel.plan)) {
      if (this.markerXY != this.markerModel.xy) {
        this.markerXY = this.markerModel.xy;
      }
      if (this.plan != this.planModel.plan) {
        this.plan = this.planModel.plan;
      }

      const cs = this.nineyDefault.defaultFocusModel.centerScale;
      let url = `/view/${cs.centerX}/${cs.centerY}/${cs.scale}`;
      if (this.markerModel.xy != null) {
        url += `/${this.markerModel.xy.x}/${this.markerModel.xy.y}`;
      }
      if (this.planModel.plan != null) {
        url += `/${encodeURIComponent(this.planModel.plan.identificatie)}`;
      }
      if (this.activatedRoute.snapshot.data.local) {
        url += "/local";
      }
      this.router.navigateByUrl(url);
    }
  }
}
