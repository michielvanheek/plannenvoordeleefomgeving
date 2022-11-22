import { Component, DoCheck } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CenterScale, Envelope, WKTConverter, ZoomLevel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { DisplayModelService } from "src/app/model/display-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { LoadPlanSetTabScrollTo } from "src/app/action/LoadPlanSetTabScrollTo";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { SetMarker } from "src/app/action/SetMarker";
import { StateModelService } from "src/app/model/state-model.service";
import { TimeModelService } from "src/app/model/time-model.service";

@Component({
  selector: "dso-routing",
  templateUrl: "./routing.component.html",
  styleUrls: ["./routing.component.scss"]
})
export class RoutingComponent implements DoCheck {
  private static state;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nineyDefault: NineyDefaultService,
    private stateModel: StateModelService,
    private displayModel: DisplayModelService,
    private timeModel: TimeModelService,
    private markerModel: MarkerModelService,
    private imowModel: ImowModelService,
    private planModel: PlanModelService
  ) {
    if (RoutingComponent.state == null) {
      this.initFocusModel();

      RoutingComponent.state = {
        centerScale: this.nineyDefault.defaultFocusModel.centerScale,
        markerXY: this.markerModel.xy,
        timeFull: this.timeModel.timeFull,
        tabId: this.displayModel.tab.id,
        scrollTop: this.displayModel.tab.scrollTop,
        planId: this.planModel.plan? this.planModel.plan.viewId: null,
        componentIdentificatie: this.imowModel.componentIdentificaties.selected,

        ignoreRoute: false
      };
    }
  
    this.activatedRoute.params.subscribe(params => {
      if (RoutingComponent.state.ignoreRoute) {
        RoutingComponent.state.ignoreRoute = false;
        return;
      }
      console.log("ACTIVATE", this.router.url)

      const centerX = parseFloat(params.centerX);
      const centerY = parseFloat(params.centerY);
      const scale = parseFloat(params.scale);
      this.nineyDefault.defaultFocusModel.setCenterScale(new CenterScale(centerX, centerY, scale)); RoutingComponent.state.centerScale = this.nineyDefault.defaultFocusModel.centerScale;

      this.timeModel.setTime(params.time); RoutingComponent.state.timeFull = this.timeModel.timeFull;

      if (params.plan == null) {
        this.planModel.setPlan(null, null); RoutingComponent.state.planId = null; RoutingComponent.state.componentIdentificatie = null;
      } else {
        const planId = decodeURIComponent(params.plan);
        const local = this.activatedRoute.snapshot.data.local;
        const split = params.tab.split(":");
        const tab = this.displayModel.tabs[parseInt(split[0])];
        const scrollTop = isNaN(split[1])? split[1]: parseInt(split[1]);
        new LoadPlanSetTabScrollTo(this.planModel, planId, local, this.displayModel, tab, scrollTop,
          () => { RoutingComponent.state.planId = planId; RoutingComponent.state.componentIdentificatie = null; },
          () => { RoutingComponent.state.tabId = this.displayModel.tab.id; },
          () => { RoutingComponent.state.scrollTop = this.displayModel.tab.scrollTop;
            if (params.component != null) {
              this.imowModel.componentIdentificaties.emit("selected", params.component); RoutingComponent.state.componentIdentificatie = this.imowModel.componentIdentificaties.selected;
            }
          }
        );
      }
      if (params.marker != "NL") {
        const marker = (new WKTConverter()).wktToGeometry(params.marker.replaceAll("[", "(").replaceAll("]", ")"));
        new SetMarker(this.markerModel, marker, () => { RoutingComponent.state.markerXY = this.markerModel.xy; });
      } else {
        setTimeout(() => {
          this.markerModel.clear(); RoutingComponent.state.markerXY = null;
          if (this.stateModel.state == "ROUTING") {
            this.stateModel.exit();
          }
        });
      }
    });
  }

  ngDoCheck() {
    if (
      ((RoutingComponent.state.centerScale != this.nineyDefault.defaultFocusModel.centerScale) && (RoutingComponent.state.centerScale != this.nineyDefault.defaultFocusModel.incubationCenterScale)) ||
      (RoutingComponent.state.markerXY != this.markerModel.xy) ||
      (RoutingComponent.state.timeFull != this.timeModel.timeFull) ||
      (RoutingComponent.state.planId != (this.planModel.plan? this.planModel.plan.viewId: null)) ||
      (RoutingComponent.state.componentIdentificatie != this.imowModel.componentIdentificaties.selected) ||
      (RoutingComponent.state.tabId != this.displayModel.tab.id) ||
      ((RoutingComponent.state.scrollTop != this.displayModel.tab.scrollTop) && (RoutingComponent.state.scrollTop != this.displayModel.tab.incubationScrollTop))
    ) {
      let permanent: any = false;
      if (RoutingComponent.state.centerScale != this.nineyDefault.defaultFocusModel.centerScale) {
        console.log("CHANGE AAA")
        RoutingComponent.state.centerScale = this.nineyDefault.defaultFocusModel.centerScale;
      }
      if (RoutingComponent.state.markerXY != this.markerModel.xy) {
        console.log("CHANGE BBB")
        RoutingComponent.state.markerXY = this.markerModel.xy;
        permanent = true;
      }
      if (RoutingComponent.state.timeFull != this.timeModel.timeFull) {
        console.log("CHANGE CCC")
        RoutingComponent.state.timeFull = this.timeModel.timeFull;
        permanent = true;
      }
      if (RoutingComponent.state.planId != (this.planModel.plan? this.planModel.plan.viewId: null)) {
        console.log("CHANGE DDD", RoutingComponent.state.planId, (this.planModel.plan? this.planModel.plan.viewId: null))
        RoutingComponent.state.planId = this.planModel.plan? this.planModel.plan.viewId: null;
        permanent = true;
      }
      if (RoutingComponent.state.componentIdentificatie != this.imowModel.componentIdentificaties.selected) {
        console.log("CHANGE EEE")
        RoutingComponent.state.componentIdentificatie = this.imowModel.componentIdentificaties.selected;
        permanent = true;
      }
      if (RoutingComponent.state.tabId != this.displayModel.tab.id) {
        console.log("CHANGE FFF")
        RoutingComponent.state.tabId = this.displayModel.tab.id;
      }
      if (RoutingComponent.state.scrollTop != this.displayModel.tab.scrollTop) {
        console.log("CHANGE GGG")
        if (typeof (RoutingComponent.state.scrollTop = this.displayModel.tab.scrollTop) != "number") {
          permanent = "next";
        }
      }

      if (!permanent && this.router.url.match(/^\/viewer\/pt\//)) {
        permanent = true;
      }

      const cs = this.nineyDefault.defaultFocusModel.centerScale;
      let url = `/viewer/${(permanent == "next")? "pt": permanent? "p": "t"}/${cs.centerX}/${cs.centerY}/${cs.scale}`;
      if (this.markerModel.xy == null) {
        url += "/NL"
      } else {
        url += "/" + (new WKTConverter()).geometryToWKT(this.markerModel.polygon || this.markerModel.xy).replaceAll("(", "[").replaceAll(")", "]");
      }
      url += "/" + this.timeModel.timeFull;
      if (this.planModel.plan != null) {
        url += "/" + this.displayModel.tab.id + ":" + this.displayModel.tab.scrollTop;
        url += "/" + encodeURIComponent(this.planModel.plan.viewId);
        if (this.imowModel.componentIdentificaties.selected != null) {
          url += "/" + this.imowModel.componentIdentificaties.selected;
        }
      }
      if (this.activatedRoute.snapshot.data.local) {
        url += "/local";
      }

      if (this.router.url != url) {
        RoutingComponent.state.ignoreRoute = true;
        console.log("NAVIGATE", url)
        this.router.navigateByUrl(url, {replaceUrl: !!this.router.url.match(/^\/viewer\/p?t\//)});
      }
    }
  }

  private initFocusModel() {
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
  }
}
