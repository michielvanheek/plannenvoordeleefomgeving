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
  activiteitlocatieaanduidingen = {};
  omgevingsnormen = {};
  hoofdlijnen = {};
  teksten = {};  // Regelteksten, divisieteksten, divisies.
  numLoadingL = 0;
  numLoading = 0;
  numLoadingD = 0;

  plan = null;
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
          const i = this.markerLocatieIdentificaties.indexOf(identificatie);
          if (i > -1) {
            this.markerLocatieIdentificaties.splice(i, 1);
          }
          this.numLoadingL--;
          if (this.numLoadingL == 0) {
            this.setMarkerLocaties();
          }
        }
      );
    });
  }

  private setMarkerLocaties() {
    this.markerLocaties = this.markerLocatieIdentificaties.map(identificatie => this.locaties[identificatie]);

    this.loadGebiedsaanwijzingenForLocaties();
    this.loadActiviteitlocatieaanduidingenForLocaties();
    this.loadOmgevingsnormenForLocaties();

    this.loadComponentIdentificaties();
  }

  setPlan(plan) {
    this.plan = plan;

    this.component = null;
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});

    this.loadComponentIdentificaties();
    this.setAnnotationLayers();
  }

  loadTekstForComponent(component) {
    const tekstType = ["regeltekst", "divisietekst", "divisie", "ontwerpRegeltekst", "ontwerpDivisietekst", "ontwerpDivisie"].find(tekstType => component._links[tekstType.toLowerCase()]);
    if (tekstType == null) {
      return;
    }
    const tekstenType = (tekstType.match(/tekst$/)? (tekstType + "en/"): (tekstType + "s/")).toLowerCase();
    if (component.tekst != null) {
      if (component.tekst.typeJuridischeRegels != "...") {
        this.loadLocatiesForAnnotation(component.tekst, tekstType, "D");
        this.loadGebiedsaanwijzingenForTekst(component.tekst, tekstType);
        if (tekstType.match(/regeltekst$/i)) {
          this.loadActiviteitlocatieaanduidingenForTekst(component.tekst, "D");
          this.loadOmgevingsnormenForTekst(component.tekst);
        } else {
          this.loadHoofdlijnenForTekst(tekstenType, component.tekst);
        }
      }
      return;
    }

    const identificatie = component._links[tekstType.toLowerCase()].href.match(/\/([^/]+)$/)[1];
    if (this.teksten[identificatie] == null) {
      component.tekst = {typeJuridischeRegels: "..."};
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + tekstenType + identificatie;
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          const tekst = response;
          this.teksten[identificatie] = tekst;
          this.loadLocatiesForAnnotation(tekst, tekstType, "D");
          this.loadGebiedsaanwijzingenForTekst(tekst, tekstType);
          if (tekstType.match(/regeltekst$/i)) {
            this.loadActiviteitlocatieaanduidingenForTekst(tekst, "D");
            this.loadOmgevingsnormenForTekst(tekst);
          } else {
            this.loadHoofdlijnenForTekst(tekstenType, tekst);
          }
          component.tekst = tekst;
          this.numLoadingD--;
        },
        error => {
          delete component.tekst;
          this.numLoadingD--;
        }
      );
    } else {
      const tekst = this.teksten[identificatie];
      this.loadLocatiesForAnnotation(tekst, tekstType, "D");
      this.loadGebiedsaanwijzingenForTekst(tekst, tekstType);
      if (tekstType.match(/regeltekst$/i)) {
        this.loadActiviteitlocatieaanduidingenForTekst(tekst, "D");
        this.loadOmgevingsnormenForTekst(tekst);
      } else {
        this.loadHoofdlijnenForTekst(tekstenType, tekst);
      }
      component.tekst = tekst;
    }
  }

  loadInheritedTekstenForComponent(component) {
    const tekstType = ["divisie", "ontwerpDivisie"].find(tekstType => component._links["inherited" + tekstType[0].toUpperCase() + tekstType.substring(1) + "s"]);
    if (tekstType == null) {
      return;
    }
    const tekstenType = (tekstType + "s/").toLowerCase();
    if (component.inheritedTeksten != null) {
      component.inheritedTeksten.forEach(inheritedTekst => {
        this.loadLocatiesForAnnotation(inheritedTekst, tekstType, "D");
        this.loadGebiedsaanwijzingenForTekst(inheritedTekst, tekstType);
        this.loadHoofdlijnenForTekst(tekstenType, inheritedTekst);
      });
      return;
    }

    component.inheritedTeksten = [];
    component._links["inherited" + tekstType[0].toUpperCase() + tekstType.substring(1) + "s"].map(link => link.href.match(/\/([^/]+)$/)[1]).forEach(identificatie => {
      if (this.teksten[identificatie] == null) {
        const options = environment.dsoOptions;
        const url = environment.dsoUrl + tekstenType + identificatie;
        this.numLoadingD++;
        this.http.get(url, options).subscribe(
          response => {
            const inheritedTekst = response;
            this.teksten[identificatie] = inheritedTekst;
            if (component.inheritedTeksten != null) {
              this.loadLocatiesForAnnotation(inheritedTekst, tekstType, "D");
              this.loadGebiedsaanwijzingenForTekst(inheritedTekst, tekstType);
              this.loadHoofdlijnenForTekst(tekstenType, inheritedTekst);
              component.inheritedTeksten.push(inheritedTekst);
            }
            this.numLoadingD--;
          },
          error => {
            delete component.inheritedTeksten;
            this.numLoadingD--;
          }
        );
      } else {
        const inheritedTekst = this.teksten[identificatie];
        this.loadLocatiesForAnnotation(inheritedTekst, tekstType, "D");
        this.loadGebiedsaanwijzingenForTekst(inheritedTekst, tekstType);
        this.loadHoofdlijnenForTekst(tekstenType, inheritedTekst);
        component.inheritedTeksten.push(inheritedTekst);
      }
    });
  }

  private processLocatie(locatie) {
    const identificatie = locatie.technischId || locatie.identificatie;
    if (this.locaties[identificatie] == null) {
      this.locaties[identificatie] = locatie;
      if (locatie.omvat != null) {
        locatie.omvat.forEach(sublocatie => {
          const identificatie = sublocatie.technischId || sublocatie.identificatie;
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
        this.loadTekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
        this.loadLocatiesForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
      });
      return false;
    });

    if (locaties.length == 0) {
      return;
    }

    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "gebiedsaanwijzingen/_zoek?page=0&size=200";
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
              this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
            }
            gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
            this.loadTekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
            this.loadLocatiesForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "");
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

  private loadActiviteitlocatieaanduidingenForLocaties() {
    const locaties = this.markerLocaties.filter(locatie => {
      if (!locatie.identificatie.match(/^nl\.imow-gm0363/) || locatie.identificatie.match(/ambtsgebied/i) || locatie.identificatie.match(/a9a63987131f4a10874aa974af0b03d4/)) {
        return false;
      }
      if (locatie.activiteitlocatieaanduidingen == null) {
        locatie.activiteitlocatieaanduidingen = [];
        return true;
      }
      locatie.activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
      });
      return false;
    });

    if (locaties.length == 0) {
      return;
    }

    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "activiteitlocatieaanduidingen/_zoek?page=0&size=200";
    const post = {
      zoekParameters: [{
        parameter: "locatie.identificatie",
        zoekWaarden: locatieIdentificaties
      }]
    };
    this.numLoading++;
    this.http.post(url, post, options).subscribe(
      response => {
        response["_embedded"].activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
          activiteitlocatieaanduiding.locaties = [];
          const options = environment.dsoOptions;
          const url = environment.dsoUrl + "locaties?activiteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&activiteitIdentificatie" + activiteitlocatieaanduiding.betreftEenActiviteit.identificatie;
          this.numLoading++;
          this.http.get(url, options).subscribe(
            response => {
              const locaties = response["_embedded"].locaties;
              if (locaties.every(locatie => !locatieIdentificaties.includes(locatie.identificatie))) {
                this.numLoadingD--;
                return;
              }

              locaties.forEach(locatie => {
                this.processLocatie(locatie);
                locatie = this.locaties[locatie.identificatie];
                activiteitlocatieaanduiding.locaties.push(locatie);
              });

              const identificatie = activiteitlocatieaanduiding.identificatie = [activiteitlocatieaanduiding.betreftEenActiviteit.identificatie, activiteitlocatieaanduiding.activiteitregelkwalificatie.waarde].concat(activiteitlocatieaanduiding.locaties.map(locatie => locatie.identificatie)).join("|");
              if (this.activiteitlocatieaanduidingen[identificatie] == null) {
                this.activiteitlocatieaanduidingen[identificatie] = activiteitlocatieaanduiding;
                this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
              }
              activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[identificatie];
              this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");

              locaties.forEach(locatie => {
                locatie = this.locaties[locatie.identificatie];
                this.linkLocatieToAnnotation(locatie, activiteitlocatieaanduiding, "activiteitlocatieaanduiding");
              });
              
              this.numLoading--;
            },
            error => {
              locaties.forEach(locatie => delete locatie.activiteitlocatieaanduidingen);
              this.numLoading--;
            }
          );
        });
        this.numLoading--;
      },
      error => {
        locaties.forEach(locatie => delete locatie.activiteitlocatieaanduidingen);
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
        this.loadTekstenForAnnotation(normwaarde.omgevingsnorm, "omgevingsnorm", "");
        this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "");
      });
      return false;
    });

    if (locaties.length == 0) {
      return;
    }

    const locatieIdentificaties = locaties.map(locatie => locatie.identificatie);
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "omgevingsnormen/_zoek?page=0&size=200";
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
          this.loadTekstenForAnnotation(omgevingsnorm, "omgevingsnorm", "");
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "");
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

  private loadTekstenForAnnotation(annotation, annotationType, direction) {
    if (annotation.teksten != null) {
      return;
    }
    
    annotation.teksten = [];
    const tekstenTypes = (annotationType == "gebiedsaanwijzing")? ["regelteksten", "divisieteksten", "divisies"]: ["regelteksten"];
    tekstenTypes.forEach(tekstenType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + tekstenType + "?" + annotationType + "Identificatie=" + annotation.identificatie;
      this["numLoading" + direction]++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.teksten == null) {
            this["numLoading" + direction]--;
            return;
          }

          response["_embedded"][tekstenType].forEach(tekst => {
            const identificatie = tekst.identificatie;
            if (this.teksten[identificatie] == null) {
              this.teksten[identificatie] = tekst;
            }
            tekst = this.teksten[identificatie];
            annotation.teksten.push(tekst);
          });
          this["numLoading" + direction]--;
        },
        error => {
          delete annotation.teksten;
          this["numLoading" + direction]--;
        }
      );
    });
  }

  private loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, direction) {
    if (activiteitlocatieaanduiding.potentialTeksten != null) {
      activiteitlocatieaanduiding.potentialTeksten.forEach(tekst => {
        this.loadActiviteitlocatieaanduidingenForTekst(tekst, direction);
      });
      return;
    }

    activiteitlocatieaanduiding.potentialTeksten = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "regelteksten?activiteitIdentificatie=" + activiteitlocatieaanduiding.betreftEenActiviteit.identificatie;
    this["numLoading" + direction]++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].regelteksten.forEach(tekst => {
          const identificatie = tekst.identificatie;
          if (this.teksten[identificatie] == null) {
            this.teksten[identificatie] = tekst;
          }
          tekst = this.teksten[identificatie];
          this.loadActiviteitlocatieaanduidingenForTekst(tekst, direction);
          activiteitlocatieaanduiding.potentialTeksten.push(tekst);
        });
        this["numLoading" + direction]--;
      },
      error => {
        delete activiteitlocatieaanduiding.potentialTeksten;
        this["numLoading" + direction]--;
      }
    );
  }

  private loadGebiedsaanwijzingenForTekst(tekst, tekstType) {
    if (tekst._links.beschrijftGebiedsaanwijzingen == null) {
      return;
    }
    if (tekst.gebiedsaanwijzingen != null) {
      tekst.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadTekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
        this.loadLocatiesForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
      });
      return;
    }

    tekst.gebiedsaanwijzingen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "gebiedsaanwijzingen?" + tekstType.toLowerCase() + "Identificatie=" + tekst.identificatie;
    this.numLoadingD++;
    this.http.get(url, options).subscribe(
      response => {
        Object.keys(response["_embedded"]).forEach(gebiedsaanwijzingType => {
          response["_embedded"][gebiedsaanwijzingType].forEach(gebiedsaanwijzing => {
            const identificatie = gebiedsaanwijzing.identificatie;
            if (this.gebiedsaanwijzingen[identificatie] == null) {
              this.gebiedsaanwijzingen[identificatie] = gebiedsaanwijzing;
              this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
            }
            gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
            this.loadTekstenForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
            this.loadLocatiesForAnnotation(gebiedsaanwijzing, "gebiedsaanwijzing", "D");
            tekst.gebiedsaanwijzingen.push(gebiedsaanwijzing);
          });
        });
        this.numLoadingD--;
      },
      error => {
        delete tekst.gebiedsaanwijzingen;
        this.numLoadingD--;
      }
    );
  }

  private decorateGebiedsaanwijzing(gebiedsaanwijzing) {
    gebiedsaanwijzing.viewType = gebiedsaanwijzing.label.toLowerCase()
      .replace("gebiedsaanwijzingen", "")
      .replace("beperkingengebieden", "beperkingengebied")
      .replace("externev", "externe v")
      .replace("functies", "functie")
      .replace("ruimtelijkg", "ruimtelijk g")
      .replace("water-en-", "water en ");
    gebiedsaanwijzing.viewName = gebiedsaanwijzing.naam || gebiedsaanwijzing.groep.waarde;
    if (gebiedsaanwijzing.viewType == "functie") {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^functie[^\w\-][ '"]*|[ '"]+$/g, "");
    }
    if (gebiedsaanwijzing.viewName.toLowerCase() == gebiedsaanwijzing.groep.waarde) {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde;
    } else if (gebiedsaanwijzing.groep.waarde != "overig") {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde + " - " + gebiedsaanwijzing.viewName;
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^(\w+) - \1[^\w]{2,}/, "$1 - ");
    }
  }

  private loadActiviteitlocatieaanduidingenForTekst(tekst, direction) {
    if (tekst._links.beschrijftActiviteiten == null) {
      return;
    }
    if (tekst.activiteitlocatieaanduidingen != null) {
      tekst.activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        //this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");
      });
      return;
    }

    tekst.activiteitlocatieaanduidingen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "activiteitlocatieaanduidingen/_zoek?page=0&size=200";
    const post = {
      "zoekParameters": [{
        "parameter": "regeltekst.identificatie",
        "zoekWaarden": [tekst.identificatie]
      }]
    };
    this["numLoading" + direction]++;
    this.http.post(url, post, options).subscribe(
      response => {
        response["_embedded"].activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
          activiteitlocatieaanduiding.locaties = [];
          const options = environment.dsoOptions;
          //const url = environment.dsoUrl + "locaties?activiteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&regeltekstIdentificatie=" + tekst.identificatie;
          const url = environment.dsoUrl + "locaties?activiteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie;
          this["numLoading" + direction]++;
          this.http.get(url, options).subscribe(
            response => {
              if (tekst.activiteitlocatieaanduidingen == null) {
                this["numLoading" + direction]--;
                return;
              }

              const locaties = response["_embedded"].locaties;
              locaties.forEach(locatie => {
                this.processLocatie(locatie);
                locatie = this.locaties[locatie.identificatie];
                activiteitlocatieaanduiding.locaties.push(locatie);
              });

              const identificatie = activiteitlocatieaanduiding.identificatie = [activiteitlocatieaanduiding.betreftEenActiviteit.identificatie, activiteitlocatieaanduiding.activiteitregelkwalificatie.waarde].concat(activiteitlocatieaanduiding.locaties.map(locatie => locatie.identificatie)).join("|");
              if (this.activiteitlocatieaanduidingen[identificatie] == null) {
                this.activiteitlocatieaanduidingen[identificatie] = activiteitlocatieaanduiding;
                this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
              }
              activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[identificatie];
              this.linkActiviteitlocatieaanduidingToTekst(activiteitlocatieaanduiding, tekst);
              //this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");
              tekst.activiteitlocatieaanduidingen.push(activiteitlocatieaanduiding);
              this["numLoading" + direction]--;
            },
            error => {
              delete tekst.activiteitlocatieaanduidingen;
              this["numLoading" + direction]--;
            }
          );
        });
        this["numLoading" + direction]--;
      },
      error => {
        delete tekst.activiteitlocatieaanduidingen;
        this["numLoading" + direction]--;
      }
    );
  }

  private linkActiviteitlocatieaanduidingToTekst(activiteitlocatieaanduiding, tekst) {
    if (activiteitlocatieaanduiding.teksten == null) {
      activiteitlocatieaanduiding.teksten = [];
    }
    if (!activiteitlocatieaanduiding.teksten.includes(tekst)) {
      activiteitlocatieaanduiding.teksten.push(tekst);
    }
  }

  private decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding) {
    const activiteit = activiteitlocatieaanduiding.betreftEenActiviteit;
    const activiteitregelkwalificatie = activiteitlocatieaanduiding.activiteitregelkwalificatie;
    if (activiteitregelkwalificatie.waarde != "anders geduid") {
      activiteitlocatieaanduiding.viewName = (activiteit.naam || activiteit.groep.waarde) + " - " + activiteitregelkwalificatie.waarde;
      activiteitlocatieaanduiding.viewType = activiteit.groep.waarde;
    } else if ((activiteitlocatieaanduiding.locaties != null) && (activiteitlocatieaanduiding.locaties.length > 0) && activiteitlocatieaanduiding.locaties.every(locatie => !locatie.identificatie.match(/LND6030/) && (locatie.identificatie != this.plan.locatie.identificatie) && (locatie.noemer != null))) {
      if (activiteitlocatieaanduiding.locaties.length > 1) {
        activiteitlocatieaanduiding.viewName = (activiteit.naam || activiteit.groep.waarde) + " - " + activiteitlocatieaanduiding.locaties.map(locatie => locatie.noemer).join(", ");
        activiteitlocatieaanduiding.viewType = activiteit.groep.waarde;
      } else {
        activiteitlocatieaanduiding.viewName = activiteitlocatieaanduiding.locaties[0].noemer;
        activiteitlocatieaanduiding.viewType = (activiteit.naam || activiteit.groep.waarde);
      }
    } else {
      activiteitlocatieaanduiding.viewName = (activiteit.naam || activiteit.groep.waarde);
      activiteitlocatieaanduiding.viewType = activiteit.groep.waarde;
    }
  }

  private loadOmgevingsnormenForTekst(tekst) {
    if (tekst._links.beschrijftOmgevingsnormen == null) {
      return;
    }
    if (tekst.omgevingsnormen != null) {
      tekst.omgevingsnormen.forEach(omgevingsnorm => {
        omgevingsnorm.normwaarde.forEach(normwaarde => {
          this.loadTekstenForAnnotation(normwaarde.omgevingsnorm, "omgevingsnorm", "D");
          this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "D");
        });
      });
      return;
    }

    tekst.omgevingsnormen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "omgevingsnormen?regeltekstIdentificatie=" + tekst.identificatie;
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
          this.loadTekstenForAnnotation(omgevingsnorm, "omgevingsnorm", "D");
          omgevingsnorm.normwaarde.forEach(normwaarde => {
            this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "D");
          });
          tekst.omgevingsnormen.push(omgevingsnorm);
        });
        this.numLoadingD--;
      },
      error => {
        delete tekst.omgevingsnormen;
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

  private loadHoofdlijnenForTekst(tekstenType, tekst) {
    if (tekst._links.bevat == null) {
      return;
    }
    if (tekst.hoofdlijnen != null) {
      return;
    }

    tekst.hoofdlijnen = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + tekstenType + "/" + tekst.identificatie + "/hoofdlijnen";
    this.numLoadingD++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].hoofdlijnen.forEach(hoofdlijn => {
          const identificatie = hoofdlijn.identificatie;
          if (this.hoofdlijnen[identificatie] == null) {
            this.hoofdlijnen[identificatie] = hoofdlijn;
          }
          hoofdlijn = this.hoofdlijnen[identificatie];
          tekst.hoofdlijnen.push(hoofdlijn);
        });
        this.numLoadingD--;
      },
      error => {
        delete tekst.hoofdlijnen;
        this.numLoadingD--;
      }
    );
  }

  loadLocatieForPlan(plan) {
    if (plan.locatie != null) {
      if (plan.viewEnvelope != null) {
        (Object.values(this.loadLocatieForPlanPostActions) as Function[]).forEach(action => action());
        this.loadLocatieForPlanPostActions = {};
      }
      return;
    }

    const ontwerp = !!plan._links.heeftOntwerpRegelingsgebied;
    const identificatie = plan.locatieIdentificatie;
    if ((this.locaties[identificatie] == null) || (this.locaties[identificatie].viewEnvelope == null)) {
      plan.locatie = {identificatie: "nothing"};
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "locaties/" + identificatie;
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

  private loadLocatiesForAnnotation(annotation, annotationType, direction) {
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
    (!annotation.technischId? [false]: [false, true]).forEach(ontwerp => {
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "locaties?" + annotationType + (!annotation.technischId? "Identificatie=": "TechnischId=") + (annotation.technischId || annotation.identificatie) + ((annotationType == "activiteitlocatieaanduiding")? ("&activiteitIdentificatie=" + annotation.betreftEenActiviteit.identificatie): "");
      this["numLoading" + direction]++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.locaties != null) {
            const locaties = response["_embedded"].locaties || response["_embedded"].ontwerpLocaties;
            locaties.forEach(locatie => {
              this.processLocatie(locatie);
              locatie = this.locaties[locatie.technischId || locatie.identificatie];
              if (direction == "") {
                this.linkLocatieToAnnotation(locatie, annotation, annotationType);
              }
              annotation.locaties.push(locatie);
            });
            if (annotationType == "activiteitlocatieaanduiding") {
              this.decorateActiviteitlocatieaanduiding(annotation);
            }
          }
          this["numLoading" + direction]--;
        },
        error => {
          delete annotation.locaties;
          this["numLoading" + direction]--;
        }
      );
    });
  }

  private linkLocatieToAnnotation(locatie, annotation, annotationType) {
    const locatieAnnotations = locatie[annotationType.replace(/e$/, "") + "en"];
    if ((locatieAnnotations != null) && !locatieAnnotations.includes(annotation)) {
      locatieAnnotations.push(annotation);
    }
  }

  private loadComponentIdentificaties() {
    if ((this.markerLocatieIdentificaties.length == 0) || (this.plan == null)) {
      if (this.markerLocatieIdentificaties.length == 0) {
        this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null});
      }
      if (this.plan == null) {
        this.component = null;
        this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});
      }
      return;
    }

    const loadPage = (type, i) => {
      const locatieIdentificaties = this.markerLocatieIdentificaties;
      const planIdentificatie = (this.plan? this.plan.identificatie: null);
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
          if ((teksten.length > 0) && (locatieIdentificaties == this.markerLocatieIdentificaties) && (planIdentificatie == (this.plan? this.plan.identificatie: null))) {
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
        return (this.plan != null);
      }
      return (this.plan != null) && annotationLayer.annotation.teksten.some(tekst => (tekst.documentTechnischId || tekst.documentIdentificatie) == (this.plan.technischId || this.plan.identificatie));
    }).forEach(annotationLayer => {
      this.annotationLayers.push(annotationLayer);
    });
  }
}
