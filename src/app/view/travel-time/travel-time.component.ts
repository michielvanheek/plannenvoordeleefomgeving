import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { DateAdapter } from "@angular/material/core";
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";
import { StateModelService } from "src/app/model/state-model.service";
import { TimeModelService } from "src/app/model/time-model.service";

@Component({
  selector: "dso-travel-time",
  templateUrl: "./travel-time.component.html",
  styleUrls: ["./travel-time.component.scss"]
})
export class TravelTimeComponent implements AfterViewInit {

  @ViewChild("picker", {static: true}) protected pickerRef: any;

  date = new Date("2011-05-05");
  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const timeDate = new Date(this.timeModel.time);
    return ((date.getFullYear() == timeDate.getFullYear()) && (date.getMonth() == timeDate.getMonth()) && (date.getDate() == timeDate.getDate()))? "font-weight-bold" : "";
  }

  constructor(
    private dateAdapter: DateAdapter<any>,
    private stateModel: StateModelService,
    private timeModel: TimeModelService
  ) { }

  ngAfterViewInit(): void {
    this.dateAdapter.setLocale("nl");
    this.date = new Date(this.timeModel.timeFull);
    setTimeout(() => this.pickerRef.open());
  }

  setDate(date) {
    if (date != null) {
      date.setHours(21);
      this.timeModel.setTime(date.toISOString());
    } else {
      this.timeModel.setTime(null);
    }

    this.close();
  }

  close() {
    this.stateModel.exit();
  }
}
