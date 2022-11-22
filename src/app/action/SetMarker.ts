import { Point } from "ng-niney";
import { AppEvent } from "../event/AppEvent";
import { AppEventListener } from "../event/AppEventListener";

export class SetMarker implements AppEventListener {
  private markerModel;
  private marker;
  private postSetMarkerAction;

  constructor(markerModel, marker, postSetMarkerAction) {
    this.markerModel = markerModel;
    this.marker = marker;
    this.postSetMarkerAction = postSetMarkerAction;

    this.performSetMarker();
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "markerModel.xy") {
      this.markerModel.removeEventListener(this);
      this.handleSetMarker();
    }
  }

  private performSetMarker() {
    if (this.marker instanceof Point) {
      this.markerModel.setXY(this.marker, null);
    } else {
      this.markerModel.setPolygon(this.marker);
    }
    this.markerModel.addEventListener(this);
  }

  private handleSetMarker() {
    this.postSetMarkerAction();
  }
}
