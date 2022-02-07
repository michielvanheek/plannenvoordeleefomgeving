import { Injectable } from "@angular/core";
import { LineString, Point, Polygon } from "ng-niney";

@Injectable({
  providedIn: "root"
})
export class MeasureModelService {
  geometry = null;

  viewCoords = null;
  viewLength = null;
  viewArea = null;

  toggle() {
    if (this.geometry == null) {
      this.geometry = new Point(0, 0);
      this.setView();
    } else {
      this.geometry = null;
    }
  }

  reset() {
    this.geometry = null;
  }

  setXY(x, y) {
    this.geometry.getEndPoint().setXY(x, y);
    this.setView();
  }

  addXY(x, y) {
    if (this.geometry instanceof Point) {
      this.geometry = new LineString([new Point(x, y), new Point(x, y)]);
    } else {
      this.geometry.addChild(new Point(x, y));
    }
    this.setView();
  }

  close() {
    if (this.geometry.childGeometries.length < 3) {
      return;
    }

    this.geometry.addChild(this.geometry.childGeometries[0].clone());
    this.geometry = new Polygon([this.geometry]);
    this.setView();
  }

  private setView() {
    this.viewCoords = Math.round(this.geometry.getEndPoint().x) + ", " + Math.round(this.geometry.getEndPoint().y);
    if (this.geometry instanceof Point) {
      this.viewLength = "0 m";
      this.viewArea = "0 m²";
    } else {
      this.viewLength = this.geometry.getLength();
      if (this.viewLength < 100) {
        this.viewLength = Math.round(this.viewLength * 10) / 10 + " m";
      } else if (this.viewLength < 1000) {
        this.viewLength = Math.round(this.viewLength) + " m";
      } else {
        this.viewLength = Math.round(this.viewLength / 10) / 100 + " km";
      }
      this.viewArea = this.geometry.getArea();
      if (this.viewArea < 1000) {
        this.viewArea = Math.round(this.viewArea) + " m²";
      } else if (this.viewArea < 10000) {
        this.viewArea = Math.round(this.viewArea / 10) / 1000 + " ha";
      } else if (this.viewArea < 1000000) {
        this.viewArea = Math.round(this.viewArea / 100) / 100 + " ha";
      } else {
        this.viewArea = Math.round(this.viewArea / 10000) / 100 + " km²";
      }
    }
  }
}
