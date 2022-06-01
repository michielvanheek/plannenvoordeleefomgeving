import {Component, Input} from "@angular/core";

@Component({
  selector: "dso-document-element-title",
  templateUrl: "./document-element-title.component.html",
  styleUrls: ["./document-element-title.component.scss"]
})
export class DocumentElementTitleComponent {
  @Input() element: any;
  @Input() level = 0;
  @Input() toc;
  @Input() display;
  @Input() inactive = false;
  @Input() leftRightHeader = null;
}
