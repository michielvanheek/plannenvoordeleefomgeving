import { Component, ElementRef, Input, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { DisplayModelService } from "src/app/model/display-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-stop-plan-viewer",
  templateUrl: "./stop-plan-viewer.component.html",
  styleUrls: ["./stop-plan-viewer.component.scss"]
})
export class StopPlanViewerComponent implements OnInit, OnChanges {
  private tab = {status: "complete", components: null};
  private timeoutId = null;

  @Input() structured;
  @Input() documentComponenten;
  @ViewChild("tabContent", {static: true}) private tabContentRef: ElementRef;

  display = {
    tocLevel: 3,
    allOpen: "doc",
    allVisible: false,
    allDiffVisible: true,
    annotationsVisible: false,
    emit: (key, val) => {
      if (this.display[key] != val) {
        if ((key == "tocLevel") && (val > 4) && this.allVisible) {
          this.buildDisplay({[key]: val});
        } else if ((key == "allOpen") && (val == "doc") && (this.display.allOpen != "diff") && this.allVisible) {
          this.buildDisplay({[key]: val});
        } else if ((key == "allVisible") && val && ((this.display.tocLevel > 4) || !(this.displayModel.tab.id == 1)) && ((this.display.allOpen == "doc") || (this.displayModel.tab.id == 1))) {
          this.buildDisplay({[key]: val});
        } else if (key == "allDiffVisible") {
          this.buildDisplay({[key]: val});
        } else {
          this.display = Object.assign({}, this.display, {[key]: val});
        }
      }
    },
    unsetDiff: () => {
      if (this.display.allOpen == "diff") {
        this.display = Object.assign({}, this.display, {allOpen: "doc"});
      }
    },
    setTab: componentIdentificatie => {
      this.setTab(this.displayModel.getTab(componentIdentificatie), componentIdentificatie);
    }
  };

  get allVisible() {
    return this.display.allVisible || (!this.imowModel.componentIdentificaties.specific && !this.imowModel.componentIdentificaties.filtered);
  }

  get tabStatusEmpty() {
    return this.tab.status == "empty";
  }

  get tabStatusBuilding() {
    return (this.tab.status == "buildingTab") || (this.tab.status == "buildingDisplay");
  }

  get tabStatusComplete() {
    return this.tab.status == "complete";
  }

  get tabStatusAlmostComplete() {
    return (this.tab.status == "buildingTabComplete") || (this.tab.status == "buildingDisplay");
  }

  get tabComponents() {
    return this.tab.components;
  }

  constructor(
    private zone: NgZone,
    private hostRef: ElementRef,
    public imowModel: ImowModelService,
    public planModel: PlanModelService,
    public displayModel: DisplayModelService
  ) {
    window["stopPlanViewerComponent"] = {displayEmit: (key, val) => setTimeout(() => this.zone.run(() => this.display.emit(key, val)))};
  }

  ngOnInit(): void {
    this.initShader();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.documentComponenten) {
      this.display.unsetDiff();
    }
  }

  setTabComponents() {
    const components = (this.displayModel.tab.id == 0)? null: ((this.displayModel.tab.id == 1) || (this.display.allOpen != "diff"))? this.displayModel.tab.documentComponenten: this.displayModel.tab.diffComponents;
    if (this.tab.components != components) {
      this.tab.components = components;
      if (!components?._embedded?.documentComponenten.length && !components?.length) {
        this.tab.status = "empty";
      } else if ((((this.displayModel.tab.id == 1) && (this.display.tocLevel > 4)) || ((this.displayModel.tab.id > 1) && (this.display.allOpen == "doc"))) && this.allVisible) {
        this.buildTab();
      } else if ((this.displayModel.tab.id > 1) && (this.display.allOpen == "diff")) {
        this.buildTab();
      } else {
        this.tab.status = "complete";
      }
    }
    return true;
  }

  setTab(tab, scrollTo) {
    this.displayModel.setTab(tab, this.tabContentRef.nativeElement.scrollTop, scrollTo);
  }

  selectNextComponentIdentificatie(type) {
    this.imowModel.selectNextComponentIdentificatie(type);
    this.scrollToSelected();
  }

  private buildDisplay(display) {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId);
    }
    this.tab.status = "buildingDisplay";
    this.timeoutId = setTimeout(() => {
      this.display = Object.assign({}, this.display, display);

      this.tab.status = "complete";
    }, 350);
  }

  private buildTab() {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId);
    }
    this.tab.status = "buildingTab";
    this.timeoutId = setTimeout(() => {
      this.tab.status = "buildingTabComplete";

      const scrollTo = this.displayModel.tab.scrollTop;
      if (typeof scrollTo == "number") {
        this.scrollToPrevious();
      } else if (scrollTo == "selected") {
        this.scrollToSelected();
      } else {
        this.scrollToComponent(scrollTo);
      }
    }, 350);
  }

  private scrollToSelected() {
    if (this.imowModel.componentIdentificaties.selected == null) {
      return;
    }

    this.scrollToComponent(this.imowModel.componentIdentificaties.selected);
  }

  private scrollToComponent(componentIdentificatie) {
    this.timeoutId = setTimeout(() => {
      if (this.displayModel.tab != this.displayModel.getTab(componentIdentificatie)) {
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
        top: offsetTop - this.tabContentRef.nativeElement.offsetTop - 12,
        behavior: "smooth",
      });

      this.tab.status = "complete";
    });
  }

  private scrollToPrevious() {
    this.timeoutId = setTimeout(() => {
      this.tabContentRef.nativeElement.scrollTo({
        left: 0,
        top: this.displayModel.tab.scrollTop
      });

      this.tab.status = "complete";

      this.resetShader();
    });
  }

  private initShader() {
    this.tabContentRef.nativeElement.addEventListener("scroll", event => this.resetShader());
  }

  private resetShader() {
    const shaders = this.tabContentRef.nativeElement.getElementsByClassName("shader");
    if (shaders.length == 1) {
      shaders[0].style.visibility = (this.tabContentRef.nativeElement.scrollTop < 6)? "hidden": "visible";
    }
  }
}
