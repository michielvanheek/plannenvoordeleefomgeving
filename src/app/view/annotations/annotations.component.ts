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
  private tekst = null;
  private inheritedTeksten = null;
  private numLoadingD = this.imowModel.numLoadingD;

  private titleSymbols = {
    BOEK: {article: "het", noun: "boek"},
    DEEL: {article: "het", noun: "deel"},
    HOOFDSTUK: {article: "het", noun: "hoofdstuk"},
    TITEL: {article: "de", noun: "titel"},
    AFDELING: {article: "de", noun: "afdeling"},
    PARAGRAAF: {article: "de", noun: "paragraaf"},
    SUBPARAGRAAF: {article: "de", noun: "paragraaf"},
    SUBSUBPARAGRAAF: {article: "de", noun: "paragraaf"},
    ARTIKEL: {article: "het", noun: "artikel"}
  };
  private childComponents = null;
  private hoofdlijnenHash = {};
  private annotationsHash = {};

  @Input() component;
  @Input() display;

  header = null;
  subheader = null;

  hoofdlijnen = [];
  annotations = [];

  constructor(
    public highlightModel: HighlightModelService,
    public imowModel: ImowModelService,
    private planModel: PlanModelService
  ) { }

  get legal() {
    return (typeof this.display.annotationsVisible == "string") && (this.display.annotationsVisible != "compact");
  }

  get compact() {
    return this.display.annotationsVisible == "compact";
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.component) {
      this.setComponents();
    } else if (changes.display) {
      this.applyComponents();
    }
  }

  ngDoCheck() {
    if (this.component == null) {
      return;
    }

    if ((this.tekst != this.component.tekst) || (this.inheritedTeksten != this.component.inheritedTeksten)) {
      this.tekst = this.component.tekst;
      this.inheritedTeksten = this.component.inheritedTeksten;
      if (this.tekst == null) {
        this.setComponents();
      } else if (this.inheritedTeksten == null) {
        this.setComponents();
      }
    }
    if (this.numLoadingD != this.imowModel.numLoadingD) {
      this.numLoadingD = this.imowModel.numLoadingD;
      this.applyComponents();
    }
  }

  ngOnDestroy() {
    this.display.emit("annotationsVisible", false);
  }

  isTypeVisible(annotation) {
    if (annotation.viewPrename == null) {
      return false;
    }
    return (annotation.viewName.toLowerCase().match(/^(\w+)[^\w]{2,}/)?.[1] != annotation.viewPrename.toLowerCase());
  }

  isGroepVisible(annotation) {
    if (!environment.gebiedsaanwijzingGroep) {
      return false;
    }
    return (annotation.viewName.toLowerCase().match(/(^|[^\w]{2,})(\w+)[^\w]{2,}/)?.[2] != annotation.groep.waarde.toLowerCase());
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
      (this.component._links.divisieannotatie != null) || (this.component._links.ontwerpdivisieannotatie != null) ||
      (this.component._links.inheritedDivisieannotaties != null) || (this.component._links.inheritedOntwerpdivisieannotaties != null)
    ) {  // Divisietekst/divisie with own annotations and/or with inherited annotations. Divisie may or may not have child components.
      if (this.component.nummer != null) {
        this.header = "van " + (this.component.label? this.component.label.toLowerCase(): "onderdeel") + " " + this.component.nummer.replace(/\.$/, "");
      } else if (this.component.divisieNummer != null) {
        this.header = "van de geselecteerde tekst in " + (this.component.label? this.component.label.toLowerCase(): "onderdeel") + " " + this.component.divisieNummer.replace(/\.$/, "");
      } else {
        this.header = "van de geselecteerde tekst";
      }
      this.imowModel.loadTekstForComponent(this.component);
      this.imowModel.loadInheritedTekstenForComponent(this.component);
    } else if (this.titleSymbols[this.component.type] != null) {  // Artikel without annotations, or structured component. Structured component may or may not have child components.
      if (this.component.nummer != null) {
        this.header = "van " + this.titleSymbols[this.component.type].noun + " " + this.component.nummer.replace(/\.$/, "");
      } else {
        this.header = "van " + this.titleSymbols[this.component.type].article + " geselecteerde " + this.titleSymbols[this.component.type].noun;
      }
    } else {  // Lid without annotations, or divisietekst/divisie without own/inherited annotations. Divisie may or may not have child components.
      if (this.component.nummer != null) {
        this.header = "van " + (this.component.label? this.component.label.toLowerCase(): "onderdeel") + " " + this.component.nummer.replace(/\.$/, "");
      } else {
        this.header = "van de geselecteerde tekst";
      }
    }

    if ((this.component._embedded != null) && (
      ((this.component._embedded.documentComponenten != null) && (this.component._embedded.documentComponenten.length > 0)) ||
      ((this.component._embedded.ontwerpDocumentComponenten != null) && (this.component._embedded.ontwerpDocumentComponenten.length > 0))
    )) {  // Structured component or divisie with child components.
      if (this.header != null) {
        this.header = this.header.replace(/^van /, "in ");
      }
      const getChildComponents = component => {
        const components = component._embedded?.documentComponenten || component._embedded?.ontwerpDocumentComponenten || [];
        return components.reduce((components, component) => components.concat(getChildComponents(component)), components);
      };
      this.childComponents = getChildComponents(this.component);
      this.childComponents.forEach(component => {
        this.imowModel.loadTekstForComponent(component);
      });
    } else {
      this.childComponents = null;
    }

    this.tekst = this.component.tekst;
    this.inheritedTeksten = this.component.inheritedTeksten;

    this.applyComponents();
  }

  private applyComponents() {
    if (this.component == null) {
      return;
    }
    if (this.legal && (this.imowModel.numLoadingD > 0)) {
      this.subheader = "...";

      this.hoofdlijnen = [];
      this.annotations = [];

      return;
    }

    this.subheader = null;

    this.hoofdlijnenHash = {};
    this.annotationsHash = {}; 

    this.setOwn();
    this.setInherited();
    this.setOffspring();

    this.hoofdlijnen = (Object.values(this.hoofdlijnenHash) as any[]).map(soort => {
      return {
        soort: soort.soort,
        hoofdlijnen: (Object.values(soort.hoofdlijnen) as any[]).sort((a, b) => (a.hoofdlijn.naam > b.hoofdlijn.naam)? 1: (a.hoofdlijn.naam < b.hoofdlijn.naam)? -1: 0)
      }
    }).sort((a, b) => (a.soort > b.soort)? 1: (a.soort < b.soort)? -1: 0);

    if (this.legal) {
      this.setLegal();
    } else if (this.compact) {
      this.setCompact();
    } else {
      this.setDefault();
    }

    const planLocatie = this.planModel.plan.locatie;
    const onPlanLocatieAndViewName = (a, b) =>
      ((a.annotation != planLocatie) && (b.annotation == planLocatie))? 1:
      ((a.annotation == planLocatie) && (b.annotation != planLocatie))? -1:
      ((a.annotation.viewName == "naamloze locatie") && (b.annotation.viewName != "naamloze locatie"))? 1:
      ((a.annotation.viewName != "naamloze locatie") && (b.annotation.viewName == "naamloze locatie"))? -1:
      (a.annotation.viewName.toLowerCase() > b.annotation.viewName.toLowerCase())? 1: 
      (a.annotation.viewName.toLowerCase() < b.annotation.viewName.toLowerCase())? -1: 0;
    const onViewName = (a, b) => (a.annotation.viewName.toLowerCase() > b.annotation.viewName.toLowerCase())? 1: (a.annotation.viewName.toLowerCase() < b.annotation.viewName.toLowerCase())? -1: 0;
    const onViewActNameOrViewName = (a, b) => ((a.viewActName || a.viewName).toLowerCase() > (b.viewActName || b.viewName).toLowerCase())? 1: ((a.viewActName || a.viewName).toLowerCase() < (b.viewActName || b.viewName).toLowerCase())? -1: 0;
    this.annotations.forEach(c => {
      if (c.leaders.length > 1) {
        if ((c.viewType == null) || (c.viewType == "Werkingsgebieden")) {
          c.leaders.sort(onPlanLocatieAndViewName);
        } else {
          c.leaders.sort(onViewName);
        }
      }
      c.leaders.forEach(o => {
        o.locaties.sort(onViewActNameOrViewName);  // For now don't sort on plan locatie.
        o.activiteitlocatieaanduidingen.sort(onViewActNameOrViewName);
      });
    });
  }

  private setOwn() {
    if (this.component.tekst == null) {
      return;
    }
    const tekst = this.component.tekst;
    if (!(tekst.locaties?.length || tekst.gebiedsaanwijzingen?.length || tekst.activiteitlocatieaanduidingen?.length || tekst.omgevingsnormen?.length || tekst.hoofdlijnen?.length)) {
      return;
    }

    this.subheader = !this.component.type.match(/^DIVISIE/)? tekst.typeJuridischeRegels: this.component.type.toLowerCase();

    (tekst.locaties || []).forEach(locatie => this.addAnnotation(locatie, "own"));
    (tekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addAnnotation(gebiedsaanwijzing, "own"));
    (tekst.activiteitlocatieaanduidingen || []).forEach(activiteitlocatieaanduiding => this.addAnnotation(activiteitlocatieaanduiding, "own"));
    (tekst.omgevingsnormen || []).forEach(omgevingsnorm => this.addAnnotation(omgevingsnorm, "own"));
    (tekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "own"));
  }

  private setInherited() {
    if (this.component.inheritedTeksten == null) {
      return;
    }
    const inheritedTeksten = this.component.inheritedTeksten.filter(tekst => tekst.locaties?.length || tekst.gebiedsaanwijzingen?.length || tekst.hoofdlijnen?.length);
    if (inheritedTeksten.length == 0) {
      return;
    }

    if (this.subheader == null) {
      this.subheader = "van bovenliggende divisie";
    }

    inheritedTeksten.forEach(inheritedTekst => {
      (inheritedTekst.locaties || []).forEach(locatie => this.addAnnotation(locatie, "inherited"));
      (inheritedTekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addAnnotation(gebiedsaanwijzing, "inherited"));
      (inheritedTekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "inherited"));
    });
  }

  private setOffspring() {
    if (this.childComponents == null) {
      return;
    }
    const regelteksten = this.childComponents.filter(component => !component.type.match(/^DIVISIE/) && component.tekst).map(component => component.tekst).filter(tekst => tekst.locaties?.length || tekst.gebiedsaanwijzingen?.length || tekst.activiteitlocatieaanduidingen?.length || tekst.omgevingsnormen?.length || tekst.hoofdlijnen?.length);
    const divisies = this.childComponents.filter(component => (component.type == "DIVISIE") && component.tekst).map(component => component.tekst).filter(tekst => tekst.locaties?.length || tekst.gebiedsaanwijzingen?.length || tekst.hoofdlijnen?.length);
    const divisieteksten = this.childComponents.filter(component => (component.type == "DIVISIETEKST") && component.tekst).map(component => component.tekst).filter(tekst => tekst.locaties?.length || tekst.gebiedsaanwijzingen?.length || tekst.hoofdlijnen?.length);
    const teksten = regelteksten.concat(divisies).concat(divisieteksten);
    if (teksten.length == 0) {
      return;
    }

    if (this.subheader == null) {
      this.subheader = "";
    } else {
      this.subheader += " + ";
    }

    if (regelteksten.length > 0) {
      this.subheader = regelteksten.length + " regeltekst" + ((regelteksten.length > 1)? "en": "");
    } else if ((divisies.length > 0) && (divisieteksten.length > 0)) {
      this.subheader += (divisies.length + divisieteksten.length) + " onderliggende divisies/divisieteksten";
    } else if (divisies.length > 0) {
      this.subheader += divisies.length + " onderliggende divisie" + ((divisies.length > 1)? "s": "");
    } else if (divisieteksten.length > 0) {
      this.subheader += divisieteksten.length + " onderliggende divisietekst" + ((divisieteksten.length > 1)? "en": "");
    }

    teksten.forEach(tekst => {
      (tekst.locaties || []).forEach(locatie => this.addAnnotation(locatie, "offspring"));
      (tekst.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => this.addAnnotation(gebiedsaanwijzing, "offspring"));
      (tekst.activiteitlocatieaanduidingen || []).forEach(activiteitlocatieaanduiding => this.addAnnotation(activiteitlocatieaanduiding, "offspring"));
      (tekst.omgevingsnormen || []).forEach(omgevingsnorm => this.addAnnotation(omgevingsnorm, "offspring"));
      (tekst.hoofdlijnen || []).forEach(hoofdlijn => this.addHoofdlijn(hoofdlijn, "offspring"));
    });
  }

  private addAnnotation(annotation, prop) {
    const identificatie = (
      annotation.locatieType? (annotation.technischId || annotation.identificatie):
      annotation.betreftEenActiviteit? annotation.super.superId:
        (annotation.technischId || (annotation.identificatie + "|" + annotation.geregistreerdMet.versie))
    );
    this.annotationsHash[identificatie] = this.annotationsHash[identificatie] || {annotation: annotation.super || annotation, own: false, inherited: false, offspring: false, locaties: [], activiteitlocatieaanduidingen: []};
    this.annotationsHash[identificatie][prop] = true;
  }

  private addHoofdlijn(hoofdlijn, prop) {
    this.hoofdlijnenHash[hoofdlijn.soort] = this.hoofdlijnenHash[hoofdlijn.soort] || {soort: hoofdlijn.soort, hoofdlijnen: {}};
    this.hoofdlijnenHash[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie] = this.hoofdlijnenHash[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie] || {hoofdlijn: hoofdlijn, own: false, inherited: false, offspring: false};
    this.hoofdlijnenHash[hoofdlijn.soort].hoofdlijnen[hoofdlijn.identificatie][prop] = true;
  }

  private setLegal() {
    const locatieHash = {};
    Object.values(this.annotationsHash).forEach((o: any) => {
      if (o.annotation.locatieType != null) {
        locatieHash[o.annotation.technischId || o.annotation.identificatie] = o.annotation;
      } else if (o.annotation.gebiedsaanwijzingType != null) {
        o.annotation.locaties.forEach(locatie => locatieHash[locatie.technischId || locatie.identificatie] = locatie);
      } else if (o.annotation.betreftEenActiviteit != null) {
        o.annotation.locaties.forEach(locatie => locatieHash[locatie.technischId || locatie.identificatie] = locatie);
      }
    });

    const planLocatie = this.planModel.plan.locatie;
    const includesPlanLocatie = (locatieHash[planLocatie.technischId || planLocatie.identificatie] != null);
    let locaties = (Object.values(locatieHash) as any[]).map(locatie => {
      return {annotation: locatie, own: true, inherited: false, offspring: false, locaties: [], activiteitlocatieaanduidingen: []};
    });

    const numLocaties = locaties.length;
    if ((numLocaties == 0) || (includesPlanLocatie && numLocaties == 1)) {
      this.subheader = "ambtsgebied, geen specifieke locatie";
      locaties = [{annotation: planLocatie, own: true, inherited: false, offspring: false, locaties: [], activiteitlocatieaanduidingen: []}];
    } else if (includesPlanLocatie && numLocaties == 2) {
      this.subheader = "ambtsgebied + specifieke locatie";
    } else if (includesPlanLocatie && numLocaties > 2) {
      this.subheader = "ambtsgebied + " + numLocaties + " specifieke locaties";
    } else if (!includesPlanLocatie && numLocaties == 1) {
      this.subheader = "specifieke locatie";
    } else if (!includesPlanLocatie && numLocaties > 1) {
      this.subheader = numLocaties + " specifieke locaties";
    }

    const omgevingsnormen = Object.values(this.annotationsHash).filter((o: any) => o.annotation.normwaarde);
    if (omgevingsnormen.length == 1) {
      this.subheader += " + omgevingsnorm";
    } else if (omgevingsnormen.length > 1) {
      this.subheader += " + " + omgevingsnormen.length + " omgevingsnormen";
    }

    if (this.display.annotationsVisible != "legal") {  // Specific search name.
      const s = this.display.annotationsVisible.replace(/<[!>]*>/g, "").replace(/\W/g, "").toLowerCase();
      const locatie = (locaties.length == 1)? locaties[0].annotation:
                       locaties.find(o => (o.annotation.noemer || "").replace(/\W/g, "").toLowerCase() == s)?.annotation;
      if ((locatie != null) && !this.isChecked(locatie)) {
        this.imowModel.toggleAnnotationLayer(locatie);
      }
      setTimeout(() => this.display.annotationsVisible = "legal");
    }

    this.annotations = [{viewType: null, leaders: locaties}, {viewType: "Omgevingsnorm", leaders: omgevingsnormen}].filter(c => c.leaders.length);
    if ((this.annotations.length == 2) && (this.annotations[1].leaders.length > 1)) {
      this.annotations[1].viewType = "Omgevingsnormen";
    }
  }

  private setCompact() {
    const combinationHash = {};
    const locaties = (Object.values(this.annotationsHash) as any[]).filter(o => o.annotation.locatieType);
    const gebiedsaanwijzingen = (Object.values(this.annotationsHash) as any[]).filter(o => o.annotation.gebiedsaanwijzingType);
    const activiteitlocatieaanduidingen = (Object.values(this.annotationsHash) as any[]).filter(o => o.annotation.betreftEenActiviteit);
    const omgevingsnormen = (Object.values(this.annotationsHash) as any[]).filter(o => o.annotation.normwaarde);
    gebiedsaanwijzingen.concat(activiteitlocatieaanduidingen).concat(omgevingsnormen).forEach(o => {
      const annotation = o.annotation;
      const llocaties = annotation.normwaarde? annotation.normwaarde.reduce((locaties, normwaarde) => locaties.concat(normwaarde.locaties), []): annotation.locaties;
      //const locatieIdentificaties = llocaties.filter(locatie => !locatie.omvat).concat(llocaties.filter(locatie => locatie.omvat).reduce((locaties, locatie) => locaties.concat(locatie.omvat), [])).map(locatie => locatie.technischId || locatie.identificatie);
      const locatieIdentificaties = llocaties.map(locatie => locatie.technischId || locatie.identificatie);
      const join = locatieIdentificaties.sort().join("|");
      combinationHash[join] = combinationHash[join] || [];
      combinationHash[join].push(o);
    });
    locaties.forEach(o => {
      const locatie = o.annotation;
      //const locatieIdentificaties = (!locatie.omvat? [locatie]: locatie.omvat).map(locatie => locatie.technischId || locatie.identificatie);
      const locatieIdentificaties = [locatie.technischId || locatie.identificatie];
      Object.keys(combinationHash).filter(key => locatieIdentificaties.every(identificatie => key.includes(identificatie))).forEach(key => combinationHash[key].push(o));
    });
    Object.keys(combinationHash).forEach(key => {
      const llocaties = combinationHash[key].filter(o => o.annotation.locatieType).map(o => o.annotation);
      //const locatieIdentificaties = llocaties.filter(locatie => !locatie.omvat).concat(llocaties.filter(locatie => locatie.omvat).reduce((locaties, locatie) => locaties.concat(locatie.omvat), [])).map(locatie => locatie.technischId || locatie.identificatie);
      const locatieIdentificaties = llocaties.map(locatie => locatie.technischId || locatie.identificatie);
      const join = locatieIdentificaties.sort().join("|");
      if (key == join) {
        llocaties.forEach(locatie => locaties.find(o => o.annotation == locatie).consumed = true);
      } else {
        combinationHash[key] = combinationHash[key].filter(o => !o.annotation.locatieType);
      }
    });

    const typeHash = {};
    Object.keys(combinationHash).forEach(key => {
      const c = combinationHash[key];
      let leaders = c.filter(o => o.annotation.gebiedsaanwijzingType || o.annotation.normwaarde);
      leaders.forEach(o => {
        o.locaties = c.filter(o => o.annotation.locatieType).map(o => o.annotation);
        o.activiteitlocatieaanduidingen = c.filter(o => o.annotation.betreftEenActiviteit).map(o => o.annotation);
      });
      if ((leaders.length == 0) && c.filter(o => o.annotation.locatieType).length == 1) {
        leaders = c.filter(o => o.annotation.locatieType);
        leaders.forEach(o => {
          o.activiteitlocatieaanduidingen = c.filter(o => o.annotation.betreftEenActiviteit).map(o => o.annotation);
        });
        leaders.forEach(o => {
          const i = locaties.findIndex(o1 => o1.annotation == o.annotation);
          if (i > -1) {
            delete o.consumed;
            locaties.splice(i, 1);
          }
        });
      }
      if (leaders.length == 0) {
        leaders = c.filter(o => o.annotation.betreftEenActiviteit);
        leaders.forEach(o => {
          o.locaties = c.filter(o => o.annotation.locatieType).map(o => o.annotation);
        });
      }
      leaders.forEach(o => {
        //const type = o.annotation.viewType || "werkingsgebied";
        const type = o.annotation.locatieType? "werkingsgebied": o.annotation.gebiedsaanwijzingType? "gebiedsaanwijzing": o.annotation.betreftEenActiviteit? "activiteitaanduiding": "omgevingsnorm";
        typeHash[type] = typeHash[type] || [];
        typeHash[type].push(o);
      });
    });

    const unconsumedLocaties = locaties.filter(o => !o.consumed);
    this.annotations = ["werkingsgebied", "gebiedsaanwijzing", "activiteitaanduiding", "omgevingsnorm"].filter(type => typeHash[type] || ((type == "werkingsgebied") && unconsumedLocaties.length)).map(type => {
      if (type == "werkingsgebied") {
        typeHash[type] = (typeHash[type] || []).concat(unconsumedLocaties);
      }
      let viewType = type[0].toUpperCase() + type.substring(1);
      if (typeHash[type].length > 1) {
        viewType += "en";
      }
      return {viewType: viewType, leaders: typeHash[type]};
    });
  }

  private setDefault() {
    this.annotations = [
      {viewType: "Werkingsgebied",       leaders: Object.values(this.annotationsHash).filter((o: any) => o.annotation.locatieType)},
      {viewType: "Gebiedsaanwijzing",    leaders: Object.values(this.annotationsHash).filter((o: any) => o.annotation.gebiedsaanwijzingType)},
      {viewType: "Activiteitaanduiding", leaders: Object.values(this.annotationsHash).filter((o: any) => o.annotation.betreftEenActiviteit)},
      {viewType: "Omgevingsnorm",        leaders: Object.values(this.annotationsHash).filter((o: any) => o.annotation.normwaarde)}
    ].filter(c => c.leaders.length);
    this.annotations.forEach(c => {
      if (c.leaders.length > 1) {
        c.viewType += "en";
      }
      c.leaders.forEach(o => o.locaties = (o.annotation.locaties || []).concat());
    });
  }

  isChecked(annotation) {
    return this.imowModel.annotationLayers.some(annotationLayer => annotationLayer.annotation == annotation);
  }

  isDisabled(annotation) {
    if (annotation.locatieType != null) {
      return false;
    }
    if (annotation.normwaarde == null) {
      return !annotation.locaties || !annotation.locaties.length || !annotation.teksten || !annotation.teksten.length;
    }
    return annotation.normwaarde.some(normwaarde => !normwaarde.locaties || !normwaarde.locaties.length) || !annotation.teksten || !annotation.teksten.length;
  }
}
