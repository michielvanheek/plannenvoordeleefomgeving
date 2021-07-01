import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { ImowModelService } from "src/app/model/imow-model.service";

@Component({
  selector: "dso-stop-plan-viewer",
  templateUrl: "./stop-plan-viewer.component.html",
  styleUrls: ["./stop-plan-viewer.component.scss"]
})
export class StopPlanViewerComponent implements OnInit, OnChanges {

  @Input() structuur;
  @ViewChild("tabContent", {static: true}) private tabContentRef: ElementRef;

  tabs = [
    { id: 0, label: "Plekinfo", type: null, scrollTop: 0 },
    { id: 1, label: "Regels", type: "LICHAAM", documentComponenten: null, scrollTop: 0 },
    { id: 2, label: "Toelichting", type: "", scrollTop: 0 },
    { id: 3, label: "Bijlagen", type: "BIJLAGE", documentComponenten: null, scrollTop: 0 }
  ];
  tab = this.tabs[0];
  allVisible = false;

  constructor(
    private hostRef: ElementRef,
    public imowModel: ImowModelService
  ) { }

  ngOnInit(): void {
    this.initTabs();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.structuur) {
      this.initTabs();
    }
  }

  setTab(tab, scrollToSelected) {
    if (this.tab != null) {
      this.tab.scrollTop = this.tabContentRef.nativeElement.scrollTop;
    }

    this.tab = tab;

    if (scrollToSelected) {
      this.scrollToSelected();
    } else {
      this.scrollToPrevious(tab);
    }
  }

  selectNextComponentIdentificatie(type) {
    this.imowModel.selectNextComponentIdentificatie(type);
    this.scrollToSelected();
  }

  private initTabs() {
    for (let i = 1; i < this.tabs.length; i++) {
      this.tabs[i].documentComponenten = {
        _embedded: {
          documentComponenten: this.structuur? this.structuur._embedded.documentComponenten.filter(d => d.type == this.tabs[i].type): []
        }
      };
      this.tabs[i].scrollTop = 0;
    }
  }

  private scrollToSelected() {
    setTimeout(() => {
      if (this.tab.id != 1) {
        return;
      }
      if (this.imowModel.componentIdentificaties.selected == null) {
        return;
      }
      let element = document.getElementById(this.imowModel.componentIdentificaties.selected);
      if (element == null) {
        return;
      }

      let offsetTop = 0;
      while (element != this.hostRef.nativeElement) {
        offsetTop += element.offsetTop;
        element = element.offsetParent as HTMLElement;
      }

      this.tabContentRef.nativeElement.scrollTo({
        left: 0,
        top: offsetTop - 150,
        behavior: "smooth",
      });
    });
  }

  private scrollToPrevious(tab) {
    setTimeout(() => {
      this.tabContentRef.nativeElement.scrollTo({
        left: 0,
        top: tab.scrollTop
      });
    });
  }
}
