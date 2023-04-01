import { Component } from "@angular/core";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { RegelingModelService } from "src/app/model/regeling-model.service";
import { PlanLevelModelService } from "src/app/model/plan-level-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { StateModelService } from "src/app/model/state-model.service";

@Component({
  selector: "dso-select-plan",
  templateUrl: "./select-plan.component.html",
  styleUrls: ["./select-plan.component.scss"]
})
export class SelectPlanComponent {
  private planalysis = this.planModel.planalysis;
  private planLevel = this.planLevelModel.planLevel;

  tabs = [];
  tab = null;

  constructor(
    public stateModel: StateModelService,
    public highlightModel: HighlightModelService,
    public regelingModel: RegelingModelService,
    public planLevelModel: PlanLevelModelService,
    public planModel: PlanModelService
  ) {
    this.setTabs();
  }

  ngDoCheck() {
    if (this.planalysis != this.planModel.planalysis) {
      this.planalysis = this.planModel.planalysis;
      this.setTabsNumPlans();
    }
    if (this.planLevel != this.planLevelModel.planLevel) {
      this.planLevel = this.planLevelModel.planLevel;
      this.setTab();
    }
  }

  private setTabs() {
    this.tabs = this.planLevelModel.planLevels.map(planLevel => {
      return {planLevel: planLevel, numPlans: this.getNumPlans(planLevel)};
    });
    this.setTab();
  }

  private setTabsNumPlans() {
    this.tabs.forEach(tab => {
      tab.numPlans = this.getNumPlans(tab.planLevel);
    });
    this.setTab();
  }

  private getNumPlans(planLevel) {
    return this.planModel.planalysis?.planItems[planLevel.id].reduce((numPlannen, plannen) => numPlannen + plannen.length, 0) || 0;
  }

  private setTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      const tab = this.tabs[(i + this.planLevelModel.planLevel.id) % this.tabs.length];
      if (tab.numPlans > 0) {
        this.tab = tab;
        return;
      }
    }
    this.tab = null;
  }
}
