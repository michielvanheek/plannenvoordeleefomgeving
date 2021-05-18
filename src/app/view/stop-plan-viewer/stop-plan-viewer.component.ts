import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import {AppService} from "../../app.service";

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

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.setTab(this.headers[0]);

    this.appService.documentOpenModeChange$.subscribe(() => {
      if (this.appService.settings.documentOpenMode) {
        this.scrollToTarget();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.structuur) {
      this.setTab(this.activeHeader);
    }

    if (changes.componentIdentificaties && changes.componentIdentificaties.currentValue) {
      const values = changes.componentIdentificaties.currentValue;
      this.targetIdentificatie = Object.keys(values).find(key => values[key] === "target");
      this.setTab(this.headers[1]);
      this.scrollToTarget();
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

  scrollToTarget() {
    setTimeout(() => {
      if (this.activeHeader !== this.headers[1]) { return; }

      const element = document.getElementById(this.targetIdentificatie);
      if (!element) { return; }

      const tabContentElement = document.getElementById("tab-content-1");
      tabContentElement.scrollTo({
        left: 0,
        top: element.offsetTop - 250,
        behavior: "smooth",
      });
    }, 100);
  }
}
