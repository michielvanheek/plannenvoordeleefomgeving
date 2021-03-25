import { Component } from "@angular/core";
import { PlanLevelModelService } from "src/app/model/plan-level-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { StateModelService } from "src/app/model/state-model.service";

@Component({
  selector: "dso-select-plan",
  templateUrl: "./select-plan.component.html",
  styleUrls: ["./select-plan.component.scss"]
})
export class SelectPlanComponent {

  constructor(
    public stateModel: StateModelService,
    public planLevelModel: PlanLevelModelService,
    public planModel: PlanModelService
  ) { }
}
