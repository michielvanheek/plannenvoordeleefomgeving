import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CenterScale, Point } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppEventDispatcher } from "../event/AppEventDispatcher";
import { StateModelService } from "./state-model.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class MarkerModelService extends AppEventDispatcher {
  private defaultCenterScale = null;

  xy = null;
  polygon = null;
  name = null;
  outOfBounds = false;

  constructor(
    private zone: NgZone,
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    private stateModel: StateModelService
  ) {
    super();

    this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        if (this.defaultCenterScale != this.nineyDefault.defaultFocusModel.centerScale) {
          this.defaultCenterScale = this.nineyDefault.defaultFocusModel.centerScale;
          this.setOutOfBounds();
        }
      }
    });
  }

  setXY(xy, name) {
    xy.round(3);

    if ((this.xy != null) && (this.xy.x == xy.x) && (this.xy.y == xy.y) && ((this.name == name) || (name == null))) {
      return;
    }

    if (name != null) {
      this.setName(xy, null, name);
    } else {
      this.loadName(xy, null);
    }
  }

  setPolygon(polygon) {
    polygon.round(3);

    if ((this.polygon != null) && (this.polygon.equals(polygon))) {
      return;
    }

    const point = polygon.getCenterPoint();
    this.loadName(point, polygon);
  }

  clear() {
    if (this.xy == null) {
      return;
    }

    this.xy = null;
    this.polygon = null;
    this.name = null;
    this.setOutOfBounds();

    this.dispatchEvent("markerModel.xy");
  }

  zoomToMarker() {
    if (this.xy == null) {
      return;
    }

    if (this.polygon != null) {
      this.nineyDefault.defaultEnvelopeModel.setEnvelope(this.polygon.getEnvelope());
    } else {
      var scale = this.nineyDefault.defaultFocusModel.centerScale.scale;
      this.nineyDefault.defaultFocusModel.setCenterScale(new CenterScale(this.xy.x, this.xy.y, scale));
    }
  }

  private loadName(xy, polygon) {
    const url = environment.revGeoUrl + xy.x + "&Y=" + xy.y + "&type=adres&type=gemeente&distance=1000";
    this.http.get(url).subscribe(response => {
      const adres = !polygon? response["response"].docs.find(doc => doc.type == "adres"): null;
      if (adres != null) {
        this.setName(xy, null, adres.weergavenaam);
        return;
      }
      const gemeente = response["response"].docs.find(doc => (doc.type == "gemeente") && (doc.afstand == 0));
      if (gemeente != null) {
        this.setName(xy, polygon, (!polygon? "de gemarkeerde plek": "het ingetekende gebied") + " in " + gemeente.weergavenaam.replace(/^Gemeente (De|Het)/, "gemeente $1").replace(/^Gemeente/, "de gemeente"));
        return;
      }
      this.setName(xy, polygon, (!polygon? "de gemarkeerde plek": "het ingetekende gebied") + " buiten Nederland");
    });
  }

  private setName(xy, polygon, name) {
    this.xy = xy;
    this.polygon = polygon;
    this.name = name;

    this.setOutOfBounds();

    this.stateModel.exit();
    this.dispatchEvent("markerModel.xy");
  }

  private setOutOfBounds() {
    if ((this.xy != null) && (this.nineyDefault.defaultFocusModel.centerScale != null) && !this.xy.intersects(this.nineyDefault.defaultEnvelopeModel.getEnvelope())) {
      this.outOfBounds = true;
    } else {
      this.outOfBounds = false;
    }
  }
}
