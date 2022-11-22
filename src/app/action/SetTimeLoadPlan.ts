import { AppEvent } from "../event/AppEvent";
import { AppEventListener } from "../event/AppEventListener";

export class SetTimeLoadPlan implements AppEventListener {
  private timeModel;
  private time;
  private planModel;
  private planId;

  constructor(timeModel, time, planModel, planId) {
    this.timeModel = timeModel;
    this.time = time;
    this.planModel = planModel;
    this.planId = planId;

    this.planModel.regelingModel.addEventListener(this);
    this.performSetTime();
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "regelingModel.regelingen") {
      this.planModel.regelingModel.removeEventListener(this);
      this.performLoadPlan();
    }
  }

  private performSetTime() {
    this.timeModel.setTime(this.time);
  }

  private performLoadPlan() {
    this.planModel.loadPlan(this.planId, null, false, false);
  }
}
