import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImowModelService {
  markerLocaties = [];
  markerLoading = false;

  locaties = {};
  gebiedsaanwijzingen = {};
  omgevingsnormen = {};
  regelteksten = {};
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

  cssFunction = null;

  constructor(private http: HttpClient) { }

  setMarkerLocaties(markerLocaties) {
    this.markerLocaties = markerLocaties;

    this.processLocaties(markerLocaties);

    const locaties = markerLocaties.map(markerLocatie => this.locaties[markerLocatie.identificatie]);
    this.loadGebiedsaanwijzingenForLocaties(locaties);
    this.loadOmgevingsnormenForLocaties(locaties);
    //this.loadActiviteitenForLocaties(locaties);

    this.loadComponentIdentificaties();
  }

  setPlanIdentificatie(planIdentificatie) {
    this.planIdentificatie = planIdentificatie;

    this.loadComponentIdentificaties();
  }

  loadRegeltekstForComponent(component) {
    if (component._links.regeltekst == null) {
      return;
    }
    if (component.regeltekst != null) {
      if (component.regeltekst.typeJuridischeRegels != "...") {
        this.loadLocatiesforAnnotation(component.regeltekst, "regelteksten", "D");
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
          this.loadLocatiesforAnnotation(regeltekst, "regelteksten", "D");
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
      this.loadLocatiesforAnnotation(regeltekst, "regelteksten", "D");
      this.loadGebiedsaanwijzingenForRegeltekst(regeltekst);
      this.loadOmgevingsnormenForRegeltekst(regeltekst);
      component.regeltekst = regeltekst;
    }
  }

  private processLocaties(locaties) {
    locaties.forEach(locatie => {
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
    });
  }

  private loadGebiedsaanwijzingenForLocaties(locaties) {
    locaties = locaties.filter(locatie => {
      if (locatie.gebiedsaanwijzingen == null) {
        locatie.gebiedsaanwijzingen = [];
        return true;
      }
      locatie.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, gebiedsaanwijzing.lennie);
        this.loadLocatiesforAnnotation(gebiedsaanwijzing, gebiedsaanwijzing.lennie, "");
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
            this.loadRegeltekstenForAnnotation(gebiedsaanwijzing, gebiedsaanwijzingType);
            this.loadLocatiesforAnnotation(gebiedsaanwijzing, gebiedsaanwijzingType, "");
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

  private loadOmgevingsnormenForLocaties(locaties) {
    locaties = locaties.filter(locatie => {
      if (locatie.normwaarden == null) {
        locatie.normwaarden = [];
        return true;
      }
      locatie.normwaarden.forEach(normwaarde => {
        this.loadRegeltekstenForAnnotation(normwaarde.omgevingsnorm, "omgevingsnormen");
        this.loadLocatiesforAnnotation(normwaarde, "omgevingsnormen/" + normwaarde.omgevingsnorm.identificatie + "/normwaarden", "");
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
            this.decorateNormwaarden(omgevingsnorm.normwaarde, omgevingsnorm);
          }
          omgevingsnorm = this.omgevingsnormen[identificatie];
          this.loadRegeltekstenForAnnotation(omgevingsnorm, "omgevingsnormen");
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesforAnnotation(normwaarde, "omgevingsnormen/" + identificatie + "/normwaarden", "");
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

  private loadRegeltekstenForAnnotation(annotation, annotationType) {
    if (annotation.regelteksten != null) {
      return;
    }
    
    annotation.regelteksten = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + annotationType + "/" + annotation.identificatie + "/regelteksten";
    this.numLoading++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].regelteksten.forEach(regeltekst => {
          const identificatie = regeltekst.identificatie;
          if (this.regelteksten[identificatie] == null) {
            this.regelteksten[identificatie] = regeltekst;
          }
          annotation.regelteksten.push(this.regelteksten[identificatie]);
        });
        this.numLoading--;
      },
      error => {
        delete annotation.regelteksten;
        this.numLoading--;
      }
    );
  }

  private loadGebiedsaanwijzingenForRegeltekst(regeltekst) {
    if (regeltekst._links.beschrijftGebiedsaanwijzingen == null) {
      return;
    }
    if (regeltekst.gebiedsaanwijzingen != null) {
      regeltekst.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadLocatiesforAnnotation(gebiedsaanwijzing, gebiedsaanwijzing.lennie, "D");
      });
      return;
    }

    regeltekst.gebiedsaanwijzingen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "regelteksten/" + regeltekst.identificatie + "/gebiedsaanwijzingen";
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
            this.loadLocatiesforAnnotation(gebiedsaanwijzing, gebiedsaanwijzingType, "D");
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
    gebiedsaanwijzing.lennie = gebiedsaanwijzingType;

    gebiedsaanwijzing.viewType = gebiedsaanwijzing.label.toLowerCase().replace("gebiedsaanwijzingen", "").replace("functies", "functie");
    gebiedsaanwijzing.viewName = gebiedsaanwijzing.naam || gebiedsaanwijzing.groep.waarde;
    if (gebiedsaanwijzing.viewType == "functie") {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^functie /, "");
    }
    gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^[ '"]|[ '"]$/g, "");
    if (gebiedsaanwijzing.viewName.toLowerCase() == gebiedsaanwijzing.groep.waarde) {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde;
    } else {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde + " - " + gebiedsaanwijzing.viewName;
    }
  }

  private loadOmgevingsnormenForRegeltekst(regeltekst) {
    if (regeltekst._links.beschrijftOmgevingsnormen == null) {
      return;
    }
    if (regeltekst.omgevingsnormen != null) {
      regeltekst.omgevingsnormen.forEach(omgevingsnorm => {
        omgevingsnorm.normwaarde.forEach(normwaarde => {
          this.loadLocatiesforAnnotation(normwaarde, "omgevingsnormen/" + omgevingsnorm.identificatie + "/normwaarden", "D");
        });
      });
      return;
    }

    regeltekst.omgevingsnormen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "regelteksten/" + regeltekst.identificatie + "/omgevingsnormen";
    this.numLoadingD++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].omgevingsnormen.forEach(omgevingsnorm => {
          const identificatie = omgevingsnorm.identificatie;
          if (this.omgevingsnormen[identificatie] == null) {
            this.omgevingsnormen[identificatie] = omgevingsnorm;
            this.decorateNormwaarden(omgevingsnorm.normwaarde, omgevingsnorm);
          }
          omgevingsnorm = this.omgevingsnormen[identificatie];
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesforAnnotation(normwaarde, "omgevingsnormen/" + identificatie + "/normwaarden", "D");
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

  private decorateNormwaarden(normwaarden, omgevingsnorm) {
    normwaarden.sort((a, b) => (a.kwantitatieveWaarde > b.kwantitatieveWaarde)? 1: (a.kwantitatieveWaarde < b.kwantitatieveWaarde)? -1: 0);
    normwaarden.forEach(normwaarde => {
      normwaarde.omgevingsnorm = omgevingsnorm;

      normwaarde.viewName = omgevingsnorm.naam || omgevingsnorm.type.waarde;
      normwaarde.viewName = normwaarde.viewName.replace(/^[ '"]|[ '"]$/g, "");
      normwaarde.viewType = ((omgevingsnorm.groep.waarde != "overig")? omgevingsnorm.groep.waarde + ", ": "") + omgevingsnorm.type.waarde;
      normwaarde.viewValue = (normwaarde.kwalitatieveWaarde || normwaarde.kwantitatieveWaarde) + (omgevingsnorm.eenheid? " " + omgevingsnorm.eenheid[0].waarde: "");
    });
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
    const url = environment.dsoUrl + annotationType + "/" + annotation.identificatie + "/locaties";
    this["numLoading" + direction]++;
    this.http.get(url, options).subscribe(
      response => {
        const locaties = response["_embedded"].locaties;
        this.processLocaties(locaties);
        locaties.forEach(locatie => {
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
    const locatieAnnotations = !annotationType.match(/^omgevingsnorm/)? locatie.gebiedsaanwijzingen: locatie.normwaarden;
    if ((locatieAnnotations != null) && !locatieAnnotations.includes(annotation)) {
      locatieAnnotations.push(annotation);
    }
  }

  private loadComponentIdentificaties() {
    if ((this.markerLocaties.length == 0) || (this.planIdentificatie == null)) {
      this.component = null;
      this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});
      return;
    }

    const loadPage = (type, i) => {
      const locatieIdentificaties = this.markerLocaties.map(locatie => locatie.identificatie);
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + type + "/_zoek?page=" + i + "&size=50&sort=volgordeNummer,asc";
      const post = {
        zoekParameters: [{
          parameter: "locatie.identificatie",
          zoekWaarden: locatieIdentificaties
        }, {
          parameter: "documentIdentificatie",
          zoekWaarden: [this.planIdentificatie]
        }]
      };
      this.http.post(url, post, options).subscribe(
        response => {
          const teksten = response["_embedded"][type];
          const numPages = response["page"].totalPages;
          if (teksten.length > 0) {
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
    
    if (componentIdentificaties[this.componentIdentificaties.selected] != "target") {
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
    if (component._links.regeltekst == null) {
      return;
    }

    this.component = component;
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {selected: component.identificatie});
  }
}
