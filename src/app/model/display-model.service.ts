import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DisplayModelService {

  tabs = [
    {id: 0, label: "Plekinfo",                                                                                                                        scrollTop: 0},
    {id: 1, label: "Inhoud",                                                           documentComponenten: null,                                     scrollTop: 0},
    {id: 2, label: "Regels/beleid", algo: (dc) => this.slice(dc, "LICHAAM", true),     documentComponenten: null, components: [], diffComponents: [], scrollTop: 0},
    {id: 3, label: "Bijlagen",      algo: (dc) => this.slice(dc, "BIJLAGE", false),    documentComponenten: null, components: [], diffComponents: [], scrollTop: 0},
    {id: 4, label: "Toelichting",   algo: (dc) => this.slice(dc, "TOELICHTING", true), documentComponenten: null, components: [], diffComponents: [], scrollTop: 0}
  ];
  tab = this.tabs[0];

  initTabs(documentComponenten, typePlan) {
    this.tabs.forEach(tab => {
      tab.scrollTop = 0;
      if (tab.algo != null) {
        tab.documentComponenten = tab.algo(documentComponenten);
      }
    });
    this.tabs[1].documentComponenten = {_embedded: {documentComponenten: this.tabs.filter(tab => tab.algo).reduce((documentComponenten, tab) => documentComponenten.concat(tab.documentComponenten._embedded.documentComponenten), [])}};
    this.tabs[2].label = (typePlan != "omgevingsvisie")? "Regels": "Beleid";
  }

  setTab(tab, previousScrollTop, scrollTo) {
    if (this.tab == tab) {
      return;
    }

    if (this.tab != null) {
      this.tab.scrollTop = previousScrollTop;
    }
    if (scrollTo != "previous") {
      tab.scrollTop = scrollTo;
    }

    this.tab = tab;
  }

  getTab(componentIdentificatie) {
    return this.tabs.find(tab => tab.components && tab.components.some(component => component.identificatie == componentIdentificatie));
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
