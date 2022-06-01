import { Component } from "@angular/core";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-plan-info",
  templateUrl: "./plan-info.component.html",
  styleUrls: ["./plan-info.component.scss"]
})
export class PlanInfoComponent {
  dossierPlannenVisible = false;
  expertInfoVisible = false;

  constructor(public planModel: PlanModelService) { }

  get plan() {
    return this.planModel.plan;
  }

  get statusText() {
    return ((this.plan.viewStatus == "ontwerp")? ("<span class=\"redalert\">" + this.plan.viewStatus + "</span>"): this.plan.viewStatus) + " (" + (
      (this.plan.viewStatus == this.plan.planStatus)? "": this.plan.planStatus + " "
    ) + this.plan.viewDate + ")";
  }

  toggleDossierPlannenVisible() {
    this.dossierPlannenVisible = !this.dossierPlannenVisible;
    if (!this.dossierPlannenVisible) {
      this.planModel.loadPlan(this.planModel.dossierSet.mainPlan.identificatie, "CURRENT", false, false);
    }
  }

  toggleExpertInfoVisible() {
    this.expertInfoVisible = !this.expertInfoVisible;
  }
}
