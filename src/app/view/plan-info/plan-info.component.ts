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

    let date = null;
    if ((version.eindGeldigheid != null) && (version.beginGeldigheid == version.eindGeldigheid)) {  // Geldigheid has no duration (corrective mutation). Time travel directly to geldigheid is impossible.
      if ((version.eindRegistratie != null) && (this.timeModel.time >= version.eindRegistratie.split("T")[0])) {  // Current time is after registration period. Time travel to registration period will hopefully lead to geldigheid as well.
        date = new Date(version.eindRegistratie);
      } else {
        console.warn("Kan planversie niet openen. Geldigheidsperiode is korter dan een dag en er is geen registratieperiode om naartoe te tijdreizen.", version);
      }
    } else if ((version.eindGeldigheid == null) || (this.timeModel.time < version.eindGeldigheid)) {  // Current time is before (future enactment) or within geldigheid period. No time travel is needed.
      this.planModel.loadPlan(version.viewId, null, false, false);
    } else {  // Current time is after geldigheid period. Time travel to geldigheid is needed.
      if (version.tijdstipRegistratie < version.eindGeldigheid) {  // Last day of geldigheid is on or after registration date. Time travel to geldigheid just needs 1 dimension.
        date = new Date(version.eindGeldigheid);
      } else {  // Last day of geldigheid is before registration date. Time travel to geldigheid while staying on or after registration date (might as well stay at current time) needs 2 dimensions.
        // TODO complex time travel
        console.warn("Meerdimensionaal tijdreizen nog niet mogelijk.");
      }
    }

    if (date != null) {
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
