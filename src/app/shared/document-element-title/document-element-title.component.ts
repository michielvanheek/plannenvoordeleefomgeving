import {Component, Input} from "@angular/core";

@Component({
  selector: "dso-document-element-title",
  templateUrl: "./document-element-title.component.html",
  styleUrls: ["./document-element-title.component.scss"]
})
export class DocumentElementTitleComponent {
  titleSymbols = {
    BOEK: "BOEK",
    DEEL: "DEEL",
    HOOFDSTUK: "HOOFDSTUK",
    TITEL: "TITEL",
    AFDELING: "AFDELING",
    PARAGRAAF: "§",
    SUBPARAGRAAF: "§",
    SUBSUBPARAGRAAF: "§",
    ARTIKEL: "ARTIKEL",
    BIJLAGE: "BIJLAGE"
  };

  @Input() element: any;
  @Input() level = 0;
  @Input() toc;
  @Input() display;
  @Input() inactive = false;
}
