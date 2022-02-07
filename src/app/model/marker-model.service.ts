import { Injectable, NgZone } from "@angular/core";
import { CenterScale, Point } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";

@Injectable({
  providedIn: "root"
})
export class MarkerModelService {
  private defaultCenterScale = null;

  xy = null;
  polygon = null;
  name = null;
  outOfBounds = false;

  constructor(
    private zone: NgZone,
    private nineyDefault: NineyDefaultService
  ) {
    this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        if (this.defaultCenterScale != this.nineyDefault.defaultFocusModel.centerScale) {
          this.defaultCenterScale = this.nineyDefault.defaultFocusModel.centerScale;
          this.setOutOfBounds();
        }
      }
    });
  }

  setXY(x, y, name) {
    x = Math.round(x * 1000) / 1000;
    y = Math.round(y * 1000) / 1000;

    if ((this.xy != null) && (this.xy.x == x) && (this.xy.y == y) && ((this.name == name) || (name == null))) {
      return;
    }

    this.xy = new Point(x, y);
    this.polygon = null;
    this.name = name;
    this.setOutOfBounds();
  }

  setPolygon(polygon) {
    polygon.round(3);

    if ((this.polygon != null) && (this.polygon.equals(polygon))) {
      return;
    }

    this.xy = polygon.getCenterPoint();
    this.polygon = polygon;
    this.name = null;
    this.setOutOfBounds();
  }

  clear() {
    if (this.xy == null) {
      return;
    }

    this.xy = null;
    this.polygon = null;
    this.name = null;
    this.setOutOfBounds();
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

  setOutOfBounds() {
    if ((this.xy != null) && !this.xy.intersects(this.nineyDefault.defaultEnvelopeModel.getEnvelope())) {
      this.outOfBounds = true;
    } else {
      this.outOfBounds = false;
    }
  }
}
