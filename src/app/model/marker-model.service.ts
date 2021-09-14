import { Injectable, NgZone } from "@angular/core";
import { CenterScale, Point } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";

@Injectable({
  providedIn: "root"
})
export class MarkerModelService {
  private defaultCenterScale = null;

  xy = null;
  name = null;
  outOfBounds = false;

  constructor(
    private zone: NgZone,
    private nineyDefaultService: NineyDefaultService
  ) {
    this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        if (this.defaultCenterScale != this.nineyDefaultService.defaultFocusModel.centerScale) {
          this.defaultCenterScale = this.nineyDefaultService.defaultFocusModel.centerScale;
          this.setOutOfBounds();
        }
      }
    });
  }

  setXY = function(x, y, name) {
    x = Math.round(x * 1000) / 1000;
    y = Math.round(y * 1000) / 1000;

    if ((this.xy != null) && (this.xy.x == x) && (this.xy.y == y) && ((this.name == name) || (name == null))) {
      return;
    }

    this.xy = new Point(x, y);
    this.name = name;
    this.setOutOfBounds();
  }

  clear = function() {
    if (this.xy == null) {
      return;
    }

    this.xy = null;
    this.name = null;
    this.setOutOfBounds();
  }

  zoomToMarker = function() {
    if (this.xy == null) {
      return;
    }

    var scale = this.nineyDefaultService.defaultFocusModel.centerScale.scale;
    this.nineyDefaultService.defaultFocusModel.setCenterScale(new CenterScale(this.xy.x, this.xy.y, scale));
  }

  setOutOfBounds = function() {
    if ((this.xy != null) && !this.xy.intersects(this.nineyDefaultService.defaultEnvelopeModel.getEnvelope())) {
      this.outOfBounds = true;
    } else {
      this.outOfBounds = false;
    }
  }
}
