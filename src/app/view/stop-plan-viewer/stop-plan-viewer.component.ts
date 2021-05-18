import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "dso-stop-plan-viewer",
  templateUrl: "./stop-plan-viewer.component.html",
  styleUrls: ["./stop-plan-viewer.component.scss"]
})
export class StopPlanViewerComponent implements OnInit, OnChanges {

  @Input() plan;
  @Input() structuur;
  @Input() componentIdentificaties;

  headers = [
    { id: 0, label: "Plekinfo", type: null },
    { id: 1, label: "Regels", type: "LICHAAM" },
    { id: 2, label: "Toelichting", type: "" },
    { id: 3, label: "Bijlagen", type: "BIJLAGE" }
  ];
  activeHeader;

  tabData;
  targetIdentificatie;

  ngOnInit(): void {
    this.setTab(this.headers[0]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.structuur) {
      this.setTab(this.activeHeader);
    }

    if (changes.componentIdentificaties && changes.componentIdentificaties.currentValue) {
      const values = changes.componentIdentificaties.currentValue;
      this.targetIdentificatie = Object.keys(values).find(key => values[key] === "target");
      this.setTab(this.headers[1]);
    }
  }

  setTab(tab) {
    this.activeHeader = null;
    this.tabData = {
      _embedded: {
        documentComponenten: this.structuur? this.structuur._embedded.documentComponenten.filter(d => d.type === tab.type): []
      }
    };

    this.activeHeader = tab;
  }
}
