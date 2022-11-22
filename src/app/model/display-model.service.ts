import { Injectable } from "@angular/core";
import { Timer } from "ng-niney";
import { AppEventDispatcher } from "../event/AppEventDispatcher";

@Injectable({
  providedIn: "root"
})
export class DisplayModelService extends AppEventDispatcher {
  private incubationTimer = new Timer(2000, 1);

  tabs = [
    {id: 0, label: "Plekinfo",                                                                                                                      scrollTop: 0, incubationScrollTop: 0},
    {id: 1, label: "Inhoud",                                                         documentComponenten: null,                                     scrollTop: 0, incubationScrollTop: 0},
    {id: 2, label: "Regels/beleid", algo: dc => this.slice(dc, "LICHAAM", true),     documentComponenten: null, components: [], diffComponents: [], scrollTop: 0, incubationScrollTop: 0},
    {id: 3, label: "Bijlagen",      algo: dc => this.slice(dc, "BIJLAGE", false),    documentComponenten: null, components: [], diffComponents: [], scrollTop: 0, incubationScrollTop: 0},
    {id: 4, label: "Toelichting",   algo: dc => this.slice(dc, "TOELICHTING", true), documentComponenten: null, components: [], diffComponents: [], scrollTop: 0, incubationScrollTop: 0}
  ];
  tab = this.tabs[0];
  tabStatus = "complete";
  tabComponents = null;
  component = null;  // Selected documentcomponent.

  constructor() {
    super();

    this.incubationTimer.timerHandler = () => this.tabs.forEach(tab => tab.incubationScrollTop = tab.scrollTop);
  }

  setLabel(typePlan) {
    this.tabs[2].label = !["omgevingsvisie", "programma"].includes(typePlan)? "Regels": "Beleid";
  }

  setDocumentComponenten(documentComponenten) {
    this.tabs.filter(tab => tab.algo).forEach(tab => {
      tab.documentComponenten = tab.algo(documentComponenten);
      tab.scrollTop = 0;
    });
    this.tabs.filter(tab => tab.id == 1).forEach(tab => {
      tab.documentComponenten = {_embedded: {documentComponenten: this.tabs.filter(tab => tab.algo).reduce((documentComponenten, tab) => documentComponenten.concat(tab.documentComponenten._embedded.documentComponenten), [])}};
      tab.scrollTop = 0;
    });

    if ((this.tab.algo != null) || (this.tab.id == 1)) {
      this.dispatchEvent("displayModel.tab.documentComponenten");
    }
  }

  setTab(tab, scrollTo) {
    if (tab == "default") {
      tab = this.tabs[2];
    } else if (tab == "lookup") {
      const componentIdentificatie = scrollTo;
      tab = this.getTab(componentIdentificatie);
    }

    if ((this.tab == tab) && (this.tab.scrollTop == scrollTo)) {
      return;
    }

    if (this.tab == tab) {
      this.tab.scrollTop = scrollTo;

      this.dispatchEvent("displayModel.tab.scrollTop");

      return;
    }

    if (scrollTo != "previous") {
      tab.scrollTop = scrollTo;
    }

    this.tab = tab;

    this.dispatchEvent("displayModel.tab");
  }

  getTab(componentIdentificatie) {
    return this.tabs.find(tab => tab.components && tab.components.some(component => component.identificatie == componentIdentificatie));
  }

  setComponent(component) {
    this.component = component;
  }

  setScrollTop(scrollTop) {
    this.tab.scrollTop = scrollTop;
    this.setIncubationScrollTop();
  }

  private setIncubationScrollTop() {
    this.incubationTimer.reset();
    this.incubationTimer.start();
  }

  private slice(documentComponenten, type, subtypes) {
    let slice = [];
    if (documentComponenten != null) {
      slice = (documentComponenten._embedded.documentComponenten || documentComponenten._embedded.ontwerpDocumentComponenten).filter(component => component.type == type);
      if (subtypes) {
        slice = slice.reduce((slice, component) => slice.concat(component._embedded.documentComponenten || component._embedded.ontwerpDocumentComponenten), []);
      }
    }
    return {_embedded: {documentComponenten: slice}};
  }
}
