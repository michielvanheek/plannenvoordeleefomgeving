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
  groepen = {};
  gebiedsaanwijzingen = {};
  omgevingsnormen = {};
  regelteksten = {};
  numLoading = 0;

  planIdentificatie = null;
  componentIdentificaties = {flat: null, specific: null, filtered: null, selected: null};
  numPagesToGo = {regelteksten: 0, divisies: 0};

  constructor(private http: HttpClient) { }

  setMarkerLocaties(markerLocaties) {
    this.markerLocaties = markerLocaties;

    this.processLocaties(markerLocaties);

    this.loadComponentIdentificaties();
  }

  setPlanIdentificatie(planIdentificatie) {
    this.planIdentificatie = planIdentificatie;

    this.loadComponentIdentificaties();
  }

  private processLocaties(locaties) {
    const newLocaties = [];
    locaties.forEach(locatie => {
      const identificatie = locatie.identificatie;
      if (this.locaties[identificatie] == null) {
        this.locaties[identificatie] = locatie;
        if ((locatie.locatieType == "Gebied") || (locatie.locatieType == "Lijn") || (locatie.locatieType == "Punt")) {
          locatie.groepen = this.groepen[identificatie];
        } else if (locatie.locatieType != "Ambtsgebied") {  // locatieType == *groep
          this.loadGroepLocaties(locatie);
        }
        newLocaties.push(locatie);
      }
    });
    if (newLocaties.length > 0) {
      this.loadGebiedsaanwijzingen(newLocaties);
      this.loadOmgevingsnormen(newLocaties);
      //this.loadActiviteitlocatieaanduidingen(newLocaties);
    }
  }

  private loadGroepLocaties(groep) {
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "locaties/" + groep.identificatie;
    this.numLoading++;
    this.http.get(url, options).subscribe(
      response => {
        response["omvat"].forEach(locatie => {
          const identificatie = locatie.identificatie;
          if (this.groepen[identificatie] == null) {
            this.groepen[identificatie] = {};
          }
          this.groepen[identificatie][response["identificatie"]] = true;

          if (this.locaties[identificatie] != null) {
            this.locaties[identificatie].groepen = this.groepen[identificatie];
          }
        });
        this.numLoading--;
      },
      error => {
        this.numLoading--;
      }
    );
  }

  private loadGebiedsaanwijzingen(locaties) {
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
            if (this.gebiedsaanwijzingen[gebiedsaanwijzing.identificatie] == null) {
              this.gebiedsaanwijzingen[gebiedsaanwijzing.identificatie] = gebiedsaanwijzing;
              this.loadRegelteksten(gebiedsaanwijzingType, gebiedsaanwijzing);
              this.loadLocaties(gebiedsaanwijzingType, gebiedsaanwijzing);
            }
          });
        });
        this.numLoading--;
      },
      error => {
        this.numLoading--;
      }
    );
  }

  private loadOmgevingsnormen(locaties) {
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
          if (this.omgevingsnormen[omgevingsnorm.identificatie] == null) {
            this.omgevingsnormen[omgevingsnorm.identificatie] = omgevingsnorm;
            this.loadRegelteksten("omgevingsnormen", omgevingsnorm);
            omgevingsnorm.normwaarde.forEach(normwaarde => {
              normwaarde.omgevingsnorm = omgevingsnorm;
              this.loadLocaties("omgevingsnormen/" + omgevingsnorm.identificatie + "/normwaarden", normwaarde);
            });
          }
        });
        this.numLoading--;
      },
      error => {
        this.numLoading--;
      }
    );
  }

  private loadRegelteksten(gebiedsaanwijzingType, regeltekstParent) {
    regeltekstParent.regelteksten = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + gebiedsaanwijzingType + "/" + regeltekstParent.identificatie + "/regelteksten";
    this.numLoading++;
    (regeltekstParent => {
      this.http.get(url, options).subscribe(
        response => {
          response["_embedded"].regelteksten.forEach(regeltekst => {
            if (this.regelteksten[regeltekst.identificatie] == null) {
              this.regelteksten[regeltekst.identificatie] = regeltekst;
            }
            regeltekstParent.regelteksten.push(this.regelteksten[regeltekst.identificatie]);
          });
          this.numLoading--;
        },
        error => {
          this.numLoading--;
        }
      );
    })(regeltekstParent);
  }

  private loadLocaties(typefix, locatieParent) {
    locatieParent.locaties = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + typefix + "/" + locatieParent.identificatie + "/locaties";
    this.numLoading++;
    (locatieParent => {
      this.http.get(url, options).subscribe(
        response => {
          this.processLocaties(response["_embedded"].locaties);
          response["_embedded"].locaties.forEach(locatie => {
            locatieParent.locaties.push(this.locaties[locatie.identificatie]);
          });
          this.numLoading--;
        },
        error => {
          this.numLoading--;
        }
      );
    })(locatieParent);
  }

  private loadComponentIdentificaties() {
    if ((this.markerLocaties.length == 0) || (this.planIdentificatie == null)) {
      this.componentIdentificaties = {flat: this.componentIdentificaties.flat, specific: null, filtered: null, selected: null};
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

  setComponentIdentificaties(type, teksten, cumulative = false) {
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

    this.componentIdentificaties = {
      flat: this.componentIdentificaties.flat,
      specific: (type == "specific")? componentIdentificaties: this.componentIdentificaties.specific,
      filtered: (type == "filtered")? componentIdentificaties: null,
      selected: (componentIdentificaties[this.componentIdentificaties.selected] == "target")? this.componentIdentificaties.selected: this.componentIdentificaties.flat.find(identificatie => componentIdentificaties[identificatie] == "target")
    };
  }

  clearFilteredComponentIdentificaties() {
    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {filtered: null});
  }

  selectNextComponentIdentificatie(type) {
    let i = this.componentIdentificaties.flat.indexOf(this.componentIdentificaties.selected);
    do {
      if (++i >= this.componentIdentificaties.flat.length) {
        i = 0;
      }
    } while (this.componentIdentificaties[type][this.componentIdentificaties.flat[i]] != "target");

    this.componentIdentificaties = Object.assign({}, this.componentIdentificaties, {selected: this.componentIdentificaties.flat[i]});
  }
}
