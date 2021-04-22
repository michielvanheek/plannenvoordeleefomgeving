import {Component, Input, OnInit} from "@angular/core";
import {AppService} from "../../app.service";

@Component({
  selector: "dso-document-element-title",
  templateUrl: "./document-element-title.component.html",
  styleUrls: ["./document-element-title.component.scss"]
})
export class DocumentElementTitleComponent implements OnInit {
  @Input() element: any;
  @Input() isOpen = false;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
  }

  get isOpenable(): boolean {
    return !this.element.gereserveerd && !this.element.vervallen && !this.appService.settings.documentOpenMode;
  }
}
