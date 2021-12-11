import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { ImowModelService } from "src/app/model/imow-model.service";

@Component({
  selector: "dso-annotations",
  templateUrl: "./annotations.component.html",
  styleUrls: ["./annotations.component.scss"]
})
export class AnnotationsComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  private numLoadingD = this.imowModel.numLoadingD;

  private titleSymbols = {
    BOEK: "boek",
    DEEL: "deel",
    HOOFDSTUK: "hoofdstuk",
    TITEL: "titel",
    AFDELING: "afdeling",
    PARAGRAAF: "paragraaf",
    SUBPARAGRAAF: "paragraaf",
    SUBSUBPARAGRAAF: "paragraaf",
  };
  private selfComponent = null;
  private childComponents = null;

  header = null;
  regeltekst = null;

  @Input() component;
  @Input() display;

  constructor(public imowModel: ImowModelService) { }

  ngOnInit() {
    this.setComponents();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      this.setComponents();
    }
  }

  ngDoCheck() {
    if (this.numLoadingD != this.imowModel.numLoadingD) {
      this.numLoadingD = this.imowModel.numLoadingD;

      this.setRegeltekst();
    }
  }

  ngOnDestroy() {
    this.display.emit("annotationsVisible", false);
  }

  private setComponents() {
    if (this.component == null) {
      setTimeout(() => this.display.emit("annotationsVisible", false));
      return;
    }

    if (this.component._links.regeltekst != null) {  // Artikel/lid with annotations, no child components, no parent components with annotations.
      this.header = "Annotaties van " + this.component.identificatie.match(/art.*$/)[0].replace(/art_/, "artikel ").replace(/__para_/, ", lid ");
      this.selfComponent = this.component;
      this.imowModel.loadRegeltekstForComponent(this.component);
    } else if (this.component._links.divisietekst != null) {  // Divisietekst with annotations, no child components, may have parent components with annotations.
      // TODO
    } else if (this.component._links.divisie != null) {  // Divisie with annotations, may have child components and/or parent components with annotations.
      // TODO
    } else {
      this.selfComponent = null;
    }

    if ((this.component._embedded.documentComponenten != null) && (this.component._embedded.documentComponenten.length > 0)) {
      this.header = "Annotaties in " + this.titleSymbols[this.component.type] + " " + this.component.nummer;
      const getChildComponents = (component) => {
        const a = (component._embedded? component._embedded.documentComponenten: []);
        return a.reduce((components, component) => components.concat(getChildComponents(component)), a);
      };
      this.childComponents = getChildComponents(this.component);
      this.childComponents.forEach(component => this.imowModel.loadRegeltekstForComponent(component));
    } else {
      this.childComponents = null;
    }

    this.setRegeltekst();
  }

  private setRegeltekst() {
    if ((this.selfComponent == null) && (this.childComponents == null)) {
      console.warn("No components to compose regeltekst.")
      return;
    }

    if ((this.selfComponent != null) && (this.childComponents == null)) {
      this.regeltekst = this.selfComponent.regeltekst;
    } else if ((this.selfComponent == null) && (this.childComponents != null)) {
      const regelteksten = this.childComponents.filter(component => component.regeltekst).map(component => component.regeltekst).filter(regeltekst => regeltekst.locaties);
      this.regeltekst = {typeJuridischeRegels: regelteksten.length + ((regelteksten.length == 1)? " regeltekst": " regelteksten")};

      const locaties = {};
      const gebiedsaanwijzingen = {};
      const omgevingsnormen = {};

      regelteksten.forEach(regeltekst => {
        regeltekst.locaties.forEach(locatie => locaties[locatie.identificatie] = locatie);
        (regeltekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => gebiedsaanwijzingen[gebiedsaanwijzing.identificatie] = gebiedsaanwijzing);
        (regeltekst.omgevingsnormen || []).forEach(omgevingsnorm => omgevingsnormen[omgevingsnorm.identificatie] = omgevingsnorm);
      });

      this.regeltekst.locaties = Object.values(locaties);
      if (Object.values(gebiedsaanwijzingen).length > 0) {
        this.regeltekst.gebiedsaanwijzingen = Object.values(gebiedsaanwijzingen);
      }
      if (Object.values(omgevingsnormen).length > 0) {
        this.regeltekst.omgevingsnormen = Object.values(omgevingsnormen);
      }
    }
  }

  isChecked(annotation) {
    return this.imowModel.annotationLayers.some(annotationLayer => annotationLayer.annotation == annotation);
  }

  isGebiedsaanwijzingDisabled(gebiedsaanwijzing) {
    return !gebiedsaanwijzing.locaties || !gebiedsaanwijzing.locaties.length || !gebiedsaanwijzing.regelteksten || !gebiedsaanwijzing.regelteksten.length;
  }

  isOmgevingsnormDisabled(omgevingsnorm) {
    return omgevingsnorm.normwaarde.some(normwaarde => !normwaarde.locaties || !normwaarde.locaties.length) || !omgevingsnorm.regelteksten || !omgevingsnorm.regelteksten.length;
  }
}
