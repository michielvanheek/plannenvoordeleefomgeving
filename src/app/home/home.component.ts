import { Component } from "@angular/core";
import { NineyDefaultService } from "ng-niney/niney-default.service";

@Component({
  selector: "dso-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

  constructor(private nineyDefault: NineyDefaultService) {
    this.nineyDefault.defaultFocusModel.centerScale = null;
  }
}
