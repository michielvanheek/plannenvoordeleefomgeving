import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Envelope, GeometryCollection, JsonConverter } from "ng-niney";
import { AnnotationLayer } from "src/app/domain/annotation-layer";
import { AppEvent } from "../event/AppEvent";
import { AppEventDispatcher } from "../event/AppEventDispatcher";
import { AppEventListener } from "../event/AppEventListener";
import { DisplayModelService } from "./display-model.service";
import { ImowValueModelService } from "src/app/model/imow-value-model.service";
import { MarkerModelService } from "./marker-model.service";
import { OmgevingsdocumentModelService } from "./omgevingsdocument-model.service";
import { TimeModelService } from "./time-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImowModelService extends AppEventDispatcher implements AppEventListener {
  private markerLocatieIdentificatiesLoader              = {subscriptions: []};
  private gebiedsaanwijzingenForLocatiesLoader           = {subscriptions: [], locatieIdentificaties: [], annotationsType: "gebiedsaanwijzingen"};
  private activiteitlocatieaanduidingenForLocatiesLoader = {subscriptions: [], locatieIdentificaties: [], annotationsType: "activiteitlocatieaanduidingen"};
  private omgevingsnormenForLocatiesLoader               = {subscriptions: [], locatieIdentificaties: [], annotationsType: "normwaarden"};
  private tekstenForLocatiesLoader                       = {subscriptions: [], locatieIdentificaties: [], planIdentificatie: null};

  markerLocatieIdentificaties = [];
  markerLocaties = [];

  locaties = {};
  gebiedsaanwijzingen = {};
  activiteitlocatieaanduidingen = {};
  omgevingsnormen = {};
  hoofdlijnen = {};
  teksten = {};  // Regelteksten, divisieteksten, divisies.

  get numLoadingC() {
    return this.tekstenForLocatiesLoader.subscriptions.length;
  }
  get numLoadingL() {
    return this.tekstenForLocatiesLoader.subscriptions.length + this.gebiedsaanwijzingenForLocatiesLoader.subscriptions.length + this.activiteitlocatieaanduidingenForLocatiesLoader.subscriptions.length + this.omgevingsnormenForLocatiesLoader.subscriptions.length;
  }
  numLoading = 0;   // Upward:  locaties -> annotations -> teksten
  numLoadingD = 0;  // Downward: teksten -> annotations -> locaties
                    //                   -> locaties
  plan = null;
  componentIdentificaties = {
    specific: null,
    filtered: null,
    selected: null,
    emit: (key, val) => {
      if ((this.componentIdentificaties[key] != val) && (key == "selected")) {
        const component = this.displayModel.tabs.filter(tab => tab.algo).reduce((component, tab) => component? component: tab.components.find(component => component.identificatie == val), null);
        this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {selected: component.identificatie});
        this.displayModel.setComponent(component);
      }
    }
  };

  loadLocatieForPlanPostActions = {};

  private allAnnotationLayers = [];
  annotationLayers = [];

  constructor(
    private http: HttpClient,
    private displayModel: DisplayModelService,
    private timeModel: TimeModelService,
    private markerModel: MarkerModelService,
    private regelingModel: OmgevingsdocumentModelService,
    private imowValueModel: ImowValueModelService
  ) {
    super();

    this.markerModel.addEventListener(this);
    this.regelingModel.addEventListener(this);
  }

  appEventHandler(event: AppEvent): void {
    if (event.type == "markerModel.xy") {
      this.loadMarkerLocatieIdentificaties();
    } else if (event.type == "regelingModel.regelingen") {
      this.deleteInvalidAnnotations();
      this.loadMarkerLocatieIdentificaties();
    }
  }

  isTekstInvalidForPlan(annotation, plan) {
    if (plan.technischId != null) {
      return this.isTekstInvalid(annotation, this.timeModel.time);
    }
    if (this.timeModel.time >= plan.geregistreerdMet.beginGeldigheid) {
      return this.isTekstInvalid(annotation, this.timeModel.time);
    }
    return this.isTekstInvalid(annotation, plan.geregistreerdMet.beginGeldigheid);
  }

  private isTekstInvalid(tekst, time) {
    return this.isAnnotationInvalid(tekst, time) ||
      tekst.gebiedsaanwijzingen?.some(gebiedsaanwijzing => this.isAnnotationInvalid(gebiedsaanwijzing, time)) ||
      //tekst.activiteitlocatieaanduidingen?.some(activiteitlocatieaanduiding => this.isAnnotationInvalid(activiteitlocatieaanduiding, time)) ||
      tekst.omgevingsnormen?.some(omgevingsnorm => this.isAnnotationInvalid(omgevingsnorm, time));
  }

  private deleteInvalidAnnotations() {
    // TODO use isAnnotationInvalid()

    this.markerLocatieIdentificaties = [];
    this.markerLocaties = [];

    this.locaties = {};
    this.gebiedsaanwijzingen = {};
    this.activiteitlocatieaanduidingen = {};
    this.omgevingsnormen = {};
    this.hoofdlijnen = {};
    this.teksten = {};
  }

  private isAnnotationInvalid(annotation, time = null) {
    if (this.timeModel.time < annotation.geregistreerdMet.tijdstipRegistratie.split("T")[0]) {
      return true;
    }
    if (annotation.technischId != null) {
      return false;
    }
    if (this.timeModel.time > annotation.timeRequested) {
      return true;
    }
    if ((time || this.timeModel.time) >= annotation.geregistreerdMet.eindGeldigheid) {
      return true;
    }
    if (time && (time < annotation.geregistreerdMet.beginGeldigheid)) {
      return true;
    }
    return false;
  }

  private loadMarkerLocatieIdentificaties() {
    this.unload(this.markerLocatieIdentificatiesLoader);

    if (this.markerModel.xy == null) {
      this.setMarkerLocatieIdentificaties([]);
      return;
    }
    if (this.regelingModel.regelingen.length == 0) {
      return;
    }

    let locatieIdentificaties = [];

    const options = environment.dsoOptions;
    const post = {
      geo: {
        geometrie: (new JsonConverter()).geometryToJson(this.markerModel.polygon || this.markerModel.xy, false),
        spatialOperator: "intersects"
      }
    };
    [false, true].forEach(ontwerp => {
      const url = environment.dsoUrl + (!ontwerp? ("locatieidentificaties/_zoek" + "?" + this.timeModel.futureParams): "ontwerplocaties/technischids/_zoek");
      const i = -1 + this.markerLocatieIdentificatiesLoader.subscriptions.push(this.http.post(url, post, options).subscribe(
        response => {
          locatieIdentificaties = locatieIdentificaties.concat(Object.values(response["_embedded"])[0] as any[]);

          this.finalizeSubscription(this.markerLocatieIdentificatiesLoader, i);
          if (this.markerLocatieIdentificatiesLoader.subscriptions.length == 0) {
            this.setMarkerLocatieIdentificaties(locatieIdentificaties);
          }
        },
        error => {
          this.finalizeSubscription(this.markerLocatieIdentificatiesLoader, i);
        }
      ));
    });
  }

  private setMarkerLocatieIdentificaties(markerLocatieIdentificaties) {
    if (this.markerLocatieIdentificaties == markerLocatieIdentificaties) {
      return;
    }
    if ((this.markerLocatieIdentificaties.length == 0) && (markerLocatieIdentificaties.length == 0)) {
      return;
    }

    this.markerLocatieIdentificaties = markerLocatieIdentificaties;

    this.setMarkerLocaties();
    this.loadAnnotationsForLocaties();

    this.dispatchEvent("imowModel.markerLocatieIdentificaties");
  }

  private loadAnnotationsForLocaties() {
    this.loadGebiedsaanwijzingenForLocaties();
    this.loadActiviteitlocatieaanduidingenForLocaties();
    this.loadOmgevingsnormenForLocaties();
    this.loadTekstenForLocaties();
  }

  private setMarkerLocaties() {
    const markerLocaties = this.markerLocatieIdentificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]);
    if ((this.markerLocaties.length != markerLocaties.length) || this.markerLocaties.some((locatie, i) => locatie != markerLocaties[i])) {
      this.markerLocaties = markerLocaties;
    }
  }

  setPlan(plan) {
    this.plan = plan;

    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});
    this.displayModel.setComponent(null);

    this.loadTekstenForLocaties();
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
      const url = environment.dsoUrl + (tekstType.match(/tekst$/)? (tekstType + "en/"): (tekstType + "s/")) + identificatie + (!tekstType.match(/^ontwerp/)? ("?" + this.timeModel.futureParams): "");
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          const tekst: any = response;
          this.teksten[identificatie] = tekst;
          tekst.documentIdentificatie = tekst.documentIdentificatie || tekst.documentTechnischId.split("_akn_nl_bill")[0].replace(/_/g, "/");
          tekst.timeRequested = this.timeModel.time;
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
        const url = environment.dsoUrl + (tekstType + "s/") + identificatie + (!tekstType.match(/^ontwerp/)? ("?" + this.timeModel.futureParams): "");
        this.numLoadingD++;
        this.http.get(url, options).subscribe(
          response => {
            if (component.inheritedTeksten != null) {
              const inheritedTekst: any = response;
              this.teksten[identificatie] = inheritedTekst;
              inheritedTekst.documentIdentificatie = inheritedTekst.documentIdentificatie || inheritedTekst.documentTechnischId.split("_akn_nl_bill")[0].replace(/_/g, "/");
              inheritedTekst.timeRequested = this.timeModel.time;
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
    if ((this.locaties[identificatie] == null) || (this.locaties[identificatie].locatieType == "weeslocatie")) {
      locatie = this.locaties[identificatie] = Object.assign(this.locaties[identificatie] || {}, locatie);
      locatie.viewName = locatie.noemer || "naamloze locatie";
      if (locatie.omvat == null) {
        if (locatie.boundingBox != null) {
          const bb = locatie.boundingBox;
          locatie.viewEnvelope = new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
        }
      } else {
        if (locatie.omvat._embedded != null) {  // Because of inconsistency between direct locaties and embedded locaties.
          locatie.omvat = (locatie.omvat._embedded.locaties || []).concat(locatie.omvat._embedded.ontwerpLocaties || []);
        }
        if (locatie.omvat.every(sublocatie => sublocatie.boundingBox)) {
          locatie.viewEnvelope = new GeometryCollection(locatie.omvat.map(sublocatie => {
            const bb = sublocatie.boundingBox;
            return new Envelope(bb.minx, bb.miny, bb.maxx, bb.maxy);
          })).getEnvelope();
        }
        locatie.omvat.forEach((sublocatie, i) => {
          const identificatie = sublocatie.technischId || sublocatie.identificatie;
          if ((this.locaties[identificatie] == null) || (this.locaties[identificatie].locatieType == "weeslocatie")) {
            sublocatie = this.locaties[identificatie] = Object.assign(this.locaties[identificatie] || {}, sublocatie);
            sublocatie.viewName = sublocatie.noemer || "naamloze locatie";
          } else {
            sublocatie = this.locaties[identificatie];
            locatie.omvat[i] = sublocatie;
          }
          sublocatie.groepen = sublocatie.groepen || [];
          sublocatie.groepen.push(locatie);
        });
      }
    }
  }

  private loadGebiedsaanwijzingenForLocaties() {
    this.unload(this.gebiedsaanwijzingenForLocatiesLoader);

    const newLocatieIdentificaties = this.markerLocatieIdentificaties.filter(identificatie => {
      const locatie = this.locaties[identificatie];
      if ((locatie == null) || (locatie.gebiedsaanwijzingen == null)) {
        return true;
      }
      locatie.gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        this.loadTekstenForAnnotation(gebiedsaanwijzing, !gebiedsaanwijzing.technischId? "gebiedsaanwijzing": "ontwerpgebiedsaanwijzing", "");
      });
      return false;
    });
    this.gebiedsaanwijzingenForLocatiesLoader.locatieIdentificaties = newLocatieIdentificaties;

    [false, true].forEach(ontwerp => {
      const locatieIdentificaties = newLocatieIdentificaties.filter(identificatie => (identificatie[2] == "_") == ontwerp);
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
        (!annotationType.match(/^ontwerp/)? ["now", "future"]: [false]).forEach(timeType => {
          const url = environment.dsoUrl + annotationType + "en/_zoek?page=0&size=200" + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam) + "&_expand=true&_expandScope=locaties" + (annotationType.match(/^ontwerp/)? ",ontwerplocaties": "");
          const i = -1 + this.gebiedsaanwijzingenForLocatiesLoader.subscriptions.push(this.http.post(url, post, options).subscribe(
            response => {
              (Object.values(response["_embedded"])[0] as any[]).forEach(gebiedsaanwijzing => {
                const id = gebiedsaanwijzing.technischId || (gebiedsaanwijzing.identificatie + "|" + gebiedsaanwijzing.geregistreerdMet.versie);
                if (this.gebiedsaanwijzingen[id] == null) {
                  this.gebiedsaanwijzingen[id] = gebiedsaanwijzing;
                  gebiedsaanwijzing.timeRequested = this.timeModel.time;
                  this.processLocaties(gebiedsaanwijzing);
                  this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
                }
                gebiedsaanwijzing = this.gebiedsaanwijzingen[id];
                this.loadTekstenForAnnotation(gebiedsaanwijzing, annotationType, "");
                this.linkLocatiesToAnnotation(locatieIdentificaties, gebiedsaanwijzing, annotationType);
              });

              this.finalizeSubscription(this.gebiedsaanwijzingenForLocatiesLoader, i);
            },
            error => {
              this.unload(this.gebiedsaanwijzingenForLocatiesLoader);
            }
          ));
        });
      });
    });
  }

  private loadActiviteitlocatieaanduidingenForLocaties() {
    this.unload(this.activiteitlocatieaanduidingenForLocatiesLoader);

    const newLocatieIdentificaties = this.markerLocatieIdentificaties.filter(identificatie => {
      if (!identificatie.match(/gm/) || this.regelingModel.regelingen.some(regeling => regeling.locatieIdentificatie == identificatie)) {
        return false;
      }
      const locatie = this.locaties[identificatie];
      if ((locatie == null) || (locatie.activiteitlocatieaanduidingen == null)) {
        return true;
      }
      locatie.activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
      });
      return false;
    });
    this.activiteitlocatieaanduidingenForLocatiesLoader.locatieIdentificaties = newLocatieIdentificaties;

    [false, true].forEach(ontwerp => {
      const locatieIdentificaties = newLocatieIdentificaties.filter(identificatie => (identificatie[2] == "_") == ontwerp);
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
      (!ontwerp? ["activiteitlocatieaanduiding"/*, "ontwerpactiviteitlocatieaanduiding"*/]: ["ontwerpactiviteitlocatieaanduiding"]).forEach(annotationType => {  // TODO fix in OZON
        (!annotationType.match(/^ontwerp/)? ["now", "future"]: [false]).forEach(timeType => {
          const url = environment.dsoUrl + annotationType + "en/_zoek?page=0&size=200" + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam) + "&_expand=true&_expandScope=locaties" + (annotationType.match(/^ontwerp/)? ",ontwerplocaties": "");
          const i = -1 + this.activiteitlocatieaanduidingenForLocatiesLoader.subscriptions.push(this.http.post(url, post, options).subscribe(
            response => {
              (Object.values(response["_embedded"])[0] as any[]).forEach(activiteitlocatieaanduiding => {
                const regeltekstIdentificatie = (activiteitlocatieaanduiding._links.kwalificeertVastgesteld || activiteitlocatieaanduiding._links.kwalificeert).href.match(/(ontwerpRegeltekstTechnischId|regeltekstIdentificatie)=([^\&]+)/)[2];
                const id = regeltekstIdentificatie + "|" + activiteitlocatieaanduiding.identificatie;
                if (this.activiteitlocatieaanduidingen[id] == null) {
                  this.activiteitlocatieaanduidingen[id] = activiteitlocatieaanduiding;
                  activiteitlocatieaanduiding.timeRequested = this.timeModel.time;
                  this.processLocaties(activiteitlocatieaanduiding);
                  this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
                  this.assignSuper(activiteitlocatieaanduiding);
                }
                activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[id];
                this.loadTekstenForActiviteitlocatieaanduiding(activiteitlocatieaanduiding, "");
                this.linkLocatiesToAnnotation(locatieIdentificaties, activiteitlocatieaanduiding, annotationType);
              });

              this.finalizeSubscription(this.activiteitlocatieaanduidingenForLocatiesLoader, i);
            },
            error => {
              this.unload(this.activiteitlocatieaanduidingenForLocatiesLoader);
            }
          ));
        });
      });
    });
  }

  private loadOmgevingsnormenForLocaties() {
    this.unload(this.omgevingsnormenForLocatiesLoader);

    const newLocatieIdentificaties = this.markerLocatieIdentificaties.filter(identificatie => {
      const locatie = this.locaties[identificatie];
      if ((locatie == null) || (locatie.normwaarden == null)) {
        return true;
      }
      locatie.normwaarden.forEach(normwaarde => {
        this.loadTekstenForAnnotation(normwaarde.omgevingsnorm, !normwaarde.omgevingsnorm.technischId? "omgevingsnorm": "ontwerpomgevingsnorm", "");
      });
      return false;
    });
    this.omgevingsnormenForLocatiesLoader.locatieIdentificaties = newLocatieIdentificaties;

    [false, true].forEach(ontwerp => {
      const locatieIdentificaties = newLocatieIdentificaties.filter(identificatie => (identificatie[2] == "_") == ontwerp);
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
        (!annotationType.match(/^ontwerp/)? ["now", "future"]: [false]).forEach(timeType => {
          const url = environment.dsoUrl + annotationType + "en/_zoek?page=0&size=200" + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam) + "&_expand=true&_expandScope=locaties" + (annotationType.match(/^ontwerp/)? ",ontwerplocaties": "");
          const i = -1 + this.omgevingsnormenForLocatiesLoader.subscriptions.push(this.http.post(url, post, options).subscribe(
            response => {
              (Object.values(response["_embedded"])[0] as any[]).forEach(omgevingsnorm => {
                const id = omgevingsnorm.technischId || (omgevingsnorm.identificatie + "|" + omgevingsnorm.geregistreerdMet.versie);
                if (this.omgevingsnormen[id] == null) {
                  this.omgevingsnormen[id] = omgevingsnorm;
                  omgevingsnorm.timeRequested = this.timeModel.time;
                  omgevingsnorm.normwaarde.forEach(normwaarde => {

                    if (!normwaarde._embedded) normwaarde._embedded = omgevingsnorm._embedded;  // OZON bug

                    this.processLocaties(normwaarde);
                  });
                  this.decorateOmgevingsnorm(omgevingsnorm);
                }
                omgevingsnorm = this.omgevingsnormen[id];
                this.loadTekstenForAnnotation(omgevingsnorm, annotationType, "");
                omgevingsnorm.normwaarde.forEach(normwaarde => {
                  this.linkLocatiesToAnnotation(locatieIdentificaties, normwaarde, "normwaarde");
                });
              });

              this.finalizeSubscription(this.omgevingsnormenForLocatiesLoader, i);
            },
            error => {
              this.unload(this.omgevingsnormenForLocatiesLoader);
            }
          ));
        });
      });
    });
  }

  private processLocaties(annotation) {
    if (annotation._embedded == null) {
      return;
    }

    annotation.locaties = [];
    (annotation._embedded.locaties || []).concat(annotation._embedded.ontwerpLocaties || []).forEach(locatie => {
      const identificatie = locatie.technischId || locatie.identificatie;
      this.processLocatie(locatie);
      locatie = this.locaties[identificatie];
      annotation.locaties.push(locatie);
    });
    delete annotation._embedded;

    this.setMarkerLocaties();
  }

  private assignSuper(activiteitlocatieaanduiding) {
    const locatieIdentificaties = activiteitlocatieaanduiding.locaties.map(locatie => locatie.technischId || locatie.identificatie).sort();
    const id = [activiteitlocatieaanduiding.betreftEenActiviteit.identificatie, activiteitlocatieaanduiding.activiteitregelkwalificatie.waarde].concat(locatieIdentificaties).join("|");
    if (this.activiteitlocatieaanduidingen[id] == null) {
      const superActiviteitlocatieaanduiding = Object.assign({}, activiteitlocatieaanduiding, {superId: id, teksten: []});
      this.activiteitlocatieaanduidingen[id] = superActiviteitlocatieaanduiding;
    }
    activiteitlocatieaanduiding.super = this.activiteitlocatieaanduidingen[id];
  }

  private loadTekstenForAnnotation(annotation, annotationType, direction) {
    if (annotation.teksten != null) {
      return;
    }

    annotation.teksten = [];
    const ontwerp = !!annotation.technischId;
    (!ontwerp? (annotationType.match(/^gebiedsaanwijzing$/)? ["regelteksten", "divisieannotaties"/*, "ontwerpregelteksten", "ontwerpdivisieannotaties"*/]: ["regelteksten"/*, "ontwerpregelteksten"*/]):
               (annotationType.match(/^ontwerpgebiedsaanwijzing$/)? ["ontwerpregelteksten", "ontwerpdivisieannotaties"]: ["ontwerpregelteksten"])
    ).forEach(tekstenType => {
      (!tekstenType.match(/^ontwerp/)? ["now", "future"]: [false]).forEach(timeType => {
        const options = environment.dsoOptions;
        const url = environment.dsoUrl + tekstenType + "?" + annotationType + (!ontwerp? ("Identificatie=" + annotation.identificatie): ("TechnischId=" + annotation.technischId)) + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam);
        this["numLoading" + direction]++;
        this.http.get(url, options).subscribe(
          response => {
            if (annotation.teksten != null) {
              (Object.values(response["_embedded"])[0] as any[]).forEach(tekst => {
                const id = tekst.technischId || (tekst.identificatie + "|" + tekst.geregistreerdMet.versie);
                if (this.teksten[id] == null) {
                  this.teksten[id] = tekst;
                  tekst.documentIdentificatie = tekst.documentIdentificatie || tekst.documentTechnischId.split("_akn_nl_bill")[0].replace(/_/g, "/");
                  tekst.timeRequested = this.timeModel.time;
                }
                tekst = this.teksten[id];
                if (!annotation.teksten.includes(tekst)) {  // Workaround for "future duplicates".
                  annotation.teksten.push(tekst);
                }
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
    if (activiteitlocatieaanduiding.teksten != null) {
      return;
    }

    activiteitlocatieaanduiding.teksten = [];
    const regeltekstIdentificatie = (activiteitlocatieaanduiding._links.kwalificeertVastgesteld || activiteitlocatieaanduiding._links.kwalificeert).href.match(/(ontwerpRegeltekstTechnischId|regeltekstIdentificatie)=([^\&]+)/)[2];
    const ontwerp = (regeltekstIdentificatie[2] == "_");
    (!ontwerp? ["regelteksten"/*, "ontwerpregelteksten"*/]: ["ontwerpregelteksten"]).forEach(tekstenType => {
      (!tekstenType.match(/^ontwerp/)? ["now", "future"]: [false]).forEach(timeType => {
        const options = environment.dsoOptions;
        const url = environment.dsoUrl + tekstenType + "/" + regeltekstIdentificatie + "?" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam);
        this["numLoading" + direction]++;
        this.http.get(url, options).subscribe(
          response => {
            if (activiteitlocatieaanduiding.teksten != null) {
              let tekst: any = response;
              const id = tekst.technischId || (tekst.identificatie + "|" + tekst.geregistreerdMet.versie);
              if (this.teksten[id] == null) {
                this.teksten[id] = tekst;
                tekst.documentIdentificatie = tekst.documentIdentificatie || tekst.documentTechnischId.split("_akn_nl_bill")[0].replace(/_/g, "/");
                tekst.timeRequested = this.timeModel.time;
              }
              tekst = this.teksten[id];
              if (!activiteitlocatieaanduiding.teksten.includes(tekst)) {  // Workaround for "future duplicates".
                activiteitlocatieaanduiding.teksten.push(tekst);
              }
              if (!activiteitlocatieaanduiding.super.teksten.includes(tekst)) {  // Not a workaround.
                activiteitlocatieaanduiding.super.teksten.push(tekst);
              }
            }
            this["numLoading" + direction]--;
          },
          error => {
            delete activiteitlocatieaanduiding.teksten;
            this["numLoading" + direction]--;
          }
        );
      });
    });
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
      const url = environment.dsoUrl + annotationType + "en?" + tekstType + (!tekst.technischId? ("Identificatie=" + tekst.identificatie): ("TechnischId=" + tekst.technischId)) + "&" + (!annotationType.match(/^ontwerp/)? this.timeModel.getVersionParams(this.plan): this.timeModel.nowParam);
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (tekst.gebiedsaanwijzingen != null) {
            (Object.values(response["_embedded"])[0] as any[]).forEach(gebiedsaanwijzing => {
              const id = gebiedsaanwijzing.technischId || (gebiedsaanwijzing.identificatie + "|" + gebiedsaanwijzing.geregistreerdMet.versie);
              if (this.gebiedsaanwijzingen[id] == null) {
                this.gebiedsaanwijzingen[id] = gebiedsaanwijzing;
                gebiedsaanwijzing.timeRequested = this.timeModel.time;
                this.decorateGebiedsaanwijzing(gebiedsaanwijzing);
              }
              gebiedsaanwijzing = this.gebiedsaanwijzingen[id];
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
    if (gebiedsaanwijzing.viewName.toLowerCase() == gebiedsaanwijzing.groep.waarde) {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde;
    } else if ((gebiedsaanwijzing.groep.waarde != "overig") && !gebiedsaanwijzing.viewName.includes(gebiedsaanwijzing.groep.waarde)) {
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.groep.waarde + " - " + gebiedsaanwijzing.viewName;
      gebiedsaanwijzing.viewName = gebiedsaanwijzing.viewName.replace(/^(\w+) - \1[^\w]{2,}/, "$1 - ");
    }
  }

  private loadActiviteitlocatieaanduidingenForTekst(tekst, direction) {
    if ((tekst._links.beschrijftActiviteiten == null) && (tekst._links.beschrijftActiviteitenVastgesteld == null)) {
      return;
    }
    if (tekst.activiteitlocatieaanduidingen != null) {
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
    const url = environment.dsoUrl + (!tekst.technischId? "": "ontwerp") + "activiteitlocatieaanduidingen/_zoek?page=0&size=200" + "&" + (!tekst.technischId? this.timeModel.getVersionParams(this.plan): this.timeModel.nowParam) + "&_expand=true&_expandScope=locaties" + (tekst.technischId? ",ontwerplocaties": "");
    this["numLoading" + direction]++;
    this.http.post(url, post, options).subscribe(
      response => {
        (Object.values(response["_embedded"])[0] as any[]).forEach(activiteitlocatieaanduiding => {

        //if (tekst.activiteitlocatieaanduidingen != null) {

          const regeltekstIdentificatie = (activiteitlocatieaanduiding._links.kwalificeertVastgesteld || activiteitlocatieaanduiding._links.kwalificeert).href.match(/(ontwerpRegeltekstTechnischId|regeltekstIdentificatie)=([^\&]+)/)[2];
          const id = regeltekstIdentificatie + "|" + activiteitlocatieaanduiding.identificatie;
          if (this.activiteitlocatieaanduidingen[id] == null) {
            this.activiteitlocatieaanduidingen[id] = activiteitlocatieaanduiding;
            activiteitlocatieaanduiding.timeRequested = this.timeModel.time;
            this.processLocaties(activiteitlocatieaanduiding);
            this.decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding);
            this.assignSuper(activiteitlocatieaanduiding);
          }
          activiteitlocatieaanduiding = this.activiteitlocatieaanduidingen[id];
          this.linkActiviteitlocatieaanduidingToTekst(activiteitlocatieaanduiding, tekst);
          tekst.activiteitlocatieaanduidingen.push(activiteitlocatieaanduiding);

        //}

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
    if (!activiteitlocatieaanduiding.super.teksten.includes(tekst)) {
      activiteitlocatieaanduiding.super.teksten.push(tekst);
    }
  }

  private decorateActiviteitlocatieaanduiding(activiteitlocatieaanduiding) {
    const activiteit = activiteitlocatieaanduiding.betreftEenActiviteit;
    const activiteitregelkwalificatie = activiteitlocatieaanduiding.activiteitregelkwalificatie;
    if (activiteitregelkwalificatie.waarde != "anders geduid") {
      activiteitlocatieaanduiding.viewName = (activiteit.naam || activiteit.groep.waarde).trim() + " - " + activiteitregelkwalificatie.waarde;
    } else if ((activiteitlocatieaanduiding.locaties.length > 1) || this.regelingModel.regelingen.some(regeling => regeling.locatieIdentificatie == (activiteitlocatieaanduiding.locaties[0].technischId || activiteitlocatieaanduiding.locaties[0].identificatie)) || (activiteitlocatieaanduiding.locaties[0].noemer == null)) {
      activiteitlocatieaanduiding.viewName = (activiteit.naam || activiteit.groep.waarde).trim();
    } else {
      activiteitlocatieaanduiding.viewName = activiteitlocatieaanduiding.locaties.map(locatie => locatie.noemer).join(", ");
      activiteitlocatieaanduiding.viewActName = (activiteit.naam || activiteit.groep.waarde).trim();
    }
    activiteitlocatieaanduiding.viewType = activiteit.groep.waarde
      .replace(/^bouwactiviteit ruimtelijk/, "bouwen als ruimtelijke activiteit")
      .replace(/^bouwactiviteit technisch/, "bouwen als technische activiteit")
      .replace(/^dienstverleningsactiviteit/, "dienstverlening")
      .replace(/^exploitatieactiviteit (bedrijf|kantoor)/, "exploitatie van een $1")
      .replace(/^exploitatieactiviteit (detailhandel|horeca)/, "exploitatie van $1")
      .replace(/^gebruiken-van-bouwwerkenactiviteit/, "gebruiken van bouwwerken")
      .replace(/^gelegenheid-tot-zwemmen-en-baden-biedenactiviteit/, "gelegenheid bieden tot zwemmen en baden")
      .replace(/^herstructureringsactiviteit/, "herstructurering")
      .replace(/^in-stand-houden-van-bouwwerkenactiviteit/, "in stand houden van bouwwerken")
      .replace(/^kampeeractiviteit/, "kamperen")
      .replace(/^landinrichtingsactiviteit/, "landinrichting")
      .replace(/^parkeeractiviteit/, "parkeren")
      .replace(/^planologische gebruiksactiviteit/, "planologisch gebruik")
      .replace(/^recreatieactiviteit/, "recreatie")
      .replace(/^sloopactiviteit/, "slopen")
      .replace(/^verrichten-van-werken-en-werkzaamhedenactiviteit/, "verrichten van werken en werkzaamheden")
      .replace(/^wateronttrekkingsactiviteit/, "onttrekken van water")
      .replace(/^woonactiviteit/, "wonen");
  }

  private loadOmgevingsnormenForTekst(tekst) {
    if ((tekst._links.beschrijftOmgevingsnormen == null) && (tekst._links.beschrijftOmgevingsnormenVastgesteld == null)) {
      return;
    }
    if (tekst.omgevingsnormen != null) {
      tekst.omgevingsnormen.forEach(omgevingsnorm => {
        this.loadTekstenForAnnotation(omgevingsnorm, !omgevingsnorm.technischId? "omgevingsnorm": "ontwerpomgevingsnorm", "D");
      });
      return;
    }

    tekst.omgevingsnormen = [];
    (!tekst.technischId? ["omgevingsnorm"]: ["omgevingsnorm", "ontwerpomgevingsnorm"]).forEach(annotationType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + annotationType + "en?" + (!tekst.technischId? ("regeltekstIdentificatie=" + tekst.identificatie): ("ontwerpRegeltekstTechnischId=" + tekst.technischId)) + "&" + (!annotationType.match(/^ontwerp/)? this.timeModel.getVersionParams(this.plan): this.timeModel.nowParam);
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (tekst.omgevingsnormen != null) {
            (Object.values(response["_embedded"])[0] as any[]).forEach(omgevingsnorm => {
              const id = omgevingsnorm.technischId || (omgevingsnorm.identificatie + "|" + omgevingsnorm.geregistreerdMet.versie);
              if (this.omgevingsnormen[id] == null) {
                this.omgevingsnormen[id] = omgevingsnorm;
                omgevingsnorm.timeRequested = this.timeModel.time;
                omgevingsnorm.normwaarde.forEach(normwaarde => {
                  this.processLocaties(normwaarde);
                });
                this.decorateOmgevingsnorm(omgevingsnorm);
              }
              omgevingsnorm = this.omgevingsnormen[id];
              this.loadTekstenForAnnotation(omgevingsnorm, annotationType, "D");
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
    if ((omgevingsnorm.groep.waarde == "overig") && (omgevingsnorm.type.waarde == omgevingsnorm.viewName)) {
      omgevingsnorm.viewType = "omgevingsnorm";
    } else if (omgevingsnorm.groep.waarde == "overig") {
      omgevingsnorm.viewType = omgevingsnorm.type.waarde;
    } else if (omgevingsnorm.type.waarde == omgevingsnorm.viewName) {
      omgevingsnorm.viewType = omgevingsnorm.groep.waarde;
    } else {
      omgevingsnorm.viewType = omgevingsnorm.groep.waarde + ", " + omgevingsnorm.type.waarde;
    }

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
      normwaarde.viewType = omgevingsnorm.viewType;
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
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "hoofdlijnen?" + (!tekst.technischId? ("divisieannotatieIdentificatie=" + tekst.identificatie): ("ontwerpdivisieannotatieTechnischId=" + tekst.technischId)) + (!ontwerp? ("&" + this.timeModel.futureParams): "");
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
      const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "locaties/" + identificatie + "?" + (!ontwerp? this.timeModel.getVersionParams(plan): this.timeModel.nowParam);
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
      return;
    }

    annotation.locaties = [];
    (!annotation.technischId && !annotation.omgevingsnorm?.technischId? ["locaties"]: ["locaties", "ontwerplocaties"]).forEach(locatiesType => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + locatiesType + "?" + annotationType + (!annotation.technischId? ("Identificatie=" + annotation.identificatie): ("TechnischId=" + annotation.technischId)) + ((annotationType == "activiteitlocatieaanduiding")? ("&activiteitIdentificatie=" + annotation.betreftEenActiviteit.identificatie): "") + ((locatiesType == "locaties")? ("&" + this.timeModel.futureParams): "");
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.locaties != null) {
            const identificaties = (Object.values(response["_embedded"])[0] as any[]).map(locatie => locatie.technischId || locatie.identificatie);
            this.loadLocaties(annotation, locatiesType, identificaties);
          }
          this.numLoadingD--;
        },
        error => {
          delete annotation.locaties;
          this.numLoadingD--;
        }
      );
    });
  }

  private loadLocaties(annotation, locatiesType, identificaties) {
    const knownLocaties = identificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]);
    const unknownIdentificaties = identificaties.filter(identificatie => !this.locaties[identificatie]);

    knownLocaties.forEach(locatie => {
      annotation.locaties.push(locatie);
    });

    unknownIdentificaties.forEach(identificatie => {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + locatiesType + "/" + identificatie + ((locatiesType == "locaties")? ("?" + this.timeModel.futureParams): "");
      this.numLoadingD++;
      this.http.get(url, options).subscribe(
        response => {
          if (annotation.locaties != null) {
            let locatie = response;
            this.processLocatie(locatie);
            locatie = this.locaties[identificatie];
            annotation.locaties.push(locatie);
          }
          this.numLoadingD--;
        },
        error => {
          delete annotation.locaties;
          this.numLoadingD--;
        }
      );
    });
  }

  private loadTekstenForLocaties() {
    this.unload(this.tekstenForLocatiesLoader);

    if (this.plan == null) {
      this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null, filtered: null, selected: null});
      this.displayModel.setComponent(null);
      return;
    }
    if (this.markerLocatieIdentificaties.length == 0) {
      this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {specific: null});
      return;
    }

    const planIdentificatie = this.plan.technischId || this.plan.identificatie;
    const newLocatieIdentificaties = this.markerLocatieIdentificaties.filter(identificatie => {
      const locatie = this.locaties[identificatie];
      if ((locatie == null) || (locatie.teksten == null) || (locatie.teksten[planIdentificatie] == null)) {
        return true;
      }
      return false;
    });
    const newIdentificatiesNonRegelingsgebied = newLocatieIdentificaties.filter(identificatie => (identificatie != this.plan.locatieIdentificatie));
    const newIdentificatiesRegelingsgebied = newLocatieIdentificaties.filter(identificatie => (identificatie == this.plan.locatieIdentificatie));
    if (newIdentificatiesNonRegelingsgebied.length + newIdentificatiesRegelingsgebied.length == 0) {
      this.setSpecificComponentIdentificaties();
      return;
    }
    this.tekstenForLocatiesLoader.locatieIdentificaties = newLocatieIdentificaties;
    this.tekstenForLocatiesLoader.planIdentificatie = planIdentificatie;

    (!this.plan.technischId? [false]: [false, true]).forEach(ontwerp => {
      [false, true].forEach(regelingsgebied => {
        const locatieIdentificaties = (!regelingsgebied? newIdentificatiesNonRegelingsgebied: newIdentificatiesRegelingsgebied).filter(identificatie => (identificatie[2] == "_") == ontwerp);
        if (locatieIdentificaties.length == 0) {
          return;
        }

        (!ontwerp? ["regelteksten"/*, "divisieannotaties"*/, "ontwerpregelteksten"/*, "ontwerpdivisieannotaties"*/]: ["ontwerpregelteksten"/*, "ontwerpdivisieannotaties"*/]).forEach(tekstenType => {
          if (!!this.plan.technischId != !!tekstenType.match(/^ontwerp/)) {
            return;
          }

          (!tekstenType.match(/^ontwerp/)? ["now"/*, "future"*/]: [false]).forEach(timeType => {
            this.loadPage(planIdentificatie, ontwerp, regelingsgebied, locatieIdentificaties, tekstenType, timeType, 0);
          });
        });
      });
    });
  }

  private loadPage(planIdentificatie, ontwerp, regelingsgebied, locatieIdentificaties, tekstenType, timeType, page) {
    const options = environment.dsoOptions;
    const post = {
      zoekParameters: [{
        parameter: !ontwerp? "locatie.identificatie": "ontwerplocatie.technischId",
        zoekWaarden: locatieIdentificaties
      }, {
        parameter: !this.plan.technischId? "documentIdentificatie": "ontwerpdocument.technischId",
        zoekWaarden: [planIdentificatie]
      }]
    };
    const url = environment.dsoUrl + tekstenType + "/_zoek?page=" + page + "&size=200&sort=volgordeNummer,asc" + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam) + ((!regelingsgebied || (page == 0))? ("&_expand=true&_expandScope=locaties" + (tekstenType.match(/^ontwerp/)? ",ontwerplocaties": "")): "");
    const i = -1 + this.tekstenForLocatiesLoader.subscriptions.push(this.http.post(url, post, options).subscribe(
      response => {
        (Object.values(response["_embedded"])[0] as any[]).forEach(tekst => {
          const id = tekst.technischId || (tekst.identificatie + "|" + tekst.geregistreerdMet.versie);
          if (this.teksten[id] == null) {
            this.teksten[id] = tekst;
            tekst.documentIdentificatie = tekst.documentIdentificatie || tekst.documentTechnischId.split("_akn_nl_bill")[0].replace(/_/g, "/");
            tekst.timeRequested = this.timeModel.time;
            this.processLocaties(tekst);
          } else if (this.teksten[id].locaties == null) {
            this.teksten[id]._embedded = tekst._embedded;
            this.processLocaties(this.teksten[id]);
          }
          tekst = this.teksten[id];
          if (!regelingsgebied || (page == 0)) {
            this.linkLocatiesToTekst(locatieIdentificaties, tekst, planIdentificatie);
          } else {
            this.linkLocatiesToTekst([locatieIdentificaties[0]], tekst, planIdentificatie);
          }
        });
        this.setSpecificComponentIdentificaties();
        const numPages = response["page"].totalPages;
        if ((page == 0) && (numPages > 1)) {
          for (let i = 1; i < numPages; i++) {
            this.loadPage(planIdentificatie, ontwerp, regelingsgebied, locatieIdentificaties, tekstenType, timeType, i);
          }
        }

        this.finalizeSubscription(this.tekstenForLocatiesLoader, i);
      },
      error => {
        this.unload(this.tekstenForLocatiesLoader);
      }
    ));
  }

  private linkLocatiesToAnnotation(locatieIdentificaties, annotation, annotationType) {
    const propertyName = annotationType.replace(/^ontwerp|e$/g, "") + "en";
    locatieIdentificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]).forEach(locatie => {
      locatie[propertyName] = locatie[propertyName] || [];
      if (annotation.locaties.includes(locatie)) {
        if (!locatie[propertyName].includes(annotation)) {  // Workaround for "future duplicates".
          locatie[propertyName].push(annotation);
        }
      }
    });
  }

  private linkLocatiesToTekst(locatieIdentificaties, tekst, planIdentificatie) {
    locatieIdentificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]).forEach(locatie => {
      locatie.teksten = locatie.teksten || {};
      locatie.teksten[planIdentificatie] = locatie.teksten[planIdentificatie] || [];
      if (tekst.locaties.includes(locatie)) {
        if (!locatie.teksten[planIdentificatie].includes(tekst)) {  // Workaround for "future duplicates".
          locatie.teksten[planIdentificatie].push(tekst);
        }
      }
    });
  }

  private finalizeSubscription(loader, i) {
    loader.subscriptions[i] = false;
    if (loader.subscriptions.every(subscription => !subscription)) {
      this.decorateOrphanLocaties(loader);
      this.resetLoader(loader);
    }
  }

  private decorateOrphanLocaties(loader) {
    if (loader.locatieIdentificaties != null) {
      if (loader.annotationsType != null) {
        loader.locatieIdentificaties.forEach(identificatie => {
          this.processOrphanLocatie(identificatie);
          this.locaties[identificatie][loader.annotationsType] = this.locaties[identificatie][loader.annotationsType] || [];
        });
      } else {  // (loader.planIdentificatie != null)
        loader.locatieIdentificaties.forEach(identificatie => {
          this.processOrphanLocatie(identificatie);
          this.locaties[identificatie].teksten = this.locaties[identificatie].teksten || {};
          this.locaties[identificatie].teksten[loader.planIdentificatie] = this.locaties[identificatie].teksten[loader.planIdentificatie] || [];
        });
      }
      this.setMarkerLocaties();
    }
  }

  private processOrphanLocatie(locatieIdentificatie) {
    if (this.locaties[locatieIdentificatie] == null) {
      const locatie: any = (locatieIdentificatie[2] != "_")?
        {identificatie: locatieIdentificatie}:
        {identificatie: locatieIdentificatie.split("_akn_nl_bill")[0].replace(/_/g, "."), technischId: locatieIdentificatie};
      locatie.locatieType = "weeslocatie";
      locatie.viewName = " " + locatie.identificatie;
      this.locaties[locatieIdentificatie] = locatie;
    }
  }

  private unload(loader) {
    loader.subscriptions.filter(subscription => subscription).forEach(subscription => subscription.unsubscribe());
    if (loader.locatieIdentificaties != null) {
      if (loader.annotationsType != null) {
        loader.locatieIdentificaties.filter(identificatie => this.locaties[identificatie]).map(identificatie => this.locaties[identificatie]).forEach(locatie => delete locatie[loader.annotationsType]);
      } else {  // (loader.planIdentificatie != null)
        loader.locatieIdentificaties.filter(identificatie => this.locaties[identificatie]?.teksten).map(identificatie => this.locaties[identificatie]).forEach(locatie => delete locatie.teksten[loader.planIdentificatie]);
      }
    }
    this.resetLoader(loader);
  }

  private resetLoader(loader) {
    loader.subscriptions = [];
    if (loader.locatieIdentificaties != null) {
      loader.locatieIdentificaties = [];
      if (loader.planIdentificatie != null) {
        loader.planIdentificatie = null;
      }
    }
  }

  setSpecificComponentIdentificaties() {
    const planIdentificatie = this.plan.technischId || this.plan.identificatie;
    const locaties = this.markerLocatieIdentificaties.filter(identificatie => this.locaties[identificatie]?.teksten?.[planIdentificatie]).map(identificatie => this.locaties[identificatie]);
    const tekstenHash = {};
    locaties.forEach(locatie => locatie.teksten[planIdentificatie].forEach(tekst => tekstenHash[tekst.technischId || tekst.identificatie] = tekst));
    const teksten = Object.values(tekstenHash);
    if (teksten.length > 0) {
      this.setComponentIdentificaties("specific", teksten);
    }
  }

  setComponentIdentificaties(type, teksten, label = null) {
    const componentIdentificaties = {};

    componentIdentificaties[(teksten[0].documentTechnischId || teksten[0].documentIdentificatie) + "__body"] = "trail";
    teksten.forEach(tekst => {
      const pad = tekst.documentKruimelpad;  //.sort((a, b) => (a.identificatie.length < b.identificatie.length)? -1: (a.identificatie.length > b.identificatie.length)? 1: 0);  // Workaround for sorting bug in backend.
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
    const components = this.displayModel.tabs[2].components;
    let i = components.findIndex(component => component.identificatie == this.componentIdentificaties.selected);
    let failSafe = -1;
    do {
      if (++i >= components.length) {
        i = 0;
        if (++failSafe >= 1) {
          throw new Error("Fail-safe activated.");
        }
      }
    } while (this.componentIdentificaties[type][components[i].technischId || components[i].identificatie] != "target");

    const component = components[i];
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {selected: component.identificatie});
    this.displayModel.setComponent(component);
  }

  toggleAnnotationLayer(annotation) {
    const i = this.allAnnotationLayers.findIndex(annotationLayer => annotationLayer.annotation == annotation);
    if (i > -1) {
      this.allAnnotationLayers.splice(i, 1);
    } else {
      this.allAnnotationLayers.push(new AnnotationLayer(this.imowValueModel, annotation));
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
