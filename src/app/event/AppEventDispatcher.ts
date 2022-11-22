import { AppEvent } from "./AppEvent";
import { AppEventListener } from "./AppEventListener";

export class AppEventDispatcher {
  private eventListeners: AppEventListener[] = [];

  addEventListener(eventListener: AppEventListener): void {
    if (!this.eventListeners.includes(eventListener)) {
      this.eventListeners.push(eventListener);
    }
  }

  removeEventListener(eventListener: AppEventListener): void {
    const i = this.eventListeners.indexOf(eventListener);
    if (i >= 0) {
      this.eventListeners.splice(i, 1);
    }
  }

  dispatchEvent(type: string): void {
    const event = new AppEvent(type);

    // Temp hack until display is moved to display model.
/*    let i = 0;
    if (
      (type == "planModel.plan.documentComponenten") &&
      (this.eventListeners.length > 1) &&
      (i = this.eventListeners.findIndex(l => l.constructor.name == "StopPlanViewerComponent"))
    ) {
      const ls = this.eventListeners.concat();
      const spvc = ls.splice(i, 1);
      spvc.concat(ls).forEach(eventListener => eventListener.appEventHandler(event));
      return;
    }*/

    this.eventListeners.forEach(eventListener => eventListener.appEventHandler(event));
  }
}
