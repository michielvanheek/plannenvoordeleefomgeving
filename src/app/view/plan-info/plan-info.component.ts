import { Component } from "@angular/core";
import { PlanModelService } from "src/app/model/plan-model.service";
import { SetTimeLoadPlan } from "src/app/action/SetTimeLoadPlan";
import { TimeModelService } from "src/app/model/time-model.service";

@Component({
  selector: "dso-plan-info",
  templateUrl: "./plan-info.component.html",
  styleUrls: ["./plan-info.component.scss"]
})
export class PlanInfoComponent {
  dossierPlannenVisible = false;
  expertInfoVisible = false;

  constructor(
    public timeModel: TimeModelService,
    public planModel: PlanModelService
  ) { }

  get plan() {
    return this.planModel.plan;
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

  loadPlanOrSetupVersion(version) {
    if ((version == this.plan.geregistreerdMet) || (version == this.plan.procedureverloop) || (version.confirmationTime != null)) {
      return;
    }

    if ((version.eindGeldigheid == null) || (this.timeModel.time < version.eindGeldigheid)) {
      this.planModel.loadPlan(version.viewId, null, false, false);
    } else {
      const date = new Date(version.eindGeldigheid);
      date.setHours(19);
      date.setDate(date.getDate() - 1);
      version.confirmationTime = date.toISOString();
      version.viewConfirmationTime = version.confirmationTime.split("T")[0].split("-").reverse().join("-");
    }
  }

  setTimeAndLoadPlan(version) {
    new SetTimeLoadPlan(this.timeModel, version.confirmationTime, this.planModel, version.viewId);
    setTimeout(() => this.resetVersion(version));
  }

  cancel(version) {
    setTimeout(() => this.resetVersion(version));
  }

  private resetVersion(version) {
    delete version.confirmationTime;
    delete version.viewConfirmationTime;
  }
}
