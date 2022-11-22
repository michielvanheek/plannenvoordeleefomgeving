import { AppEvent } from "../event/AppEvent";
import { AppEventListener } from "../event/AppEventListener";

export class SelectComponentSetTabScrollTo implements AppEventListener {
  private imowModel;
  private planModel;
  private display;
  private info;

  constructor(imowModel, planModel, display, info) {
    this.imowModel = imowModel;
    this.planModel = planModel;
    this.display = display;
    this.info = info;

    if (this.planModel.numLoadingC > 0) {
      this.planModel.addEventListener(this);
      this.display.setBuilding();
    } else {
      this.perform();
    }
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "planModel.plan.documentComponenten") {
      this.planModel.removeEventListener(this);
      this.perform();
    }
  }

  private perform() {
    this.imowModel.setComponentIdentificaties("filtered", this.info.teksten, this.info.label);
    this.display.setTab("default", "selected");
  }
}
