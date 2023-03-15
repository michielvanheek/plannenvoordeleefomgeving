import { Component, ElementRef, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { AppEvent } from "src/app/event/AppEvent";
import { AppEventListener } from "src/app/event/AppEventListener";
import { DisplayModelService } from "src/app/model/display-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";

@Component({
  selector: "dso-stop-plan-viewer",
  templateUrl: "./stop-plan-viewer.component.html",
  styleUrls: ["./stop-plan-viewer.component.scss"]
})
export class StopPlanViewerComponent implements OnInit, OnDestroy, OnChanges, AppEventListener {
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
        const change = {[key]: val};
        if ((key == "allOpen") && (
          (val == "diff") && (this.display.allOpen != "diff") ||
          (val != "diff") && (this.display.allOpen == "diff")
        )) {
          this.display.assign(change);
          this.setTabComponents();
        } else if ((key == "allVisible") && val) {
          this.display.assign(change);
          this.setTabStatus();
        } else if (key == "annotationsVisible") {
          this.display.assign(change);
        } else if (this.needsBuild(change)) {
          this.buildDisplay(change);
        } else {
          this.display.assign(change);
        }
      }
    },
    unsetDiff: () => {
      if (this.display.allOpen == "diff") {
        this.display.assign({allOpen: "doc"});
        this.setTabComponents();
      }
    },
    assign: display => {
      this.display = Object.assign({}, this.display, display);
    },
    setBuilding: () => {
      this.displayModel.tabStatus = "buildingTab";
    },
    setTab: (tab, scrollTo) => {
      if (!["previous", "selected"].includes(scrollTo)) {
        const componentIdentificatie = scrollTo;
        this.imowModel.componentIdentificaties.emit("selected", componentIdentificatie);
      }
      this.displayModel.setTab(tab, scrollTo);
    }
  };

  get tabStatusEmpty() {
    return this.displayModel.tabStatus == "empty";
  }

  get tabStatusBuilding() {
    return (this.displayModel.tabStatus == "buildingTab") || (this.displayModel.tabStatus == "buildingDisplay");
  }

  get tabStatusComplete() {
    return this.displayModel.tabStatus == "complete";
  }

  get tabStatusAlmostComplete() {
    return (this.displayModel.tabStatus == "buildingTabComplete") || (this.displayModel.tabStatus == "buildingDisplay");
  }

  get tabComponents() {
    return this.displayModel.tabComponents;
  }

  constructor(
    private zone: NgZone,
    private hostRef: ElementRef,
    public displayModel: DisplayModelService,
    public imowModel: ImowModelService,
    public planModel: PlanModelService
  ) {
    window["stopPlanViewerComponent"] = {
      displayEmit: (key, val) => setTimeout(() => this.zone.run(() => this.display.emit(key, val))),
      displaySetTab: (tab, scrollTo) => setTimeout(() => this.zone.run(() => this.display.setTab(tab, scrollTo)))
    };
  }

  ngOnInit(): void {
    this.setTabComponents();

    this.addScrollHandler();

    this.displayModel.addEventListener(this);
  }

  ngOnDestroy() {
    this.displayModel.removeEventListener(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.documentComponenten) {
      this.display.unsetDiff();
    }
  }

  appEventHandler(event: AppEvent): void {
    if ((event.type == "displayModel.tab") || (event.type == "displayModel.tab.documentComponenten") || (event.type == "displayModel.tab.diffComponents")) {
      this.setTabComponents();
    } else if (event.type == "displayModel.tab.scrollTop") {
      this.scrollTo();
    }
  }

  clearFilter() {
    if (this.needsBuild({filtered: null})) {
      this.buildDisplay("clearFilter");
    } else {
      this.imowModel.clearFilteredComponentIdentificaties();
    }
  }

  selectNextComponent(type) {
    this.imowModel.selectNextComponentIdentificatie(type);
    this.scrollToSelected();
  }

  private setTabComponents() {
    const components = (this.displayModel.tab.id == 0)? null: ((this.displayModel.tab.id == 1) || (this.display.allOpen != "diff"))? this.displayModel.tab.documentComponenten: this.displayModel.tab.diffComponents;
    if (this.displayModel.tabComponents != components) {
      this.displayModel.tabComponents = components;
      this.setTabStatus();
    }
  }

  private setTabStatus() {
    if (this.displayModel.tab.id == 0) {
      this.completeTab();
    } else if (!this.displayModel.tabComponents?._embedded?.documentComponenten.length && !this.displayModel.tabComponents?.length) {
      this.displayModel.tabStatus = "empty";
      this.resetShader(true);
    } else if (this.needsBuild()) {
      this.buildTab();
    } else {
      this.pipScrollHandler();
      this.completeTab();
    }
  }

  private needsBuild(change = null) {
    const display = Object.assign({}, this.display, change);
    const componentIdentificaties = Object.assign({}, this.imowModel.componentIdentificaties, change);

    if ((this.displayModel.tab.id == 1) && (display.tocLevel > 4) && (display.allVisible || (!componentIdentificaties.specific && !componentIdentificaties.filtered))) {
      return true;
    }
    if ((this.displayModel.tab.id > 1) && (display.allOpen == "doc") && (display.allVisible || (!componentIdentificaties.specific && !componentIdentificaties.filtered))) {
      return true;
    }
    if ((this.displayModel.tab.id > 1) && (display.allOpen == "diff")) {
      return true;
    }
    return false;
  }

  private buildDisplay(display) {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId);
    }
    this.displayModel.tabStatus = "buildingDisplay";
    if (display == "clearFilter") {
      delete this.imowModel.componentIdentificaties.filtered.label;
    }
    this.timeoutId = setTimeout(() => {
      if (display == "clearFilter") {
        this.imowModel.clearFilteredComponentIdentificaties();
      } else {
        this.display.assign(display);
      }
      this.displayModel.tabStatus = "complete";
    }, 350);
  }

  private buildTab() {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId);
    }
    this.displayModel.tabStatus = "buildingTab";
    this.resetShader(true);
    this.timeoutId = setTimeout(() => {
      this.completeTab();
    }, 350);
  }

  private completeTab() {
    this.displayModel.tabStatus = "buildingTabComplete";

    this.scrollTo();
  }

  private scrollTo() {
    const scrollTo = this.displayModel.tab.scrollTop;
    if (typeof scrollTo == "number") {
      this.scrollToPrevious();
    } else if (scrollTo == "selected") {
      this.scrollToSelected();
    } else {
      this.scrollToComponent(scrollTo);
    }
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
      if (element != null) {
        let offsetTop = 0;
        while (element != this.hostRef.nativeElement) {
          offsetTop += element.offsetTop;
          element = element.offsetParent as HTMLElement;
        }

        this.tabContentRef.nativeElement.scrollTo({
          left: 0,
          top: offsetTop - this.tabContentRef.nativeElement.offsetTop - 12,
          /*behavior: "smooth",*/
        });
      }

      this.displayModel.tabStatus = "complete";
    });
  }

  private scrollToPrevious() {
    this.timeoutId = setTimeout(() => {
      this.tabContentRef.nativeElement.scrollTo({
        left: 0,
        top: this.displayModel.tab.scrollTop
      });

      this.displayModel.tabStatus = "complete";
      this.resetShader();
    });
  }

  private pipScrollHandler() {
    this.tabContentRef.nativeElement.removeEventListener("scroll", this.scrollHandler);
    setTimeout(() => this.addScrollHandler());
  }

  private addScrollHandler() {
    this.tabContentRef.nativeElement.addEventListener("scroll", this.scrollHandler);
  }

  private scrollHandler = scrollEvent => {
    this.resetShader();

    this.displayModel.setScrollTop(this.tabContentRef.nativeElement.scrollTop);
  }

  private resetShader(hide = false) {
    const shaders = this.tabContentRef.nativeElement.getElementsByClassName("shader");
    if (shaders.length == 1) {
      shaders[0].style.visibility = (hide || (this.tabContentRef.nativeElement.scrollTop < 6))? "hidden": "visible";
    }
  }
}
