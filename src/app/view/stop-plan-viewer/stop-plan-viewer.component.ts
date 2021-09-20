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
    { id: 1, label: "Inhoud", type: "LICHAAM", subtypes: true, documentComponenten: null, scrollTop: 0 },
    { id: 2, label: "Regels", type: "LICHAAM", subtypes: true, documentComponenten: null, scrollTop: 0 },
    { id: 3, label: "Toelichting", type: "TOELICHTING", subtypes: true, documentComponenten: null, scrollTop: 0 },
    { id: 4, label: "Bijlagen", type: "BIJLAGE", subtypes: false, documentComponenten: null, scrollTop: 0 }
  ];
  tab = this.tabs[0];
  display = {
    tocLevel: 3,
    allOpen: true,
    allVisible: false,
    annotationsVisible: false,
    emit: (key, val) => {
      if (this.display[key] != val) {
        this.display = Object.assign({}, this.display, {[key]: val});
      }
    },
    setTab: componentIdentificatie => {
      this.setTab(this.tabs[2], componentIdentificatie);
    }
  };

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

  setTab(tab, scrollTo) {
    if (this.tab != null) {
      this.tab.scrollTop = this.tabContentRef.nativeElement.scrollTop;
    }

    this.tab = tab;

    if (typeof scrollTo == "string") {
      this.scrollToComponent(scrollTo);
    } else if (scrollTo) {
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
    for (const tab of this.tabs) {
      if (this.structuur == null) {
        tab.documentComponenten = {_embedded: {documentComponenten: []}};
      } else if (!tab.subtypes) {
        tab.documentComponenten = {_embedded: {documentComponenten:
          this.structuur._embedded.documentComponenten.filter(d => d.type == tab.type)
        }};
      } else {
        tab.documentComponenten = {_embedded: {documentComponenten:
          this.structuur._embedded.documentComponenten.filter(d => d.type == tab.type).reduce((dc, d) => dc.concat(d._embedded.documentComponenten), [])
        }};
      }
      tab.scrollTop = 0;
    }
  }

  private scrollToSelected() {
    if (this.imowModel.componentIdentificaties.selected == null) {
      return;
    }

    this.scrollToComponent(this.imowModel.componentIdentificaties.selected);
  }

  private scrollToComponent(componentIdentificatie) {
    setTimeout(() => {
      if (this.tab.id != 2) {
        return;
      }
      let element = document.getElementById(componentIdentificatie);
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
