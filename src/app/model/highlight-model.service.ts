import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";
import { Feature, WKTConverter } from "ng-niney";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HighlightModelService {
  private subscription: Subscription = null;

  highlights = [{features: []}, {features: []}];

  constructor(private http: HttpClient) { }

  loadHighlight(plan) {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    if (plan == null) {
      this.setHighlight(0, null);
      return;
    }
    if (plan.geometrie != null) {
      this.setHighlight(0, plan.geometrie);
      return;
    }

    const url = environment.websiteProxyUrl + "web-roo/rest/search/plan/id/" + plan.identificatie + "/geometrie";
    this.subscription = this.http.get(url).subscribe(
      response => {
        this.subscription = null;
        plan.geometrie = response["geometrie"];
        this.setHighlight(0, plan.geometrie);
      },
      response => {
        this.subscription = null;
      }
    );
  };

  setHighlight(i, wkt) {
    if (wkt == null) {
      this.highlights[i].features = [];
    } else {
      const path = (new WKTConverter()).wktToCoordPath(wkt);
      const feature = new Feature(null, [path]);
      this.highlights[i].features = [feature];
    }
  }
}
