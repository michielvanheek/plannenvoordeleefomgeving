import { Injectable } from "@angular/core";
import { AppEventDispatcher } from "../event/AppEventDispatcher";

@Injectable({
  providedIn: "root"
})
export class TimeModelService extends AppEventDispatcher {

  timeFull = null;
  time = null;
  future = null;

  viewTime;

  get nowParam() {
    return "beschikbaarOp=" + this.timeFull;
  }

  get nowParams() {
    return "beschikbaarOp=" + this.timeFull + "&geldigOp=" + this.time + "&inWerkingOp=" + this.time;
  }

  get sinceParams() {
    return "beschikbaarOp=" + this.timeFull + "&vanaf=" + this.time;
  }

  get futureParams() {
    return "beschikbaarOp=" + this.timeFull + "&geldigOp=" + this.future + "&inWerkingOp=" + this.future;
  }

  getVersionParams(plan, ontwerpEndpoint = false) {
    if (plan.technischId != null) {
      return !ontwerpEndpoint? this.nowParams: this.nowParam;
    }
    if (this.time >= plan.geregistreerdMet.beginGeldigheid) {
      return this.nowParams;
    }
    return "beschikbaarOp=" + this.timeFull + "&geldigOp=" + plan.geregistreerdMet.beginGeldigheid + "&inWerkingOp=" + plan.geregistreerdMet.beginGeldigheid;
  }

  setTime(iso) {
    const now = (new Date()).toISOString();
    if ((iso == null) || (iso > now)) {
      iso = now;
    }
    iso = iso.replace(/^([^T]+)T(\d\d\:\d\d)[^Z]*Z$/, "$1T$2Z");
    if (this.timeFull == iso) {
      return;
    }

    this.timeFull = iso;

    iso = iso.split("T")[0];
    if (this.time == iso) {
      return;
    }

    this.time = iso;

    this.setFuture();
    this.setViewTime();

    this.dispatchEvent("timeModel.time");
  }

  private setFuture() {
    const date = new Date(this.timeFull);
    date.setFullYear(date.getFullYear() + 2);
    this.future = date.toISOString().split("T")[0];
  }

  private setViewTime() {
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    date.setDate(date.getDate() - 1);
    const yesterday = date.toISOString().split("T")[0];
    if (this.time == today) {
      this.viewTime = "vandaag";
    } else if (this.time == yesterday) {
      this.viewTime = "gisteren";
    } else {
      this.viewTime = this.time.split("-").reverse().join("-");
    }
  }
}
