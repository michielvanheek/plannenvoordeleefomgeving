import { Component } from "@angular/core";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppService } from "./app.service";
import { ImowModelService } from "./model/imow-model.service";
import { MarkerModelService } from "./model/marker-model.service";
import { PlanModelService } from "./model/plan-model.service";
import { StateModelService } from "./model/state-model.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  settingsVisible = false;

  constructor(
    public nineyDefault: NineyDefaultService,
    public appService: AppService,
    public stateModel: StateModelService,
    public markerModel: MarkerModelService,
    public imowModel: ImowModelService,
    public planModel: PlanModelService
  ) { }

  get environment() {
    return environment;
  }
}
