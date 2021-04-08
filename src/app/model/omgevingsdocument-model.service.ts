import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OmgevingsdocumentModelService {
  private resolve = null;

  omgevingsdocumenten = null;
  identificaties = null;

  constructor(
    private http: HttpClient,
    private planDecorator: PlanDecoratorService
  ) {
    this.loadOmgevingsdocumenten();
  }

  private loadOmgevingsdocumenten() {
    const options = environment.dsoOptions;
    const url = environment.dsoUrl + "omgevingsdocumenten?page=0&size=2000";
    this.http.get(url, options).subscribe(response => {
      this.omgevingsdocumenten = response["_embedded"].omgevingsdocumenten;
      this.omgevingsdocumenten.forEach(omgevingsdocument => {
        this.planDecorator.decorateOmgevingsdocument(omgevingsdocument);
        this.planDecorator.decoratePlan(omgevingsdocument, true);
      });
      this.identificaties = this.omgevingsdocumenten.map(omgevingsdocument => omgevingsdocument.identificatie);

      this.resolve(true);
    });
  }

  getPromise() {
    return new Promise((resolve, reject)=> { this.resolve = resolve });
  }
}
