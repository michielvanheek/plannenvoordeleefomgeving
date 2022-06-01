import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Envelope, GeometryCollection } from "ng-niney";
import { AnnotationLayer } from "src/app/domain/annotation-layer";
import { DisplayModelService } from "./display-model.service";
import { ImowValueModelService } from "src/app/model/imow-value-model.service";
import { OmgevingsdocumentModelService } from "./omgevingsdocument-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImowModelService {
  markerLocatieIdentificaties = [];
  markerLocaties = [];

  locatieComponentIdentificaties = {};
  locaties = {};
  gebiedsaanwijzingen = {};
  activiteitlocatieaanduidingen = {};
  omgevingsnormen = {};
  hoofdlijnen = {};
  teksten = {};  // Regelteksten, divisieteksten, divisies.
  numLoadingC = 0;  //          locatieComponentIdentificaties
  numLoadingL = 0;  //          locaties
  numLoading = 0;   // Upward:  locaties -> annotations -> teksten
  numLoadingD = 0;  // Downward: teksten -> annotations -> locaties
                    //                   -> locaties
  plan = null;
  component = null;  // Selected documentcomponent.
  componentIdentificaties = {
    specific: null,
    filtered: null,
    selected: null,
    emit: (key, val) => {
      if ((this.componentIdentificaties[key] != val) && (key == "selected")) {
        this.setComponent(this.displayModel.tabs.filter(tab => tab.algo).reduce((component, tab) => component? component: tab.components.find(component => component.identificatie == val), null));
      }
    }
  };

  loadLocatieForPlanPostActions = {};

  private allAnnotationLayers = [];
  annotationLayers = [];

  constructor(
    private http: HttpClient,
    private displayModel: DisplayModelService,
    private omgevingsdocumentModel: OmgevingsdocumentModelService,
    private imowValueModel: ImowValueModelService
  ) { }

  setMarkerLocatieIdentificaties(markerLocatieIdentificaties) {
    this.markerLocatieIdentificaties = markerLocatieIdentificaties;

//    this.loadComponentIdentificaties();

    const newIdentificaties = markerLocatieIdentificaties.filter(identificatie => !this.locaties[identificatie]);
    if (newIdentificaties.length == 0) {
      this.setMarkerLocaties();
      return;
    }
    
    this.numLoadingL += newIdentificaties.length;
    newIdentificaties.forEach(identificatie => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + ((identificatie[2] == "_")? "ontwerp": "") + "locaties/" + identificatie;
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
  }

  setPlan(plan) {
    this.plan = plan;

    this.component = null;
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});

//    this.loadComponentIdentificaties();
    this.setAnnotationLayers();
  }

  loadTekstForComponent(component) {
    const tekstType = ["regeltekst", "divisieannotatie", "ontwerpregeltekst", "ontwerpdivisieannotatie"].find(tekstType => component._links[tekstType]);
    if (tekstType == null) {
      return;
    }
    if (component.tekst != null) {
      if (component.tekst.typeJuridischeRegels != "...") {
        this.loadLocatiesForAnnotation(component.tekst, tekstType, "D");
        this.loadGebiedsaanwijzingenForTekst(component.tekst, tekstType);
        if (tekstType.match(/regeltekst$/)) {
          this.loadActiviteitlocatieaanduidingenForTekst(component.tekst, "D");
          this.loadOmgevingsnormenForTekst(component.tekst);
        } else {
          this.loadHoofdlijnenForTekst(component.tekst);
        }
      }
      return;
    }

    const identificatie = component._links[tekstType].href.match(/(regelteksten|divisieannotaties)\/([^\?]+)/)[2];
    if (this.teksten[identificatie] == null) {
      component.tekst = {typeJuridischeRegels: "..."};
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + (tekstType.match(/tekst$/)? (tekstType + "en/"): (tekstType + "s/")) + identificatie;
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          const tekst = response;
          this.teksten[identificatie] = tekst;
          this.loadLocatiesForAnnotation(tekst, tekstType, "D");
          this.loadGebiedsaanwijzingenForTekst(tekst, tekstType);
          if (tekstType.match(/regeltekst$/)) {
            this.loadActiviteitlocatieaanduidingenForTekst(tekst, "D");
            this.loadOmgevingsnormenForTekst(tekst);
          } else {
            this.loadHoofdlijnenForTekst(tekst);
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
      if (tekstType.match(/regeltekst$/)) {
        this.loadActiviteitlocatieaanduidingenForTekst(tekst, "D");
        this.loadOmgevingsnormenForTekst(tekst);
      } else {
        this.loadHoofdlijnenForTekst(tekst);
      }
      component.tekst = tekst;
    }
  }

  loadInheritedTekstenForComponent(component) {
    const tekstType = ["divisieannotatie", "ontwerpdivisieannotatie"].find(tekstType => component._links["inherited" + tekstType[0].toUpperCase() + tekstType.substring(1) + "s"]);
    if (tekstType == null) {
      return;
    }
    if (component.inheritedTeksten != null) {
      component.inheritedTeksten.forEach(inheritedTekst => {
        this.loadLocatiesForAnnotation(inheritedTekst, tekstType, "D");
        this.loadGebiedsaanwijzingenForTekst(inheritedTekst, tekstType);
        this.loadHoofdlijnenForTekst(inheritedTekst);
      });
      return;
    }

    component.inheritedTeksten = [];
    component._links["inherited" + tekstType[0].toUpperCase() + tekstType.substring(1) + "s"].map(link => link.href.match(/(regelteksten|divisieannotaties)\/([^\?]+)/)[2]).forEach(identificatie => {
      if (this.teksten[identificatie] == null) {
        const options = environment.dsoOptions;
        const url = environment.dsoUrl + (tekstType + "s/") + identificatie;
        this.numLoadingD++;
        this.http.get(url, options).subscribe(
          response => {
            if (component.inheritedTeksten != null) {
              const inheritedTekst = response;
              this.teksten[identificatie] = inheritedTekst;
              this.loadLocatiesForAnnotation(inheritedTekst, tekstType, "D");
              this.loadGebiedsaanwijzingenForTekst(inheritedTekst, tekstType);
              this.loadHoofdlijnenForTekst(inheritedTekst);
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
        this.loadHoofdlijnenForTekst(inheritedTekst);
        component.inheritedTeksten.push(inheritedTekst);
      }
    });
  }

  private processLocatie(locatie) {
    const identificatie = locatie.technischId || locatie.identificatie;
    if (this.locaties[identificatie] == null) {
      this.locaties[identificatie] = locatie;
      if (locatie.omvat == null) {
        const bb = locatie.boundingBox;
        locatie.viewEnvelope = new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
      } else {
        locatie.viewEnvelope = new GeometryCollection(locatie.omvat.map(sublocatie => {
          const bb = sublocatie.boundingBox;
          return new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
        })).getEnvelope();
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
        this.loadTekstenForAnnotation(gebiedsaanwijzing, !gebiedsaanwijzing.technischId? "gebiedsaanwijzing": "ontwerpgebiedsaanwijzing", "");
        this.loadLocatiesForAnnotation(gebiedsaanwijzing, !gebiedsaanwijzing.technischId? "gebiedsaanwijzing": "ontwerpgebiedsaanwijzing", "");
      });
      return false;
    });

    [false, true].forEach(ontwerp => {
      const locatieIdentificaties = locaties.filter(locatie => !!locatie.technischId == ontwerp).map(locatie => locatie.technischId || locatie.identificatie);
      if (locatieIdentificaties.length == 0) {
        return;
      }

      const options = environment.dsoOptions;
      const post = {
        zoekParameters: [{
          parameter: !ontwerp? "locatie.identificatie": "ontwerpLocatie.technischId",
          zoekWaarden: locatieIdentificaties
        }]
      };
      (!ontwerp? ["gebiedsaanwijzing", "ontwerpgebiedsaanwijzing"]: ["ontwerpgebiedsaanwijzing"]).forEach(annotationType => {
        const url = environment.dsoUrl + annotationType + "en/_zoek?page=0&size=200";
        this.numLoading++;
        this.http.post(url, post, options).subscribe(
          response => {
            (Object.values(response["_embedded"])[0] as any[]).forEach(gebiedsaanwijzing => {
              const identificatie = gebiedsaanwijzing.technischId || gebiedsaanwijzing.identificatie;
              if (this.gebiedsaanwijzingen[identificatie] == null) {
                this.gebiedsaanwijzingen[identificatie] = gebiedsaanwijzing;
                this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
              }
              gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
              this.loadTekstenForAnnotation(gebiedsaanwijzing, annotationType, "");
              this.loadLocatiesForAnnotation(gebiedsaanwijzing, annotationType, "");
            });
            this.numLoading--;
          },
          error => {
            locaties.filter(locatie => !!locatie.technischId == ontwerp).forEach(locatie => delete locatie.gebiedsaanwijzingen);
            this.numLoading--;
          }
        );
      });
    });
  }

  private loadActiviteitlocatieaanduidingenForLocaties() {
    const locaties = this.markerLocaties.filter(locatie => {
      if (!locatie.identificatie.match(/gm/) || this.omgevingsdocumentModel.regelingen.some(regeling => regeling.locatieIdentificatie == locatie.identificatie)) {
        return false;
      }
      if (locatie.activiteitlocatieaanduidingen == null) {
        locatie.activiteitlocatieaanduidingen = [];
        return true;
      }
      locatie.activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
        this.loadLocatiesForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
      });
      return false;
    });

    [false, true].forEach(ontwerp => {
      if (ontwerp) return;  // TODO fix in OZON

      const locatieIdentificaties = locaties.filter(locatie => !!locatie.technischId == ontwerp).map(locatie => locatie.technischId || locatie.identificatie);
      if (locatieIdentificaties.length == 0) {
        return;
      }

      const options = environment.dsoOptions;
      const post = {
        zoekParameters: [{
          parameter: !ontwerp? "locatie.identificatie": "ontwerplocatie.technischId",
          zoekWaarden: locatieIdentificaties
        }]
      };
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "activiteitlocatieaanduidingen/_zoek?page=0&size=200";
      this.numLoading++;
      this.http.post(url, post, options).subscribe(
        response => {
          (Object.values(response["_embedded"])[0] as any[]).forEach(activiteitlocatieaanduiding => {
            const regeltekstIdentificatie = activiteitlocatieaanduiding._links.kwalificeert.href.match(/regeltekstIdentificatie=([^\&]+)/)[1];  // TODO fix in OZON ontwerpregeltekstTechnischId
            const url = !ontwerp?
              (environment.dsoUrl + "locaties?activiteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&regeltekstIdentificatie=" + regeltekstIdentificatie):
              (environment.dsoUrl + "ontwerplocaties?ontwerpactiviteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&ontwerpregeltekstTechnischId=" + regeltekstIdentificatie);
            this.numLoading++;
            this.http.get(url, options).subscribe(
              response => {
                const locatieIdentificaties = activiteitlocatieaanduiding.locatieIdentificaties = (Object.values(response["_embedded"])[0] as any[]).map(locatie => locatie.technischId || locatie.identificatie);
                const identificatie = activiteitlocatieaanduiding[!ontwerp? "identificatie": "technischId"] = [activiteitlocatieaanduiding.betreftEenActiviteit.identificatie, activiteitlocatieaanduiding.activiteitregelkwalificatie.waarde].concat(locatieIdentificaties).join("|");
                if (this.activiteitlocatieaanduidingen[identificatie] == null) {
                  this.activiteitlocatieaanduidingen[identificatie] = activiteitlocatieaanduiding;
                  this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
                }
                activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[identificatie];
                this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
                this.loadLocatiesForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
                this.numLoading--;
              },
              error => {
                locaties.filter(locatie => !!locatie.technischId == ontwerp).forEach(locatie => delete locatie.activiteitlocatieaanduidingen);
                this.numLoading--;
              }
            );
          });
          this.numLoading--;
        },
        error => {
          locaties.filter(locatie => !!locatie.technischId == ontwerp).forEach(locatie => delete locatie.activiteitlocatieaanduidingen);
          this.numLoading--;
        }
      );
    });
  }

  private loadOmgevingsnormenForLocaties() {
    const locaties = this.markerLocaties.filter(locatie => {
      if (locatie.normwaarden == null) {
        locatie.normwaarden = [];
        return true;
      }
      locatie.normwaarden.forEach(normwaarde => {
        this.loadTekstenForAnnotation(normwaarde.omgevingsnorm, !normwaarde.omgevingsnorm.technischId? "omgevingsnorm": "ontwerpomgevingsnorm", "");
        this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "");
      });
      return false;
    });

    [false, true].forEach(ontwerp => {
      const locatieIdentificaties = locaties.filter(locatie => !!locatie.technischId == ontwerp).map(locatie => locatie.technischId || locatie.identificatie);
      if (locatieIdentificaties.length == 0) {
        return;
      }

      const options = environment.dsoOptions;
      const post = {
        zoekParameters: [{
          parameter: !ontwerp? "locatie.identificatie": "ontwerplocatie.technischId",
          zoekWaarden: locatieIdentificaties
        }]
      };
      (!ontwerp? ["omgevingsnorm", "ontwerpomgevingsnorm"]: ["ontwerpomgevingsnorm"]).forEach(annotationType => {
        const url = environment.dsoUrl + annotationType + "en/_zoek?page=0&size=200";
        this.numLoading++;
        this.http.post(url, post, options).subscribe(
          response => {
            (Object.values(response["_embedded"])[0] as any[]).forEach(omgevingsnorm => {
              const identificatie = omgevingsnorm.technischId || omgevingsnorm.identificatie;
              if (this.omgevingsnormen[identificatie] == null) {
                this.omgevingsnormen[identificatie] = omgevingsnorm;
                this.decorateOmgevingsnorm(omgevingsnorm);
              }
              omgevingsnorm = this.omgevingsnormen[identificatie];
              this.loadTekstenForAnnotation(omgevingsnorm, annotationType, "");
              omgevingsnorm.normwaarde.forEach(normwaarde => {
                this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "");
              });
            });
            this.numLoading--;
          },
          error => {
            locaties.filter(locatie => !!locatie.technischId == ontwerp).forEach(locatie => delete locatie.normwaarden);
            this.numLoading--;
          }
        );
      });
    });
  }

  private loadTekstenForAnnotation(annotation, annotationType, direction) {
    if (annotation.teksten != null) {
      return;
    }

    annotation.teksten = [];
    (!annotation.technischId? [false/*, true --TODO fix OZON bug--*/]: [true]).forEach(ontwerp => {
      (!ontwerp? (annotationType.match(/^gebiedsaanwijzing$/)? ["regelteksten", "divisieannotaties"]: ["regelteksten"]):
                 (annotationType.match(/gebiedsaanwijzing$/)? ["ontwerpregelteksten", "ontwerpdivisieannotaties"]: ["ontwerpregelteksten"])
      ).forEach(tekstenType => {
        const options = environment.dsoOptions;
        const url = environment.dsoUrl + tekstenType + "?" + annotationType + (!annotation.technischId? ("Identificatie=" + annotation.identificatie): ("TechnischId=" + annotation.technischId));
        this["numLoading" + direction]++;
        this.http.get(url, options).subscribe(
          response => {
            if (annotation.teksten != null) {
              (Object.values(response["_embedded"])[0] as any[]).forEach(tekst => {
                const identificatie = tekst.technischId || tekst.identificatie;
                if (this.teksten[identificatie] == null) {
                  this.teksten[identificatie] = tekst;
                }
                tekst = this.teksten[identificatie];
                annotation.teksten.push(tekst);
              });
            }
            this["numLoading" + direction]--;
          },
          error => {
            delete annotation.teksten;
            this["numLoading" + direction]--;
          }
        );
      });
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
        (Object.values(response["_embedded"])[0] as any[]).forEach(tekst => {
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
    if ((tekst._links.beschrijftGebiedsaanwijzingen == null) && (tekst._links.beschrijftGebiedsaanwijzingenVastgesteld == null)) {
      return;
    }
    if (tekst.gebiedsaanwijzingen != null) {
      tekst.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadTekstenForAnnotation(gebiedsaanwijzing, !gebiedsaanwijzing.technischId? "gebiedsaanwijzing": "ontwerpgebiedsaanwijzing", "D");
        this.loadLocatiesForAnnotation(gebiedsaanwijzing, !gebiedsaanwijzing.technischId? "gebiedsaanwijzing": "ontwerpgebiedsaanwijzing", "D");
      });
      return;
    }

    tekst.gebiedsaanwijzingen = [];
    (!tekst.technischId? ["gebiedsaanwijzing"]: ["gebiedsaanwijzing", "ontwerpgebiedsaanwijzing"]).forEach(annotationType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + annotationType + "en?" + tekstType + (!tekst.technischId? ("Identificatie=" + tekst.identificatie): ("TechnischId=" + tekst.technischId));
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (tekst.gebiedsaanwijzingen != null) {
            (Object.values(response["_embedded"])[0] as any[]).forEach(gebiedsaanwijzing => {
              const identificatie = gebiedsaanwijzing.technischId || gebiedsaanwijzing.identificatie;
              if (this.gebiedsaanwijzingen[identificatie] == null) {
                this.gebiedsaanwijzingen[identificatie] = gebiedsaanwijzing;
                this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
              }
              gebiedsaanwijzing = this.gebiedsaanwijzingen[identificatie];
              this.loadTekstenForAnnotation(gebiedsaanwijzing, annotationType, "D");
              this.loadLocatiesForAnnotation(gebiedsaanwijzing, annotationType, "D");
              tekst.gebiedsaanwijzingen.push(gebiedsaanwijzing);
            });
          }
          this.numLoadingD--;
        },
        error => {
          delete tekst.gebiedsaanwijzingen;
          this.numLoadingD--;
        }
      );
    });
  }

  private decorateGebiedsaanwijzing(gebiedsaanwijzing) {
    gebiedsaanwijzing.viewType = gebiedsaanwijzing.label.toLowerCase()
      .replace("ontwerp", "")
      .replace("gebiedsaanwijzingen", "")
      .replace("beperkingengebieden", "beperkingengebied")
      .replace("externev", "externe v")
      .replace("functies", "functie")
      .replace("ruimtelijkg", "ruimtelijk g")
      .replace("water-en-", "water en ");
    gebiedsaanwijzing.viewName = (gebiedsaanwijzing.naam || gebiedsaanwijzing.groep.waarde).trim();
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
    if ((tekst._links.beschrijftActiviteiten == null) && (tekst._links.beschrijftActiviteitenVastgesteld == null)) {
      return;
    }
    if (tekst.activiteitlocatieaanduidingen != null) {
      tekst.activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        //this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");
        this.loadLocatiesForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");
      });
      return;
    }

    tekst.activiteitlocatieaanduidingen = [];
    const options = environment.dsoOptions;
    const post = {
      zoekParameters: [{
        parameter: !tekst.technischId? "regeltekst.identificatie": "ontwerpregeltekst.technischId",
        zoekWaarden: [tekst.technischId || tekst.identificatie]
      }]
    };
    const url = environment.dsoUrl + (!tekst.technischId? "": "ontwerp") + "activiteitlocatieaanduidingen/_zoek?page=0&size=200";
    this["numLoading" + direction]++;
    this.http.post(url, post, options).subscribe(
      response => {
        (Object.values(response["_embedded"])[0] as any[]).forEach(activiteitlocatieaanduiding => {
          const url = !tekst.technischId?
            (environment.dsoUrl + "locaties?activiteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&regeltekstIdentificatie=" + tekst.identificatie):
            (environment.dsoUrl + "ontwerplocaties?ontwerpactiviteitlocatieaanduidingIdentificatie=" + activiteitlocatieaanduiding.identificatie + "&ontwerpregeltekstTechnischId=" + tekst.technischId);
          this["numLoading" + direction]++;
          this.http.get(url, options).subscribe(
            response => {
              if (tekst.activiteitlocatieaanduidingen != null) {
                const locatieIdentificaties = activiteitlocatieaanduiding.locatieIdentificaties = (Object.values(response["_embedded"])[0] as any[]).map(locatie => locatie.technischId || locatie.identificatie);
                const identificatie = activiteitlocatieaanduiding[!tekst.technischId? "identificatie": "technischId"] = [activiteitlocatieaanduiding.betreftEenActiviteit.identificatie, activiteitlocatieaanduiding.activiteitregelkwalificatie.waarde].concat(locatieIdentificaties).join("|");
                if (this.activiteitlocatieaanduidingen[identificatie] == null) {
                  this.activiteitlocatieaanduidingen[identificatie] = activiteitlocatieaanduiding;
                  this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
                }
                activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[identificatie];
                //this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");
                this.loadLocatiesForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "D");

                this.linkActiviteitlocatieaanduidingToTekst(activiteitlocatieaanduiding, tekst);
                tekst.activiteitlocatieaanduidingen.push(activiteitlocatieaanduiding);
              }
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
    } else if ((activiteitlocatieaanduiding.locaties != null) && (activiteitlocatieaanduiding.locaties.length > 0) && activiteitlocatieaanduiding.locaties.every(locatie => !this.omgevingsdocumentModel.regelingen.some(regeling => regeling.locatieIdentificatie == locatie.identificatie) && (locatie.noemer != null))) {
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
    activiteitlocatieaanduiding.viewName = activiteitlocatieaanduiding.viewName.trim();
  }

  private loadOmgevingsnormenForTekst(tekst) {
    if ((tekst._links.beschrijftOmgevingsnormen == null) && (tekst._links.beschrijftOmgevingsnormenVastgesteld == null)) {
      return;
    }
    if (tekst.omgevingsnormen != null) {
      tekst.omgevingsnormen.forEach(omgevingsnorm => {
        this.loadTekstenForAnnotation(omgevingsnorm, !omgevingsnorm.technischId? "omgevingsnorm": "ontwerpomgevingsnorm", "D");
        omgevingsnorm.normwaarde.forEach(normwaarde => {
          this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "D");
        });
      });
      return;
    }

    tekst.omgevingsnormen = [];
    (!tekst.technischId? ["omgevingsnorm"]: ["omgevingsnorm", "ontwerpomgevingsnorm"]).forEach(annotationType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + annotationType + "en?" + (!tekst.technischId? ("regeltekstIdentificatie=" + tekst.identificatie): ("ontwerpRegeltekstTechnischId=" + tekst.technischId));
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (tekst.omgevingsnormen != null) {
            (Object.values(response["_embedded"])[0] as any[]).forEach(omgevingsnorm => {
              const identificatie = omgevingsnorm.technischId || omgevingsnorm.identificatie;
              if (this.omgevingsnormen[identificatie] == null) {
                this.omgevingsnormen[identificatie] = omgevingsnorm;
                this.decorateOmgevingsnorm(omgevingsnorm);
              }
              omgevingsnorm = this.omgevingsnormen[identificatie];
              this.loadTekstenForAnnotation(omgevingsnorm, annotationType, "D");
              omgevingsnorm.normwaarde.forEach(normwaarde => {
                this.loadLocatiesForAnnotation(normwaarde, "normwaarde", "D");
              });
              tekst.omgevingsnormen.push(omgevingsnorm);
            });
          }
          this.numLoadingD--;
        },
        error => {
          delete tekst.omgevingsnormen;
          this.numLoadingD--;
        }
      );
    });
  }

  private decorateOmgevingsnorm(omgevingsnorm) {
    omgevingsnorm.viewName = (omgevingsnorm.naam || omgevingsnorm.type.waarde).trim();

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

  private loadHoofdlijnenForTekst(tekst) {
    if ((tekst._links.bevat == null) && (tekst._links.bevatVastgesteld == null)) {
      return;
    }
    if (tekst.hoofdlijnen != null) {
      return;
    }

    tekst.hoofdlijnen = [];
    (!tekst.technischId? [false]: [false, true]).forEach(ontwerp => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "hoofdlijnen?" + (!tekst.technischId? ("divisieannotatieIdentificatie=" + tekst.identificatie): ("ontwerpdivisieannotatieTechnischId=" + tekst.technischId));
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (tekst.hoofdlijnen != null) {
            (Object.values(response["_embedded"])[0] as any[]).forEach(hoofdlijn => {
              const identificatie = hoofdlijn.identificatie;
              if (this.hoofdlijnen[identificatie] == null) {
                this.hoofdlijnen[identificatie] = hoofdlijn;
              }
              hoofdlijn = this.hoofdlijnen[identificatie];
              tekst.hoofdlijnen.push(hoofdlijn);
            });
          }
          this.numLoadingD--;
        },
        error => {
          delete tekst.hoofdlijnen;
          this.numLoadingD--;
        }
      );
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
    (!annotation.technischId && !annotation.omgevingsnorm?.technischId? ["locaties"]: ["locaties", "ontwerplocaties"]).forEach(locatiesType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + locatiesType + "?" + annotationType + (!annotation.technischId? ("Identificatie=" + annotation.identificatie): ("TechnischId=" + annotation.technischId)) + ((annotationType == "activiteitlocatieaanduiding")? ("&activiteitIdentificatie=" + annotation.betreftEenActiviteit.identificatie): "");
      this["numLoading" + direction]++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.locaties != null) {
            const identificaties = (Object.values(response["_embedded"])[0] as any[]).map(locatie => locatie.technischId || locatie.identificatie);
            this.loadLocaties(annotation, annotationType, direction, locatiesType, identificaties);
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

  private loadLocatiesForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, direction) {
    if (activiteitlocatieaanduiding.locaties != null) {
      if (direction == "") {
        activiteitlocatieaanduiding.locaties.forEach(locatie => {
          this.linkLocatieToAnnotation(locatie, activiteitlocatieaanduiding, "activiteitlocatieaanduiding");
        });
      }
      return;
    }

    activiteitlocatieaanduiding.locaties = [];
    this.loadLocaties(activiteitlocatieaanduiding, "activiteitlocatieaanduiding", direction, !activiteitlocatieaanduiding.technischId? "locaties": "ontwerplocaties", activiteitlocatieaanduiding.locatieIdentificaties);
  }

  private loadLocaties(annotation, annotationType, direction, locatiesType, identificaties) {
    const knownLocaties = identificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]);
    const unknownIdentificaties = identificaties.filter(identificatie => !this.locaties[identificatie]);

    knownLocaties.forEach(locatie => {
      if (direction == "") {
        this.linkLocatieToAnnotation(locatie, annotation, annotationType);
      }
      annotation.locaties.push(locatie);
    });

    unknownIdentificaties.forEach(identificatie => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + locatiesType + "/" + identificatie;
      this["numLoading" + direction]++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.locaties != null) {
            let locatie = response;
            this.processLocatie(locatie);
            locatie = this.locaties[identificatie];
            if (direction == "") {
              this.linkLocatieToAnnotation(locatie, annotation, annotationType);
            }
            annotation.locaties.push(locatie);
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
    const locatieAnnotations = locatie[annotationType.replace(/^ontwerp|e$/g, "") + "en"];
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

    const markerLocatieIdentificatiesNonRegelingsgebied = [];
    const markerLocatieIdentificatiesRegelingsgebied = [];
    this.markerLocatieIdentificaties.forEach(locatieIdentificatie => {
      if (!this.omgevingsdocumentModel.regelingen.some(regeling => regeling.locatieIdentificatie == locatieIdentificatie)) {
        markerLocatieIdentificatiesNonRegelingsgebied.push(locatieIdentificatie);
      } else {
        markerLocatieIdentificatiesRegelingsgebied.push(locatieIdentificatie);
      }
    });

    const newIdentificatiesNonRegelingsgebied = markerLocatieIdentificatiesNonRegelingsgebied.filter(locatieIdentificatie => !this.locatieComponentIdentificaties[locatieIdentificatie]);
    const newIdentificatiesRegelingsgebied = markerLocatieIdentificatiesRegelingsgebied.filter(locatieIdentificatie => !this.locatieComponentIdentificaties[locatieIdentificatie] || !this.locatieComponentIdentificaties[locatieIdentificatie][this.plan.technischId || this.plan.identificatie]);
    /*.filter(identificatie => (identificatie != this.plan.locatieIdentificatie));*/
    if (newIdentificatiesNonRegelingsgebied.length + newIdentificatiesRegelingsgebied.length == 0) {
      this.setSpecificComponentIdentificaties();
      return;
    }

    const options = environment.dsoOptions;
    const requests = [];
    newIdentificatiesNonRegelingsgebied.forEach(locatieIdentificatie => {
      this.locatieComponentIdentificaties[locatieIdentificatie] = {};
      const post = {
        zoekParameters: [{
          parameter: (locatieIdentificatie[2] == ".")? "locatie.identificatie": "ontwerplocatie.technischId",
          zoekWaarden: [locatieIdentificatie]
        }]
      };
      if (locatieIdentificatie[2] == ".") {
        requests.push({post: post, type: "regelteksten"}, {post: post, type: "divisieannotaties"});
      }
      requests.push({post: post, type: "ontwerpRegelteksten"}, {post: post, type: "ontwerpdivisieannotaties"});
    });
    newIdentificatiesRegelingsgebied.forEach(locatieIdentificatie => {
      this.locatieComponentIdentificaties[locatieIdentificatie] = this.locatieComponentIdentificaties[locatieIdentificatie] || {};
      this.locatieComponentIdentificaties[locatieIdentificatie][this.plan.technischId || this.plan.identificatie] = [];
      const post = {
        zoekParameters: [{
          parameter: (locatieIdentificatie[2] == ".")? "locatie.identificatie": "ontwerplocatie.technischId",
          zoekWaarden: [locatieIdentificatie]
        }, {
          parameter: !this.plan.technischId? "documentIdentificatie": "ontwerpdocument.technischId",
          zoekWaarden: [this.plan.technischId || this.plan.identificatie]
        }]
      };
      if (!this.plan.technischId) {
        if (locatieIdentificatie[2] == ".") {
          requests.push({post: post, type: this.plan.structured? "regelteksten": "divisieannotaties"});
        }
      } else {
        requests.push({post: post, type: this.plan.structured? "ontwerpRegelteksten": "ontwerpdivisieannotaties"});
      }
    });
    const loadPage = (request, i) => {
      const url = environment.dsoUrl + request.type.toLowerCase() + "/_zoek?page=" + i + "&size=200&sort=volgordeNummer,asc";
      this.numLoadingC++;
      this.http.post(url, request.post, options).subscribe(
        response => {
          const locatieIdentificatie = request.post.zoekParameters[0].zoekWaarden[0];
          const planIdentificatie = (request.post.zoekParameters.length == 1)? null: request.post.zoekParameters[1].zoekWaarden[0];
          const but = this.locatieComponentIdentificaties[locatieIdentificatie];
          if ((but != null) && ((planIdentificatie == null) || (but[planIdentificatie] != null))) {
            const teksten = response["_embedded"][request.type];
            teksten.forEach(tekst => {
              const planIdentificatie = tekst.documentTechnischId || tekst.documentIdentificatie;
              but[planIdentificatie] = but[planIdentificatie] || [];
              but[planIdentificatie].push(tekst);
            });
            if ((teksten.length > 0) && this.markerLocatieIdentificaties.includes(locatieIdentificatie) && (this.plan != null) && ((planIdentificatie == null) || ((this.plan.technischId || this.plan.identificatie) == planIdentificatie))) {
              this.setSpecificComponentIdentificaties();
            }
            const numPages = response["page"].totalPages;
            if ((i == 0) && (numPages > 1)) {
              for (let i = 1; i < numPages; i++) {
                loadPage(request, i);
              }
            }
          }
          this.numLoadingC--;
        },
        error => {
          const locatieIdentificatie = request.post.zoekParameters[0].zoekWaarden[0];
          if (request.post.zoekParameters.length == 1) {  // Non-regelingsgebied.
            delete this.locatieComponentIdentificaties[locatieIdentificatie];
          } else {  // Regelingsgebied.
            const planIdentificatie = request.post.zoekParameters[1].zoekWaarden[0];
            delete this.locatieComponentIdentificaties[locatieIdentificatie][planIdentificatie];
            if (Object.keys(this.locatieComponentIdentificaties[locatieIdentificatie]).length == 0) {
              delete this.locatieComponentIdentificaties[locatieIdentificatie];
            }
          }
          this.numLoadingC--;
        }
      );
    };
    requests.forEach(request => loadPage(request, 0));
  }

  setSpecificComponentIdentificaties() {
    const planIdentificatie = this.plan.technischId || this.plan.identificatie;
    const locatieIdentificaties = this.markerLocatieIdentificaties.filter(locatieIdentificatie => this.locatieComponentIdentificaties[locatieIdentificatie] && this.locatieComponentIdentificaties[locatieIdentificatie][planIdentificatie]);
    const teksten = locatieIdentificaties.reduce((teksten, locatieIdentificatie) => teksten.concat(this.locatieComponentIdentificaties[locatieIdentificatie][planIdentificatie]), []);
    if (teksten.length > 0) {
      this.setComponentIdentificaties("specific", teksten);
    }
  }

  setComponentIdentificaties(type, teksten, label = null) {
    const componentIdentificaties = {};

    componentIdentificaties[(teksten[0].documentTechnischId || teksten[0].documentIdentificatie) + "__body"] = "trail";
    teksten.forEach(tekst => {
      const pad = tekst.documentKruimelpad.sort((a, b) => (a.identificatie.length < b.identificatie.length)? -1: (a.identificatie.length > b.identificatie.length)? 1: 0);  // Workaround for sorting bug in backend.
      for (let i = 0; i < pad.length; i++) {
        componentIdentificaties[pad[i].identificatie] = (i < pad.length - 1)? "trail": "target";
      }
    });

    if (label != null) {
      Object.assign(componentIdentificaties, {label: label});
    }

    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {filtered: null}, {[type]: componentIdentificaties});
    
    if ((type == "specific") && (this.componentIdentificaties.selected != null) && (componentIdentificaties[this.componentIdentificaties.selected] != "target")) {
      this.selectNextComponentIdentificatie(type);
    }
    if ((type == "filtered") && ((this.componentIdentificaties.selected == null) || (componentIdentificaties[this.componentIdentificaties.selected] != "target"))) {
      this.selectNextComponentIdentificatie(type);
    }
  }

  clearFilteredComponentIdentificaties() {
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {filtered: null});
  }

  selectNextComponentIdentificatie(type) {
    let i = this.displayModel.tabs[2].components.findIndex(component => component.identificatie == this.componentIdentificaties.selected);
    do {
      if (++i >= this.displayModel.tabs[2].components.length) {
        i = 0;
      }
    } while (this.componentIdentificaties[type][this.displayModel.tabs[2].components[i].technischId || this.displayModel.tabs[2].components[i].identificatie] != "target");

    this.setComponent(this.displayModel.tabs[2].components[i]);
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
