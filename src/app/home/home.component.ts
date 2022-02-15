import { Component } from "@angular/core";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "dso-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  constructor(private nineyDefault: NineyDefaultService) {
    this.nineyDefault.defaultFocusModel.centerScale = null;
  }

  get environment() {
    return environment;
  }
}
