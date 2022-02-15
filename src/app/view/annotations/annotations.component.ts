import { Component, DoCheck, Input, OnChanges, OnDestroy, SimpleChanges } from "@angular/core";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-annotations",
  templateUrl: "./annotations.component.html",
  styleUrls: ["./annotations.component.scss"]
})
export class AnnotationsComponent implements OnChanges, DoCheck, OnDestroy {
  private numLoadingD = this.imowModel.numLoadingD;

  private titleSymbols = {
    BOEK: {article: "het", noun: "boek"},
    DEEL: {article: "het", noun: "deel"},
    HOOFDSTUK: {article: "het", noun: "hoofdstuk"},
    TITEL: {article: "de", noun: "titel"},
    AFDELING: {article: "de", noun: "afdeling"},
    PARAGRAAF: {article: "de", noun: "paragraaf"},
    SUBPARAGRAAF: {article: "de", noun: "paragraaf"},
    SUBSUBPARAGRAAF: {article: "de", noun: "paragraaf"}
  };
  private childComponents = null;
  private hash = null;

  @Input() component;
  @Input() display;

  header = null;
  subheader = null;
  legalWarning = false;

  locaties = [];
  gebiedsaanwijzingen = [];
  activiteitlocatieaanduidingen = [];
  omgevingsnormen = [];
  hoofdlijnen = [];

  constructor(
    public highlightModel: HighlightModelService,
    public imowModel: ImowModelService,
    private planModel: PlanModelService
  ) { }

  get legal() {
    return typeof this.display.annotationsVisible == "string";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      this.setComponents();
    } else if (changes.display) {
      this.applyComponents();
    }
  }

  ngDoCheck() {
    if (this.numLoadingD != this.imowModel.numLoadingD) {
      this.numLoadingD = this.imowModel.numLoadingD;

      this.applyComponents();
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

    if ((this.component._links.regeltekst != null) || (this.component._links.ontwerpregeltekst != null)) {  // Artikel/lid with annotations, no inherited annotations, no child components.
      if (this.component.nummer != null) {
        this.header = "van artikel " + (this.component.artikelNummer? (this.component.artikelNummer + ", lid "): "") + this.component.nummer.replace(/\.$/, "");
      } else {
        this.header = "van de geselecteerde tekst";
      }
      this.imowModel.loadTekstForComponent(this.component);
    } else if (
      (this.component._links.divisietekst != null) || (this.component._links.ontwerpdivisietekst != null) ||
      (this.component._links.divisie != null) || (this.component._links.ontwerpdivisie != null) ||
      (this.component._links.inheritedDivisies != null)
    ) {  // Divisietekst or divisie with annotations and/or with inherited annotations. Divisie may have child components, but will only come here if it has own and/or inherited annotations.
      if (this.component.nummer != null) {
        this.header = "van " + (!this.component.nummer.match(/\..+/)? "hoofdstuk ": "paragraaf ") + this.component.nummer.replace(/\.$/, "");
      } else if (this.component.divisieNummer != null) {
        this.header = "van de geselecteerde tekst in " + (!this.component.divisieNummer.match(/\..+/)? "hoofdstuk ": "paragraaf ") + this.component.divisieNummer.replace(/\.$/, "");
      } else {
        this.header = "van de geselecteerde tekst";
      }
      this.imowModel.loadTekstForComponent(this.component);
      this.imowModel.loadInheritedTekstenForComponent(this.component);
    } else {
      if (this.titleSymbols[this.component.type] != null) {
        if (this.component.nummer != null) {
          this.header = "van " + this.titleSymbols[this.component.type].noun + " " + this.component.nummer.replace(/\.$/, "");
        } else {
          this.header = "van " + this.titleSymbols[this.component.type].article + " geselecteerde " + this.titleSymbols[this.component.type].noun;
        }
      } else {
        if (this.component.nummer != null) {
          this.header = "van " + (!this.component.nummer.match(/\..+/)? "hoofdstuk ": "paragraaf ") + this.component.nummer.replace(/\.$/, "");
        } else {
          this.header = "van de geselecteerde paragraaf";
        }
      }
    }

    if ((this.component._embedded.documentComponenten || this.component._embedded.ontwerpDocumentComponenten).length > 0) {  // Structured component or divisie with child components.
      if (this.header != null) {
        this.header = this.header.replace(/^van /, "in ");
      }
      const getChildComponents = (component) => {
        const a = component._embedded.documentComponenten || component._embedded.ontwerpDocumentComponenten || [];
        return a.reduce((components, component) => components.concat(getChildComponents(component)), a);
      };
      this.childComponents = getChildComponents(this.component);
      this.childComponents.forEach(component => {
        this.imowModel.loadTekstForComponent(component);
      });
    } else {
      this.childComponents = null;
    }

    this.applyComponents();
  }

  private applyComponents() {
    if (this.component == null) {
      return;
    }
    if (this.legal && (this.imowModel.numLoadingD > 0)) {
      this.subheader = "...";
      this.legalWarning = false;

      this.locaties = [];
      this.gebiedsaanwijzingen = [];
      this.activiteitlocatieaanduidingen = [];
      this.omgevingsnormen = [];
      this.hoofdlijnen = [];

      return;
    }

    this.subheader = null;
    this.legalWarning = false;

    this.hash = {locaties: {}, gebiedsaanwijzingen: {}, activiteitlocatieaanduidingen: {}, omgevingsnormen: {}, hoofdlijnen: {}};

    this.setOwn();
    this.setInherited();
    this.setOffspring();

    this.locaties = (Object.values(this.hash.locaties) as any[]).sort((a, b) => (!a.locatie.noemer || (a.locatie.noemer > b.locatie.noemer))? 1: (a.locatie.noemer && (a.locatie.noemer < b.locatie.noemer))? -1: 0);
    this.gebiedsaanwijzingen = Object.values(this.hash.gebiedsaanwijzingen);
    this.activiteitlocatieaanduidingen = Object.values(this.hash.activiteitlocatieaanduidingen);
    this.omgevingsnormen = Object.values(this.hash.omgevingsnormen);
    this.hoofdlijnen = Object.values(this.hash.hoofdlijnen).map((soort: any) => {return {soort: soort.soort, hoofdlijnen: Object.values(soort.hoofdlijnen)}}).sort((a, b) => (a.soort > b.soort)? 1: (a.soort < b.soort)? -1: 0);

    if (this.legal) {
      this.setLegal();
    }
  }

  private setOwn() {
    if (this.component.tekst == null) {
      return;
    }

    this.subheader = !this.component.type.match(/^DIVISIE/)? this.component.tekst.typeJuridischeRegels: this.component.type.toLowerCase();

    (this.component.tekst.locaties || []).forEach(locatie => this.addLocatie(locatie, "own"));
    (this.component.tekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addGebiedsaanwijzing(gebiedsaanwijzing, "own"));
    (this.component.tekst.activiteitlocatieaanduidingen || []).forEach(activiteitlocatieaanduiding => this.addActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "own"));
    (this.component.tekst.omgevingsnormen || []).forEach(omgevingsnorm => this.addOmgevingsnorm(omgevingsnorm, "own"));
    (this.component.tekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "own"));
  }

  private setInherited() {
    if (this.component.inheritedTeksten == null) {
      return;
    }

    if (this.subheader == null) {
      this.subheader = "van bovenliggende divisie";
    }

    this.component.inheritedTeksten.forEach(inheritedTekst => {
      (inheritedTekst.locaties || []).forEach(locatie => this.addLocatie(locatie, "inherited"));
      (inheritedTekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addGebiedsaanwijzing(gebiedsaanwijzing, "inherited"));
      (inheritedTekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "inherited"));
    });
  }

  private setOffspring() {
    if (this.childComponents == null) {
      return;
    }
    const childComponents = this.childComponents.filter(component => component.tekst);
    if (childComponents.length == 0) {
      return;
    }

    if (this.subheader == null) {
      this.subheader = "";
    } else {
      this.subheader += " + ";
    }

    const numRegelteksten = childComponents.filter(component => !component.type.match(/^DIVISIE/)).length;
    if (numRegelteksten > 0) {
      this.subheader = numRegelteksten + ((numRegelteksten == 1)? " regeltekst": " regelteksten");
    } else {
      const numDivisies = childComponents.filter(component => component.type == "DIVISIE").length;
      const numDivisieteksten = childComponents.filter(component => component.type == "DIVISIETEKST").length;
      if ((numDivisies > 0) && (numDivisieteksten > 0)) {
        this.subheader += numDivisies + ((numDivisies == 1)? " onderliggende divisie": " onderliggende divisies")
          + " + " + numDivisieteksten + ((numDivisieteksten == 1)? " divisietekst": " divisieteksten");
      } else if (numDivisies > 0) {
        this.subheader += numDivisies + ((numDivisies == 1)? " onderliggende divisie": " onderliggende divisies");
      } else if (numDivisieteksten > 0) {
        this.subheader += numDivisieteksten + ((numDivisieteksten == 1)? " onderliggende divisietekst": " onderliggende divisieteksten");
      }
    }

    childComponents.map(component => component.tekst).forEach(tekst => {
      (tekst.locaties || []).forEach(locatie => this.addLocatie(locatie, "offspring"));
      (tekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addGebiedsaanwijzing(gebiedsaanwijzing, "offspring"));
      (tekst.activiteitlocatieaanduidingen || []).forEach(activiteitlocatieaanduiding => this.addActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "offspring"));
      (tekst.omgevingsnormen || []).forEach(omgevingsnorm => this.addOmgevingsnorm(omgevingsnorm, "offspring"));
      (tekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "offspring"));
    });
  }

  private addLocatie(locatie, prop) {
    const identificatie = locatie.technischId || locatie.identificatie;
    this.hash.locaties[identificatie] = this.hash.locaties[identificatie] || {locatie: locatie, own: false, inherited: false, offspring: false};
    this.hash.locaties[identificatie][prop] = true;
  }

  private addGebiedsaanwijzing(gebiedsaanwijzing, prop) {
    this.hash.gebiedsaanwijzingen[gebiedsaanwijzing.identificatie] = this.hash.gebiedsaanwijzingen[gebiedsaanwijzing.identificatie] || {gebiedsaanwijzing: gebiedsaanwijzing, own: false, inherited: false, offspring: false};
    this.hash.gebiedsaanwijzingen[gebiedsaanwijzing.identificatie][prop] = true;
  }

  private addActiviteitlocatieaanduiding(activiteitlocatieaanduiding, prop) {
    this.hash.activiteitlocatieaanduidingen[activiteitlocatieaanduiding.identificatie] = this.hash.activiteitlocatieaanduidingen[activiteitlocatieaanduiding.identificatie] || {activiteitlocatieaanduiding: activiteitlocatieaanduiding, own: false, inherited: false, offspring: false};
    this.hash.activiteitlocatieaanduidingen[activiteitlocatieaanduiding.identificatie][prop] = true;
  }

  private addOmgevingsnorm(omgevingsnorm, prop) {
    this.hash.omgevingsnormen[omgevingsnorm.identificatie] = this.hash.omgevingsnormen[omgevingsnorm.identificatie] || {omgevingsnorm: omgevingsnorm, own: false, inherited: false, offspring: false};
    this.hash.omgevingsnormen[omgevingsnorm.identificatie][prop] = true;
  }

  private addHoofdlijn(hoofdlijn, prop) {
    this.hash.hoofdlijnen[hoofdlijn.soort] = this.hash.hoofdlijnen[hoofdlijn.soort] || {soort: hoofdlijn.soort, hoofdlijnen: {}};
    this.hash.hoofdlijnen[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie] = this.hash.hoofdlijnen[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie] || {hoofdlijn: hoofdlijn, own: false, inherited: false, offspring: false};
    this.hash.hoofdlijnen[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie][prop] = true;
  }

  private setLegal() {
    const planLocatie = this.planModel.plan.locatie;
    const includesPlanLocatie = this.locaties.some(o => o.locatie == planLocatie);
    const gebiedsaanwijzingenNonLegal = this.gebiedsaanwijzingen.filter(o => (o.gebiedsaanwijzing.locaties.length > 1) || ((o.gebiedsaanwijzing.locaties[0] == planLocatie) && !includesPlanLocatie));
    const activiteitlocatieaanduidingenNonLegal = this.activiteitlocatieaanduidingen.filter(o => (o.activiteitlocatieaanduiding.locaties.length > 1) || ((o.activiteitlocatieaanduiding.locaties[0] == planLocatie) && !includesPlanLocatie));

    this.gebiedsaanwijzingen = this.gebiedsaanwijzingen.filter(o => (o.gebiedsaanwijzing.locaties.length == 1) && ((o.gebiedsaanwijzing.locaties[0] != planLocatie) || includesPlanLocatie));
    this.activiteitlocatieaanduidingen = this.activiteitlocatieaanduidingen.filter(o => (o.activiteitlocatieaanduiding.locaties.length == 1) && ((o.activiteitlocatieaanduiding.locaties[0] != planLocatie) || includesPlanLocatie));

    this.activiteitlocatieaanduidingen.forEach(oa => {
      const i = this.locaties.findIndex(ol => ol.locatie == oa.activiteitlocatieaanduiding.locaties[0]);
      if (i > -1) {
        this.locaties.splice(i, 1);
      }
    });
    this.gebiedsaanwijzingen.forEach(og => {
      const i = this.locaties.findIndex(ol => ol.locatie == og.gebiedsaanwijzing.locaties[0]);
      if (i > -1) {
        this.locaties.splice(i, 1);
      }
      const j = this.activiteitlocatieaanduidingen.findIndex(oc => oc.activiteitlocatieaanduiding.locaties[0] == og.gebiedsaanwijzing.locaties[0]);
      if (j > -1) {
        this.activiteitlocatieaanduidingen.splice(j, 1);
      }
    });
    if (!environment.hybridAnnotations) {
      this.locaties.push(
        ...this.gebiedsaanwijzingen.map(o => { return {locatie: o.gebiedsaanwijzing.locaties[0], own: o.own, inherited: o.inherited, offspring: o.offspring} }),
        ...this.activiteitlocatieaanduidingen.map(o => { return {locatie: o.activiteitlocatieaanduiding.locaties[0], own: o.own, inherited: o.inherited, offspring: o.offspring} })
      );
      this.gebiedsaanwijzingen = [];
      this.activiteitlocatieaanduidingen = [];
    }

    const numLegal = this.locaties.length + this.gebiedsaanwijzingen.length + this.activiteitlocatieaanduidingen.length;
    if (numLegal == 0) {
      this.subheader = "ambtsgebied, geen specifieke begrenzing";
      this.locaties = [{locatie: planLocatie, own: true, inherited: false, offspring: false}];
    } else if (includesPlanLocatie && numLegal == 1) {
      this.subheader = "ambtsgebied, geen specifieke begrenzing";
    } else if (includesPlanLocatie && numLegal == 2) {
      this.subheader = "ambtsgebied + specifieke begrenzing";
    } else if (includesPlanLocatie && numLegal > 2) {
      this.subheader = "ambtsgebied + " + (numLegal - 1) + " specifieke begrenzingen";
    } else if (!includesPlanLocatie && numLegal == 1) {
      this.subheader = "specifieke begrenzing";
    } else if (!includesPlanLocatie && numLegal > 1) {
      this.subheader = numLegal + " specifieke begrenzingen";
    }

    if (this.omgevingsnormen.length == 1) {
      this.subheader += " + omgevingsnorm";
    } else if (this.omgevingsnormen.length > 1) {
      this.subheader += " + " + this.omgevingsnormen.length + " omgevingsnormen";
    }

    if (gebiedsaanwijzingenNonLegal.length + activiteitlocatieaanduidingenNonLegal.length > 0) {
      this.legalWarning = true;
    }

    if (this.display.annotationsVisible != "legal") {  // Specific search name.
      const s = this.display.annotationsVisible.replace(/<[!>]*>/g, "").replace(/\W/g, "").toLowerCase();
      const locatie = this.locaties.find(o => (o.locatie.noemer || "").replace(/\W/g, "").toLowerCase() == s)?.locatie;
      if ((locatie != null) && !this.imowModel.annotationLayers.some(annotationLayer => annotationLayer.annotation == locatie)) {
        this.imowModel.toggleAnnotationLayer(locatie, "L");
      }
      setTimeout(() => this.display.annotationsVisible = "legal");
    }
  }

  isChecked(annotation) {
    return this.imowModel.annotationLayers.some(annotationLayer => annotationLayer.annotation == annotation);
  }

  isGebiedsaanwijzingDisabled(gebiedsaanwijzing) {
    return !gebiedsaanwijzing.locaties || !gebiedsaanwijzing.locaties.length || !gebiedsaanwijzing.teksten || !gebiedsaanwijzing.teksten.length;
  }

  isActiviteitlocatieaanduidingDisabled(activiteitlocatieaanduiding) {
    return !activiteitlocatieaanduiding.locaties || !activiteitlocatieaanduiding.locaties.length || !activiteitlocatieaanduiding.teksten || !activiteitlocatieaanduiding.teksten.length;
  }

  isOmgevingsnormDisabled(omgevingsnorm) {
    return omgevingsnorm.normwaarde.some(normwaarde => !normwaarde.locaties || !normwaarde.locaties.length) || !omgevingsnorm.teksten || !omgevingsnorm.teksten.length;
  }
}
