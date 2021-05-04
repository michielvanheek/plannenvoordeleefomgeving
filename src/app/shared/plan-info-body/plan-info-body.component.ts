import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";

@Component({
  selector: "dso-plan-info-body",
  templateUrl: "./plan-info-body.component.html",
  styleUrls: ["./plan-info-body.component.scss"]
})
export class PlanInfoBodyComponent implements OnInit {
  @Input() plan;

  headers = [
    {id: 0, label: "Plekinfo", type: null },
    {id: 1, label: "Regels", type: "LICHAAM" },
    {id: 2, label: "Toelichting", type: "" },
    {id: 3, label: "Bijlagen", type: "BIJLAGE"}
  ];
  activeHeader;

  tabData;

  constructor() {
  }

  ngOnInit(): void {
    this.onChangeTab(this.headers[0]);
  }

  onChangeTab(tab) {
    this.activeHeader = null;
    this.tabData = {
      _embedded: {
        documentComponenten: this.plan._embedded.documentComponenten.filter(d => d.type === tab.type)
      }
    };
    this.activeHeader = tab;
  }
}
