import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Envelope, GeometryCollection } from "ng-niney";
import { AnnotationLayer } from "src/app/domain/annotation-layer";
import { ImowValueModelService } from "src/app/model/imow-value-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImowModelService {
  markerLocatieIdentificaties = [];
  markerLocaties = [];

  locaties = {};
  gebiedsaanwijzingen = {};
  omgevingsnormen = {};
  regelteksten = {};
  numLoadingL = 0;
  numLoading = 0;
  numLoadingD = 0;

  planIdentificatie = null;
  components = [];  // Flat representation of all documentcomponenten that have an identificatie.
  component = null;  // Selected documentcomponent.
  componentIdentificaties = {
    specific: null,
    filtered: null,
    selected: null,
    emit: (key, val) => {
      if ((this.componentIdentificaties[key] != val) && (key == "selected")) {
        this.setComponent(this.components.find(component => component.identificatie == val));
      }
    }
  };
  numPagesToGo = {regelteksten: 0, divisies: 0};

  loadLocatieForPlanPostActions = {};

  private allAnnotationLayers = [];
  annotationLayers = [];

  constructor(
    private http: HttpClient,
    private imowValueModel: ImowValueModelService
  ) { }

  setMarkerLocatieIdentificaties(markerLocatieIdentificaties) {
    this.markerLocatieIdentificaties = markerLocatieIdentificaties;

    const newIdentificaties = markerLocatieIdentificaties.filter(identificatie => !this.locaties[identificatie]);
    if (newIdentificaties.length == 0) {
      this.setMarkerLocaties();
      return;
    }
    
    this.numLoadingL += newIdentificaties.length;
    newIdentificaties.forEach(identificatie => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + "locaties/" + identificatie;
      this.http.get(url, options).subscribe(
        response => {
          this.processLocatie(response);
          this.numLoadingL--;
          if (this.numLoadingL == 0) {
            this.setMarkerLocaties();
          }
        },
        error => {
          this.numLoadingL--;
        }
      );
    });
  }

  private setMarkerLocaties() {
    this.markerLocaties = this.markerLocatieIdentificaties.map(identificatie => this.locaties[identificatie]);

    this.loadGebiedsaanwijzingenForLocaties();
    this.loadOmgevingsnormenForLocaties();
    //this.loadActiviteitenForLocaties();

    this.loadComponentIdentificaties();
  }

  setPlanIdentificatie(planIdentificatie) {
    this.planIdentificatie = planIdentificatie;

    this.component = null;
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});

    this.loadComponentIdentificaties();
    this.setAnnotationLayers();
  }

  loadRegeltekstForComponent(component) {
    if (component._links.regeltekst == null) {
      return;
    }
    if (component.regeltekst != null) {
      if (component.regeltekst.typeJuridischeRegels != "...") {
        this.loadLocatiesforAnnotation(component.regeltekst, "regeltekst", "D");
        this.loadGebiedsaanwijzingenForRegeltekst(component.regeltekst);
        this.loadOmgevingsnormenForRegeltekst(component.regeltekst);
      }
      return;
    }

    const identificatie = component._links.regeltekst.href.match(/\/([^/]+)$/)[1];
    if (this.regelteksten[identificatie] == null) {
      component.regeltekst = {typeJuridischeRegels: "..."};
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + "regelteksten/" + identificatie;
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          const regeltekst = response;
          this.regelteksten[identificatie] = regeltekst;
          this.loadLocatiesforAnnotation(regeltekst, "regeltekst", "D");
          this.loadGebiedsaanwijzingenForRegeltekst(regeltekst);
          this.loadOmgevingsnormenForRegeltekst(regeltekst);
          component.regeltekst = regeltekst;
          this.numLoadingD--;
        },
        error => {
          delete component.regeltekst;
          this.numLoadingD--;
        }
      );
    } else {
      const regeltekst = this.regelteksten[identificatie];
      this.loadLocatiesforAnnotation(regeltekst, "regeltekst", "D");
      this.loadGebiedsaanwijzingenForRegeltekst(regeltekst);
      this.loadOmgevingsnormenForRegeltekst(regeltekst);
      component.regeltekst = regeltekst;
    }
  }

  private processLocatie(locatie) {
    const identificatie = locatie.identificatie;
    if (this.locaties[identificatie] == null) {
      this.locaties[identificatie] = locatie;
      if (locatie.omvat != null) {
        locatie.omvat.forEach(sublocatie => {
          const identificatie = sublocatie.identificatie;
          if (this.locaties[identificatie] == null) {
            this.locaties[identificatie] = sublocatie;
          }
          if (this.locaties[identificatie].groepen == null) {
            this.locaties[identificatie].groepen = [];
          }
          this.locaties[identificatie].groepen.push(locatie);
        });
      }
    }
  }

  private loadGebiedsaanwijzingenForLocaties() {
    const locaties = this.markerLocaties.filter(locatie => {
      if (locatie.gebiedsaanwijzingen == null) {
        locatie.gebiedsaanwijzingen = [];
        return true;
      }
      locatie.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
        this.loadLocatiesforAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
      });
      return false;
    });

    if (locaties.length == 0) {
      return;
    }

    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "gebiedsaanwijzingen/_zoek?page=0&size=2000";
    const post = {
      zoekParameters: [{
        parameter: "locatie.identificatie",
        zoekWaarden: locatieIdentificaties
      }]
    };
    this.numLoading++;
    this.http.post(url, post, options).subscribe(
      response => {
        Object.keys(response["_embedded"]).forEach(gebiedsaanwijzingType => {
          response["_embedded"][gebiedsaanwijzingType].forEach(gebiedsaanwijzing => {
            const identificatie = gebiedsaanwijzing.identificatie;
            if (this.gebiedsaanwijzingen[identificatie] == null) {
              this.gebiedsaanwijzingen[identificatie] = gebiedsaanwijzing;
              this.decorateGebiedsaanwijzing(gebiedsaanwijzing, gebiedsaanwijzingType);
            }
            gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
            this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
            this.loadLocatiesforAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
          });
        });
        this.numLoading--;
      },
      error => {
        locaties.forEach(locatie => delete locatie.gebiedsaanwijzingen);
        this.numLoading--;
      }
    );
  }

  private loadOmgevingsnormenForLocaties() {
    const locaties = this.markerLocaties.filter(locatie => {
      if (locatie.normwaarden == null) {
        locatie.normwaarden = [];
        return true;
      }
      locatie.normwaarden.forEach(normwaarde => {
        this.loadRegeltekstenForAnnotation(normwaarde.omgevingsnorm, "omgevingsnorm", "");
        this.loadLocatiesforAnnotation(normwaarde, "normwaarde", "");
      });
      return false;
    });

    if (locaties.length == 0) {
      return;
    }

    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "omgevingsnormen/_zoek?page=0&size=2000";
    const post = {
      zoekParameters: [{
        parameter: "locatie.identificatie",
        zoekWaarden: locatieIdentificaties
      }]
    };
    this.numLoading++;
    this.http.post(url, post, options).subscribe(
      response => {
        response["_embedded"].omgevingsnormen.forEach(omgevingsnorm => {
          const identificatie = omgevingsnorm.identificatie;
          if (this.omgevingsnormen[identificatie] == null) {
            this.omgevingsnormen[identificatie] = omgevingsnorm;
            this.decorateOmgevingsnorm(omgevingsnorm);
          }
          omgevingsnorm = this.omgevingsnormen[identificatie];
          this.loadRegeltekstenForAnnotation(omgevingsnorm, "omgevingsnorm", "");
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesforAnnotation(normwaarde, "normwaarde", "");
          });
        });
        this.numLoading--;
      },
      error => {
        locaties.forEach(locatie => delete locatie.normwaarden);
        this.numLoading--;
      }
    );
  }

  private loadRegeltekstenForAnnotation(annotation, annotationType, direction) {
    if (annotation.regelteksten != null) {
      return;
    }
    
    annotation.regelteksten = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "regelteksten?" + annotationType + "Identificatie=" + annotation.identificatie;
    this["numLoading" + direction]++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].regelteksten.forEach(regeltekst => {
          const identificatie = regeltekst.identificatie;
          if (this.regelteksten[identificatie] == null) {
            this.regelteksten[identificatie] = regeltekst;
          }
          annotation.regelteksten.push(this.regelteksten[identificatie]);
        });
        this["numLoading" + direction]--;
      },
      error => {
        delete annotation.regelteksten;
        this["numLoading" + direction]--;
      }
    );
  }

  private loadGebiedsaanwijzingenForRegeltekst(regeltekst) {
    if (regeltekst._links.beschrijftGebiedsaanwijzingen == null) {
      return;
    }
    if (regeltekst.gebiedsaanwijzingen != null) {
      regeltekst.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
        this.loadLocatiesforAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
      });
      return;
    }

    regeltekst.gebiedsaanwijzingen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "gebiedsaanwijzingen?regeltekstIdentificatie=" + regeltekst.identificatie;
    this.numLoadingD++;
    this.http.get(url, options).subscribe(
      response => {
        Object.keys(response["_embedded"]).forEach(gebiedsaanwijzingType => {
          response["_embedded"][gebiedsaanwijzingType].forEach(gebiedsaanwijzing => {
            const identificatie = gebiedsaanwijzing.identificatie;
            if (this.gebiedsaanwijzingen[identificatie] == null) {
              this.gebiedsaanwijzingen[identificatie] = gebiedsaanwijzing;
              this.decorateGebiedsaanwijzing(gebiedsaanwijzing, gebiedsaanwijzingType);
            }
            gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
            this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
            this.loadLocatiesforAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
            regeltekst.gebiedsaanwijzingen.push(gebiedsaanwijzing);
          });
        });
        this.numLoadingD--;
      },
      error => {
        delete regeltekst.gebiedsaanwijzingen;
        this.numLoadingD--;
      }
    );
  }

  private decorateGebiedsaanwijzing(gebiedsaanwijzing, gebiedsaanwijzingType) {
    gebiedsaanwijzing.viewType = gebiedsaanwijzing.label.toLowerCase().replace("gebiedsaanwijzingen", "").replace("functies", "functie");
    gebiedsaanwijzing.viewName = gebiedsaanwijzing.naam || gebiedsaanwijzing.groep.waarde;
    if (gebiedsaanwijzing.viewType == "functie") {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^functie[^\w\-][ '"]*|[ '"]+$/g, "");
    }
    if (gebiedsaanwijzing.viewName.toLowerCase() == gebiedsaanwijzing.groep.waarde) {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde;
    } else {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde + " - " + gebiedsaanwijzing.viewName;
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^(\w+) - \1[^\w]{2,}/, "$1 - ");
    }
  }

  private loadOmgevingsnormenForRegeltekst(regeltekst) {
    if (regeltekst._links.beschrijftOmgevingsnormen == null) {
      return;
    }
    if (regeltekst.omgevingsnormen != null) {
      regeltekst.omgevingsnormen.forEach(omgevingsnorm => {
        omgevingsnorm.normwaarde.forEach(normwaarde => {
          this.loadRegeltekstenForAnnotation(normwaarde.omgevingsnorm, "omgevingsnorm", "D");
          this.loadLocatiesforAnnotation(normwaarde, "normwaarde", "D");
        });
      });
      return;
    }

    regeltekst.omgevingsnormen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "omgevingsnormen?regeltekstIdentificatie=" + regeltekst.identificatie;
    this.numLoadingD++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].omgevingsnormen.forEach(omgevingsnorm => {
          const identificatie = omgevingsnorm.identificatie;
          if (this.omgevingsnormen[identificatie] == null) {
            this.omgevingsnormen[identificatie] = omgevingsnorm;
            this.decorateOmgevingsnorm(omgevingsnorm);
          }
          omgevingsnorm = this.omgevingsnormen[identificatie];
          this.loadRegeltekstenForAnnotation(omgevingsnorm, "omgevingsnorm", "D");
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesforAnnotation(normwaarde, "normwaarde", "D");
          });
          regeltekst.omgevingsnormen.push(omgevingsnorm);
        });
        this.numLoadingD--;
      },
      error => {
        delete regeltekst.omgevingsnormen;
        this.numLoadingD--;
      }
    );
  }

  private decorateOmgevingsnorm(omgevingsnorm) {
    omgevingsnorm.viewName = omgevingsnorm.naam || omgevingsnorm.type.waarde;

    if (omgevingsnorm.normwaarde[0].kwantitatieveWaarde != null) {
      omgevingsnorm.normwaarde.sort((a, b) => (a.kwantitatieveWaarde > b.kwantitatieveWaarde)? 1: (a.kwantitatieveWaarde < b.kwantitatieveWaarde)? -1: 0);
    } else {
      omgevingsnorm.normwaarde.sort((a, b) => (a.kwalitatieveWaarde > b.kwalitatieveWaarde)? 1: (a.kwalitatieveWaarde < b.kwalitatieveWaarde)? -1: 0);
    }
    if (omgevingsnorm.eenheid != null) {
      omgevingsnorm.viewUnit = omgevingsnorm.eenheid[0].waarde.replace("aantal", "").replace("vierkante meter", "m²").replace("meter", "m");
    } else {
      omgevingsnorm.viewUnit = "";
    }

    omgevingsnorm.normwaarde.forEach(normwaarde => {
      normwaarde.omgevingsnorm = omgevingsnorm;

      normwaarde.viewName = omgevingsnorm.viewName;
      normwaarde.viewType = ((omgevingsnorm.groep.waarde != "overig")? omgevingsnorm.groep.waarde + ", ": "") + omgevingsnorm.type.waarde;
      normwaarde.viewValue = (normwaarde.kwalitatieveWaarde || normwaarde.kwantitatieveWaarde) + (omgevingsnorm.viewUnit? " ": "") + omgevingsnorm.viewUnit;
    });
  }

  loadLocatieForPlan(plan) {
    if (plan.locatie != null) {
      if (plan.viewEnvelope != null) {
        (Object.values(this.loadLocatieForPlanPostActions) as Function[]).forEach(action => action());
        this.loadLocatieForPlanPostActions = {};
      }
      return;
    }

    const identificatie = plan.locatieIdentificatie;
    if ((this.locaties[identificatie] == null) || (this.locaties[identificatie].viewEnvelope == null)) {
      plan.locatie = {identificatie: "nothing"};
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + "locaties/" + identificatie;
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          const bbLocatie: any = response;
          this.processLocatie(bbLocatie);
          const locatie = this.locaties[identificatie];
          if (bbLocatie.omvat == null) {
            const bb = bbLocatie.boundingBox;
            locatie.viewEnvelope = new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
          } else {
            locatie.viewEnvelope = new GeometryCollection(bbLocatie.omvat.map(bbSublocatie => {
              const bb = bbSublocatie.boundingBox;
              return new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
            })).getEnvelope();
          }
          plan.viewEnvelope = locatie.viewEnvelope;
          plan.locatie = locatie;
          (Object.values(this.loadLocatieForPlanPostActions) as Function[]).forEach(action => action());
          this.loadLocatieForPlanPostActions = {};
          this.numLoadingD--;
        },
        error => {
          delete plan.locatie;
          this.numLoadingD--;
        }
      );
    } else {
      const locatie = this.locaties[identificatie];
      plan.viewEnvelope = locatie.viewEnvelope;
      plan.locatie = locatie;
      (Object.values(this.loadLocatieForPlanPostActions) as Function[]).forEach(action => action());
      this.loadLocatieForPlanPostActions = {};
    }
  }

  private loadLocatiesforAnnotation(annotation, annotationType, direction) {
    if (annotation.locaties != null) {
      if (direction == "") {
        annotation.locaties.forEach(locatie => {
          this.linkLocatieToAnnotation(locatie, annotation, annotationType);
        });
      }
      return;
    }

    annotation.locaties = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "locaties?" + annotationType + "Identificatie=" + annotation.identificatie;
    this["numLoading" + direction]++;
    this.http.get(url, options).subscribe(
      response => {
        const locaties = response["_embedded"].locaties;
        locaties.forEach(locatie => {
          this.processLocatie(locatie);
          locatie = this.locaties[locatie.identificatie];
          if (direction == "") {
            this.linkLocatieToAnnotation(locatie, annotation, annotationType);
          }
          annotation.locaties.push(locatie);
        });
        this["numLoading" + direction]--;
      },
      error => {
        delete annotation.locaties;
        this["numLoading" + direction]--;
      }
    );
  }

  private linkLocatieToAnnotation(locatie, annotation, annotationType) {
    const locatieAnnotations = (annotationType == "gebiedsaanwijzing")? locatie.gebiedsaanwijzingen: locatie.normwaarden;
    if ((locatieAnnotations != null) && !locatieAnnotations.includes(annotation)) {
      locatieAnnotations.push(annotation);
    }
  }

  private loadComponentIdentificaties() {
    if ((this.markerLocatieIdentificaties.length == 0) || (this.planIdentificatie == null)) {
      if (this.markerLocatieIdentificaties.length == 0) {
        this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null});
      }
      if (this.planIdentificatie == null) {
        this.component = null;
        this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});
      }
      return;
    }

    const loadPage = (type, i) => {
      const locatieIdentificaties = this.markerLocatieIdentificaties;
      const planIdentificatie = this.planIdentificatie;
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + type + "/_zoek?page=" + i + "&size=50&sort=volgordeNummer,asc";
      const post = {
        zoekParameters: [{
          parameter: "locatie.identificatie",
          zoekWaarden: locatieIdentificaties
        }, {
          parameter: "documentIdentificatie",
          zoekWaarden: [planIdentificatie]
        }]
      };
      this.http.post(url, post, options).subscribe(
        response => {
          const teksten = response["_embedded"][type];
          const numPages = response["page"].totalPages;
          if ((teksten.length > 0) && (locatieIdentificaties == this.markerLocatieIdentificaties) && (planIdentificatie == this.planIdentificatie)) {
            this.setComponentIdentificaties("specific", teksten, i > 0);
            this.numPagesToGo[type] = numPages - 1 - i;
            if (this.numPagesToGo[type] > 0) {
              loadPage(type, i + 1);
            }
          } else {
            this.numPagesToGo[type] = 0;
          }
        },
        error => {
          this.numPagesToGo[type] = 0;
        }
      );
    };
    this.numPagesToGo["regelteksten"] = 7;
    loadPage("regelteksten", 0);
    this.numPagesToGo["divisies"] = 9;
    loadPage("divisies", 0);
  }

  setComponentIdentificaties(type, teksten, cumulative, label = null) {
    const componentIdentificaties = {};

    componentIdentificaties[teksten[0].documentIdentificatie + "__body"] = "trail";
    teksten.forEach(
      tekst => {
        const pad = tekst.documentKruimelpad;
        for (let i = 0; i < pad.length; i++) {
          componentIdentificaties[pad[i].identificatie] = (i < pad.length - 1)? "trail": "target";
        }
      }
    );

    if (cumulative) {
      Object.assign(componentIdentificaties, this.componentIdentificaties[type]);
    }
    if (label != null) {
      Object.assign(componentIdentificaties, {label: label});
    }

    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {filtered: null}, {[type]: componentIdentificaties});
    
    if ((this.componentIdentificaties.selected != null) && (componentIdentificaties[this.componentIdentificaties.selected] != "target")) {
      this.setComponent(this.components.find(component => componentIdentificaties[component.identificatie] == "target"));
    }
  }

  clearFilteredComponentIdentificaties() {
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {filtered: null});
  }

  selectNextComponentIdentificatie(type) {
    let i = this.components.findIndex(component => component.identificatie == this.componentIdentificaties.selected);
    do {
      if (++i >= this.components.length) {
        i = 0;
      }
    } while (this.componentIdentificaties[type][this.components[i].identificatie] != "target");

    this.setComponent(this.components[i]);
  }

  private setComponent(component) {
    this.component = component;
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {selected: component.identificatie});
  }

  toggleAnnotationLayer(annotation, type) {
    const i = this.allAnnotationLayers.findIndex(annotationLayer => annotationLayer.annotation == annotation);
    if (i > -1) {
      this.allAnnotationLayers.splice(i, 1);
    } else {
      this.allAnnotationLayers.push(new AnnotationLayer(this.imowValueModel, annotation, type));
    }

    this.setAnnotationLayers();
  }

  moveAnnotationLayer(annotationLayer, position) {
    const i = this.allAnnotationLayers.indexOf(annotationLayer);
    const j = this.allAnnotationLayers.indexOf(this.annotationLayers[this.annotationLayers.indexOf(annotationLayer) + position]);
    this.allAnnotationLayers.splice(i, 1);
    this.allAnnotationLayers.splice(j, 0, annotationLayer);

    this.setAnnotationLayers();
  }

  removeAnnotationLayer(annotationLayer) {
    const i = this.allAnnotationLayers.indexOf(annotationLayer);
    this.allAnnotationLayers.splice(i, 1);

    const j = this.annotationLayers.indexOf(annotationLayer);
    this.annotationLayers.splice(j, 1);
  }

  removeAnnotationLayers() {
    this.annotationLayers.forEach(annotationLayer => {
      const i = this.allAnnotationLayers.indexOf(annotationLayer);
      this.allAnnotationLayers.splice(i, 1);
    });

    this.annotationLayers.length = 0;
  }

  private setAnnotationLayers() {
    this.annotationLayers.length = 0;
    this.allAnnotationLayers.filter(annotationLayer => {
      if (annotationLayer.annotation.locatieType != null) {
        return (this.planIdentificatie != null);
      }
      return annotationLayer.annotation.regelteksten.some(regeltekst => regeltekst.documentIdentificatie == this.planIdentificatie);
    }).forEach(annotationLayer => {
      this.annotationLayers.push(annotationLayer);
    });
  }
}
