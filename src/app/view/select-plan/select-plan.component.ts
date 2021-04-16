import { Component } from "@angular/core";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { PlanLevelModelService } from "src/app/model/plan-level-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { StateModelService } from "src/app/model/state-model.service";

@Component({
  selector: "dso-select-plan",
  templateUrl: "./select-plan.component.html",
  styleUrls: ["./select-plan.component.scss"]
})
export class SelectPlanComponent {
  count = (numPlannen, levels) => numPlannen + levels.reduce(this.countPerLevel, 0);
  countPerLevel = (numPlannen, plannen) => numPlannen + plannen.length;

  constructor(
    public stateModel: StateModelService,
    public highlightModel: HighlightModelService,
    public planLevelModel: PlanLevelModelService,
    public planModel: PlanModelService
  ) { }
}
