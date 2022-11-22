import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { StateModelService } from "../model/state-model.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "dso-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  constructor(
    private router: Router,
    private nineyDefault: NineyDefaultService,
    private stateModel: StateModelService
  ) {
    this.nineyDefault.defaultFocusModel.centerScale = null;
  }

  get environment() {
    return environment;
  }

  go() {
    this.stateModel.enterSearchPlaceInit();
    this.router.navigateByUrl("/viewer");
  }
}
