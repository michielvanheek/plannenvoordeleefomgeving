import { AppEvent } from "../event/AppEvent";
import { AppEventListener } from "../event/AppEventListener";

export class LoadPlanSetTabScrollTo implements AppEventListener {
  private planModel;
  private planId;
  private local;
  private displayModel;
  private tab;
  private scrollTop;
  private postLoadPlanAction;
  private postSetTabAction;
  private postScrollToAction;

  constructor(planModel, planId, local, displayModel, tab, scrollTop, postLoadPlanAction, postSetTabAction, postScrollToAction) {
    this.planModel = planModel;
    this.planId = planId;
    this.local = local;
    this.displayModel = displayModel;
    this.tab = tab;
    this.scrollTop = scrollTop;
    this.postLoadPlanAction = postLoadPlanAction;
    this.postSetTabAction = postSetTabAction;
    this.postScrollToAction = postScrollToAction;

    this.performLoadPlan();
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "planModel.plan") {
      this.planModel.removeEventListener(this);
      if ((this.planModel.plan == null) || (this.planModel.plan.viewId != this.planId)) {
        return;
      }
      this.handleLoadPlan();
    } else if (event.type == "planModel.plan.documentComponenten") {
      this.planModel.removeEventListener(this);
      this.performScrollTo(true);
    }
  }

  private performLoadPlan() {
    if ((this.planModel.plan == null) || (this.planModel.plan.viewId != this.planId)) {
      this.planModel.loadPlan(this.planId, null, false, this.local);
      if ((this.planModel.plan == null) || (this.planModel.plan.viewId != this.planId)) {
        this.planModel.addEventListener(this);
      } else {
        this.handleLoadPlan();
      }
    } else {
      this.performSetTab();
    }
  }

  private handleLoadPlan() {
    this.postLoadPlanAction();
    this.performSetTab();
  }

  private performSetTab() {
    if (this.planModel.plan.documentComponenten == null) {
      this.displayModel.tab = this.tab;  // Hack to select the right tab while waiting for initial loading.
      this.postSetTabAction();
      this.planModel.addEventListener(this);
    } else {
      this.performScrollTo(false);
    }
  }

  private performScrollTo(hack) {
    if (hack) {
      this.displayModel.tab = this.displayModel.tabs[0]; /*this.displayModel.tabComponents = null;*/  // Hack to prevent blink after waiting for initial loading.
    }
    this.displayModel.setTab(this.tab, this.scrollTop);
    if (!hack) {
      this.postSetTabAction();
    }
    this.postScrollToAction();
  }
}
