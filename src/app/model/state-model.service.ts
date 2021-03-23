import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateModelService {
  state = "SEARCH_PLACE";

  toggleState() {
    if (this.state != "SEARCH_PLACE") {
      this.state = "SEARCH_PLACE";
    } else {
      this.state = "SEARCH_PLAN";
    }
  }

  enterSearchPlan() {
    this.state = "SEARCH_PLAN";
  }

/*  enterSearchPlanCriteria() {
    windowModel.setVisible(4, true);
    this.state = "SEARCH_PLAN_CRITERIA";
  }*/

  enterSelectPlan() {
    this.state = "SELECT_PLAN";
  }

  leaveSelectPlan() {
    if (this.state == "SELECT_PLAN") {
      this.state = "SEARCH_PLACE";
    }
  }
}
