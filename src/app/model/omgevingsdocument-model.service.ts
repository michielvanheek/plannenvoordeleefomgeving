import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OmgevingsdocumentModelService {
  private resolve = null;
  private numLoading = {
    "false": 0,
    "true": 0  // Ontwerp.
  };

  regelingen = [];
  identificaties = null;

  constructor(
    private http: HttpClient,
    private planDecorator: PlanDecoratorService
  ) {
    this.loadRegelingen(false, 0);
    this.loadRegelingen(true, 0);
  }

  private loadRegelingen(ontwerp, page) {
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + (ontwerp? "ontwerp": "") + "regelingen?page=" + page + "&size=200&sort=" + (!ontwerp? "identificatie": "technischId");
    this.numLoading[ontwerp]++;
    this.http.get(url, options).subscribe(
      response => {
        this.regelingen = this.regelingen.concat(response["_embedded"].regelingen || response["_embedded"].ontwerpRegelingen);

        const numPages = response["page"].totalPages;
        if ((page == 0) && (numPages > 1)) {
          for (let i = 1; i < numPages; i++) {
            this.loadRegelingen(ontwerp, i);
          }
        }
        this.numLoading[ontwerp]--;
        if (this.numLoading["false"] + this.numLoading["true"] == 0) {
          this.processRegelingen();
        }
      },
      error => {
        this.numLoading[ontwerp]--;
        // TODO handle error
      }
    );
  }

  private processRegelingen() {
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
        "beginGeldigheid": "2021-06-04",
        "beginInwerking": "2021-06-04",
        "tijdstipRegistratie": "2022-05-02T14:15:22.684408",
        "versie": 1
      },
      "type": {
        "waarde": "Ministeriële Regeling"
      },
      "citeerTitel": "Omgevingsregeling (test historisch)",
      "opschrift": "Omgevingsregeling"
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
        "beginGeldigheid": "2021-06-03",
        "beginInwerking": "2021-06-03",
        "tijdstipRegistratie": "2022-05-02T14:15:22.684408",
        "versie": 1
      },
      "type": {
        "waarde": "Ministeriële Regeling"
      },
      "citeerTitel": "Omgevingsregeling (test historischer)",
      "opschrift": "Omgevingsregeling"
    };
    this.regelingen.push(predecessor);
    this.regelingen.push(prepredecessor);
    this.regelingen.forEach(regeling => {
      if (regeling.identificatie == "/akn/nl/act/mnre1034/2019/reg0001" && !regeling.technischId) {
        regeling.predecessor = predecessor; predecessor.successor = regeling;
        predecessor.predecessor = prepredecessor; prepredecessor.successor = predecessor;
        console.log(regeling);
      }
      if (regeling.aangeleverdDoorEen == null) {
        console.warn("Regeling " + regeling.identificatie + " has no owner.");
        return;
      }
      if (regeling._links.heeftBeoogdeOpvolgers != null) {
        const technischIds = regeling._links.heeftBeoogdeOpvolgers.map(bo => bo.href.match(/\/([^/]+)$/)[1]);
        const ontwerpSuccessors = technischIds.map(technischId => this.regelingen.find(regeling => regeling.technischId == technischId));
        regeling.ontwerpSuccessors = ontwerpSuccessors;
        ontwerpSuccessors.forEach(ontwerpSuccessor => ontwerpSuccessor.predecessor = regeling);
      }
      this.planDecorator.decorateOmgevingsdocument(regeling);
      this.planDecorator.decoratePlan(regeling, true);
    });
    this.identificaties = this.regelingen.map(regeling => regeling.identificatie);

    this.resolve(true);
  }

  getPromise() {
    return new Promise((resolve, reject)=> { this.resolve = resolve });
  }
}
