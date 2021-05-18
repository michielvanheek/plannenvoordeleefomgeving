import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  selector: "dso-plan-accordion",
  templateUrl: "./plan-accordion.component.html",
  styleUrls: ["./plan-accordion.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PlanAccordionComponent implements OnInit {
  @Input() item;
  @Input() level;
  @Input() visibilityObject;
  @Input() targetIdentificatie;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
  }

  openElement(element) {
    if (!element.gereserveerd && !element.vervallen && !this.appService.settings.documentOpenMode) {
      element.isOpen = !element.isOpen;
    }
  }
}

