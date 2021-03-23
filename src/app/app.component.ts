import { Component } from "@angular/core";
import { AppService } from "./app.service";
import { StateModelService } from "./model/state-model.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  settingsVisible = false;

  constructor(
    public appService: AppService,
    public stateModel: StateModelService
  ) { }
}
