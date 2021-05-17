import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ImowModelService {
  markerLocaties = [];
  markerLoading = false;

  gebiedsaanwijzingen = {};
  omgevingsnormen = {};
  regelteksten = {};
  locaties = {};
  numLoading = 0;

  constructor(private http: HttpClient) { }

  setMarkerLocaties(locaties) {
    this.markerLocaties = locaties;

    const newLocaties = [];
    locaties.forEach(locatie => {
      if (this.locaties[locatie.identificatie] == null) {
        this.locaties[locatie.identificatie] = locatie;
        //this.loadLocatieLocaties(locatie);
        newLocaties.push(locatie);
      }
    });
    if (newLocaties.length > 0) {
      this.loadGebiedsaanwijzingen(newLocaties);
      this.loadOmgevingsnormen(newLocaties);
      //this.loadActiviteitlocatieaanduidingen(newLocaties);
    }
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
        console.log(response);
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
  }

  private loadLocaties(typefix, locatieParent) {
    locatieParent.locaties = [];
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + typefix + "/" + locatieParent.identificatie + "/locaties";
    this.numLoading++;
    this.http.get(url, options).subscribe(
      response => {
        response["_embedded"].locaties.forEach(locatie => {
          if (this.locaties[locatie.identificatie] == null) {
            this.locaties[locatie.identificatie] = locatie;
            //this.loadLocatieLocaties(locatie);
          }
          locatieParent.locaties.push(this.locaties[locatie.identificatie]);
        });
        this.numLoading--;
      },
      error => {
        this.numLoading--;
      }
    );
  }
}
