import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OmgevingsdocumentModelService {
  private resolve = null;
  private loading = {
    "false": true,
    "true": true  // Ontwerp.
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
    this.http.get(url, options).subscribe(response => {
      this.regelingen = this.regelingen.concat(response["_embedded"].regelingen || response["_embedded"].ontwerpRegelingen);

      if (page < response["page"].totalPages - 1) {
        this.loadRegelingen(ontwerp, page + 1);
      } else {
        this.loading[ontwerp] = false;
        if (!this.loading["false"] && !this.loading["true"]) {
          this.processRegelingen();
        }
      }
    });
  }

  private processRegelingen() {
    this.regelingen.forEach(regeling => {
      if (regeling.aangeleverdDoorEen == null) {
        console.warn("Regeling " + regeling.identificatie + " has no owner.");
        return;
      }
      if (regeling._links.heeftBeoogdeOpvolgers != null) {
        console.log("BEOOGDE OPVOLGERS", regeling._links.heeftBeoogdeOpvolgers);
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
