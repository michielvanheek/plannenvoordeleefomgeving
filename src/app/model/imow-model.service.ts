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

  constructor(private http: HttpClient) { }

  setMarkerLocaties(locaties) {
    this.markerLocaties = locaties;

    this.processLocaties(locaties);
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
}
