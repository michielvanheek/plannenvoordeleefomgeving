import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateModelService {
  state = "ROUTING";

  enterSearchPlaceInit() {
    this.state = "SEARCH_PLACE_INIT";
  }

  enterSearchPlace() {
    this.state = "SEARCH_PLACE";
  }

  enterTravelTime() {
    this.state = "TRAVEL_TIME";
  }

/*  enterSearchPlanCriteria() {
    windowModel.setVisible(4, true);
    this.state = "SEARCH_PLAN_CRITERIA";
  }*/

  exit() {
    this.state = null;
  }
}
