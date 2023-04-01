import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppEvent } from "../event/AppEvent";
import { AppEventDispatcher } from "../event/AppEventDispatcher";
import { AppEventListener } from "../event/AppEventListener";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { TimeModelService } from "./time-model.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class RegelingModelService extends AppEventDispatcher implements AppEventListener {

  numLoading = 0;

  regelingen = [];
  identificaties = null;

  constructor(
    private http: HttpClient,
    private timeModel: TimeModelService,
    private planDecorator: PlanDecoratorService
  ) {
    super();

    this.timeModel.addEventListener(this);
  }

  appEventHandler(event: AppEvent) {
    if (event.type == "timeModel.time") {
      this.loadRegelingen();
    }
  }

  private loadRegelingen() {
    this.regelingen = [];
    [false, true].forEach(ontwerp => {
      (!ontwerp? ["now", "future"]: [false]).forEach(timeType => {
        this.loadPage(ontwerp, timeType, 0);
      });
    });
  }

  private loadPage(ontwerp, timeType, page) {
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + (!ontwerp? "regelingen": "ontwerpregelingen") + "?page=" + page + "&size=200&sort=" + (!ontwerp? "identificatie": "technischId") + "&" + ((timeType == "now")? this.timeModel.nowParams: (timeType == "future")? this.timeModel.futureParams: this.timeModel.nowParam);
    this.numLoading++;
    this.http.get(url, options).subscribe(
      response => {
        if (ontwerp) {
          this.regelingen = this.regelingen.concat(response["_embedded"].ontwerpRegelingen);
        } else {
          response["_embedded"].regelingen.forEach(regeling => {
            if (!this.regelingen.some(regeling1 => (regeling.identificatie == regeling1.identificatie) && regeling1.geregistreerdMet && (regeling.geregistreerdMet.versie == regeling1.geregistreerdMet.versie))) {
              this.regelingen.push(regeling);
            }
          });
        }

        const numPages = response["page"].totalPages;
        if ((page == 0) && (numPages > 1)) {
          for (let i = 1; i < numPages; i++) {
            this.loadPage(ontwerp, timeType, i);
          }
        }
        this.numLoading--;
        if (this.numLoading == 0) {
          this.processRegelingen();
        }
      },
      error => {
        this.numLoading--;
        // TODO handle error
      }
    );
  }

  private processRegelingen() {
    if (environment.tweakMnre) {
      const predecessor: any = {
        "_links": {
          "heeftRegelingsgebied": {
            "href": "https://service.pre.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v6/locaties/nl.imow-mnre1034.ambtsgebied.LND6030B"
          }
        },
        "identificatie": "/akn/nl/act/mnre1034/2019/reg0001_historisch",
        "aangeleverdDoorEen": {
          "naam": "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
          "bestuurslaag": "ministerie",
          "code": "mnre1034"
        },
        "geregistreerdMet": {
          "beginGeldigheid": "2024-01-01",
          "beginInwerking": "2024-01-01",
          "tijdstipRegistratie": "2021-06-04T14:15:22.684408",
          "versie": 1
        },
        "type": {
          "waarde": "Ministeriële Regeling"
        },
        "citeerTitel": "Omgevingsregeling (2021-versie)",
        "predecessor": "/akn/nl/act/mnre1034/2019/reg0001_historischer|1",
        "successors": ["/akn/nl/act/mnre1034/2019/reg0001|1"]
      };
      const prepredecessor: any = {
        "_links": {
          "heeftRegelingsgebied": {
            "href": "https://service.pre.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v6/locaties/nl.imow-mnre1034.ambtsgebied.LND6030B"
          }
        },
        "identificatie": "/akn/nl/act/mnre1034/2019/reg0001_historischer",
        "aangeleverdDoorEen": {
          "naam": "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
          "bestuurslaag": "ministerie",
          "code": "mnre1034"
        },
        "geregistreerdMet": {
          "beginGeldigheid": "2024-01-01",
          "beginInwerking": "2024-01-01",
          "tijdstipRegistratie": "2021-06-03T14:15:22.684408",
          "versie": 1
        },
        "type": {
          "waarde": "Ministeriële Regeling"
        },
        "citeerTitel": "Omgevingsregeling (2020-versie)",
        "successors": ["/akn/nl/act/mnre1034/2019/reg0001_historisch|1"]
      };
      this.regelingen.push(predecessor);
      this.regelingen.push(prepredecessor);
    }
    this.regelingen.forEach(regeling => {
      if (environment.tweakMnre) {
        if (regeling.identificatie == "/akn/nl/act/mnre1034/2019/reg0001") {
          regeling.geregistreerdMet.beginGeldigheid = "2024-01-01";
          regeling.geregistreerdMet.beginInwerking = "2024-01-01";
          regeling.predecessor = "/akn/nl/act/mnre1034/2019/reg0001_historisch|1";
        }
        if (regeling.type.waarde == "AMvB") {
          regeling.geregistreerdMet.beginGeldigheid = "2024-01-01";
          regeling.geregistreerdMet.beginInwerking = "2024-01-01";
        }
      }
      if (regeling.aangeleverdDoorEen == null) {
        console.warn("Regeling " + regeling.identificatie + " has no owner.");
        return;
      }
      if (regeling._links.heeftBeoogdeOpvolgers != null) {
        const technischIds = regeling._links.heeftBeoogdeOpvolgers.map(bo => bo.href.match(/\/([^/]+)$/)[1]);
        const successors = technischIds.map(technischId => this.regelingen.find(regeling => regeling.technischId == technischId));
        if (successors.some(successor => !successor)) {
          console.warn("Regeling successor does not exist.", regeling);
          delete regeling._links.heeftBeoogdeOpvolgers;
        } else {
          regeling.successors = technischIds;
          successors.forEach(successor => successor.predecessor = regeling.identificatie + "|" + regeling.geregistreerdMet.versie);
          console.log("HEEFT BEOOGD OPVOLGERS", regeling);
        }
      }
/*      if (regeling._links.opvolgerVan) {
        console.log("OPVOLGER VAN", regeling);
      }
      if (regeling.geregistreerdMet?.versie > 1) {
        console.log("TIJDREISBAAR", regeling);
      }
      if (regeling.geregistreerdMet?.beginGeldigheid > this.timeModel.time) {
        console.log("TOEKOMSTIG", regeling);
        if (regeling.geregistreerdMet.versie > 1) {
          console.log("TODO LOAD VERSIONS");
        }
      }*/
      this.planDecorator.decorateRegeling(regeling);
      this.planDecorator.decoratePlan(regeling, true);
    });
    this.identificaties = this.regelingen.map(regeling => regeling.identificatie);

    this.dispatchEvent("regelingModel.regelingen");
  }

  resetVersions(regeling) {
    const historicVersions = regeling.versions.filter(version => (version.eindGeldigheid != null) && (version.eindGeldigheid <= this.timeModel.time));

    const regeling1 = this.regelingen.find(regeling1 => regeling1.viewId == regeling.viewId);
    if (regeling.geregistreerdMet != null) {
      regeling.geregistreerdMet = regeling1.geregistreerdMet;
    }
    if (regeling.procedureverloop != null) {
      regeling.procedureverloop = regeling1.procedureverloop;
    }

    this.setCurrentAndFutureVersions(regeling);
    regeling.versions = regeling.versions.concat(historicVersions);
  }

  loadVersions(regeling) {
    if (regeling.versions != null) {
      return;
    }

    if (environment.tweakMnre) {
      if (regeling.identificatie.indexOf("/akn/nl/act/mnre1034/2019/reg0001") == 0) {
        regeling.versions = [
          this.regelingen.find(regeling => regeling.identificatie == "/akn/nl/act/mnre1034/2019/reg0001").geregistreerdMet,
          this.regelingen.find(regeling => regeling.identificatie == "/akn/nl/act/mnre1034/2019/reg0001_historisch").geregistreerdMet,
          this.regelingen.find(regeling => regeling.identificatie == "/akn/nl/act/mnre1034/2019/reg0001_historischer").geregistreerdMet
        ];
        this.decorateVersion(regeling.versions[0], "/akn/nl/act/mnre1034/2019/reg0001", null);
        this.decorateVersion(regeling.versions[1], "/akn/nl/act/mnre1034/2019/reg0001_historisch", null);
        this.decorateVersion(regeling.versions[2], "/akn/nl/act/mnre1034/2019/reg0001_historischer", null);
        return;
      }
    }

    this.setCurrentAndFutureVersions(regeling);
    this.loadHistoricVersions(regeling);
  }

  private setCurrentAndFutureVersions(regeling) {
    regeling.versions = [];
    this.regelingen.filter(regeling1 => (regeling1.identificatie == regeling.identificatie) || this.isRepealed(regeling1, regeling) || this.isRepealed(regeling, regeling1)).forEach(regeling1 => {
      const version = !regeling1.technischId? regeling1.geregistreerdMet: regeling1.procedureverloop;
      this.decorateVersion(version, regeling1.identificatie, regeling1.technischId);
      regeling.versions.push(version);
    });
    regeling.versions.sort((a, b) => ((a.beginInwerking || a.bekendOp) < (b.beginInwerking || b.bekendOp))? 1: ((a.beginInwerking || a.bekendOp) > (b.beginInwerking || b.bekendOp))? -1: 0);
  }

  private isRepealed(regeling, regeling1) {
    return (regeling._links.opvolgerVan != null) && (regeling._links.opvolgerVan.href.match(/regelingen\/([^\/]+)\/voorkomens/)[1] == regeling1.identificatie.replace(/[^a-zA-Z0-9]/g, "_"));
  }

  private loadHistoricVersions(regeling) {
    const versions = regeling.versions.filter(version => version.viewId[0] != "_");
    const oldestVersion = versions.length? versions[versions.length - 1]: {versie: Number.MAX_SAFE_INTEGER, identificatie: regeling.identificatie};
    if (oldestVersion.versie > 1) {
      const options = environment.dsoOptions;
      const url = environment.dsoUrl + "regelingen/" + oldestVersion.identificatie.replace(/[^a-zA-Z0-9]/g, "_") + "/voorkomens?page=0&size=200&sort=versie,desc";
      this.http.get(url, options).subscribe(
        response => {
          response["_embedded"].voorkomens.forEach(voorkomen => {
            const version = voorkomen.geregistreerdMet;
            if (version.versie < oldestVersion.versie) {
              this.decorateVersion(version, voorkomen.identificatie);
              regeling.versions.push(version);
              if (version.versie == 1) {
                this.loadRepealedVersions(regeling, voorkomen);
              }
            }
          });
        },
        error => {
          delete regeling.versions;
        }
      );
    } else {
      this.loadRepealedVersions(regeling, this.regelingen.find(regeling => (!regeling.technischId? regeling.geregistreerdMet: regeling.procedureverloop) == oldestVersion));
    }
  }

  private loadRepealedVersions(baseRegeling, regeling) {
    if (regeling._links.opvolgerVan != null) {
      const options = environment.dsoOptions;
      const url = regeling._links.opvolgerVan.href + "?page=0&size=200&sort=versie,desc";
      this.http.get(url, options).subscribe(
        response => {
          response["_embedded"].voorkomens.forEach(voorkomen => {
            const version = voorkomen.geregistreerdMet;
            this.decorateVersion(version, voorkomen.identificatie);
            baseRegeling.versions.push(version);
            if (version.versie == 1) {
              this.loadRepealedVersions(baseRegeling, voorkomen);  // Repeat forever?
            }
          });
        },
        error => {
          delete baseRegeling.versions;
        }
      );
    }
  }

  private decorateVersion(version, identificatie, technischId = null) {
    version.viewBeginDate = (version.beginInwerking || version.bekendOp).split("-").reverse().join("-");
    if (version.eindGeldigheid != null) {
      version.viewEndDate = version.eindGeldigheid.split("-").reverse().join("-");
    }
    if (version.tijdstipRegistratie != null) {
      version.viewRegistrationTimestamp = version.tijdstipRegistratie.replace(/^(\d{4})-(\d{2})-(\d{2})T(.*)$/, "$3-$2-$1, $4").replace(/:[^:]+$/, " uur");
    } else {
      version.viewRegistrationTimestamp = version.ontvangenOp.split("-").reverse().join("-");
    }
    version.viewId = technischId || (identificatie + "|" + version.versie);
    version.identificatie = identificatie;
  }
}
