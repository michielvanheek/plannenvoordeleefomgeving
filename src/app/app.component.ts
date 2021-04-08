import { Component } from "@angular/core";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppService } from "./app.service";
import { OmgevingsdocumentModelService } from "./model/omgevingsdocument-model.service";
import { PlanModelService } from "./model/plan-model.service";
import { StateModelService } from "./model/state-model.service";

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
    public omgevingsdocumentModel: OmgevingsdocumentModelService,
    public planModel: PlanModelService
  ) { }
}
