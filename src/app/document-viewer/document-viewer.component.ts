import {Component} from "@angular/core";
import {PlanModelService} from "src/app/model/plan-model.service";

@Component({
  selector: "dso-document-viewer",
  templateUrl: "./document-viewer.component.html",
  styleUrls: ["./document-viewer.component.scss"]
})
export class DocumentViewerComponent {
  planInfo;
  plan;

  constructor(public planModel: PlanModelService) {
  }
}
