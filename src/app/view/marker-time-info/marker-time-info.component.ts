import { Component } from "@angular/core";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { RegelingModelService } from "src/app/model/regeling-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { StateModelService } from "src/app/model/state-model.service";
import { TimeModelService } from "src/app/model/time-model.service";

@Component({
  selector: "dso-marker-time-info",
  templateUrl: "./marker-time-info.component.html",
  styleUrls: ["./marker-time-info.component.scss"]
})
export class MarkerTimeInfoComponent {

  get name() {
    if (this.markerModel.name == null) {
      return "Nederland";
    } else {
      return this.markerModel.name.replace(/ \d{4}[A-Z]{2}/, "").replace(/^de gemarkeerde plek|^het ingetekende gebied/, "Plek");
    }
  }
  count = (numPlannen, levels) => numPlannen + levels.reduce((numPlannen, plannen) => numPlannen + plannen.length, 0);

  constructor(
    public stateModel: StateModelService,
    public timeModel: TimeModelService,
    public markerModel: MarkerModelService,
    public regelingModel: RegelingModelService,
    public planModel: PlanModelService
  ) { }
}
