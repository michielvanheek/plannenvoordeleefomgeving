import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegelingModelService } from "src/app/model/regeling-model.service";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-search-plan",
  templateUrl: "./search-plan.component.html",
  styleUrls: ["./search-plan.component.scss"]
})
export class SearchPlanComponent {
  private httpSubscription = null;
  private sort = (a, b) => (a.datum < b.datum)? 1: (a.datum > b.datum)? -1: (a.naam.replace("'s-", "").toLowerCase() > b.naam.replace("'s-", "").toLowerCase())? 1: -1;

  s = "";
  warning = null;
  idns = [];
  plannen = [];
  showIdentificatie = false;

  constructor(
    private http: HttpClient,
    private planDecorator: PlanDecoratorService,
    private regelingModel: RegelingModelService,
    public planModel: PlanModelService
  ) { }

  search(s = null) {
    if (this.httpSubscription != null) {
      this.httpSubscription.unsubscribe();
      this.httpSubscription = null;
    }

    if (this.s.length == 0) {
      this.warning = null;
      this.idns = [];
      this.plannen = [];
      return;
    }

    const match = this.s.match(/^(NL\.I(M(R(O)?)?)?)(.*)/i);
    if (match != null) {  // Search by IDN.
      this.plannen = [];

      this.s = match[1].toUpperCase() + match[5];
      if ((this.s.match(/^NL\.I(M(R(O(\..*)?)?)?)?$/) == null)) {
        this.warning = "WRONG_LEAD";
        this.idns = [];
        return;
      }
      if (this.s.length < 12) {
        this.warning = "TOO_SHORT_FOR_IDN";
        this.idns = [];
        return;
      }

      const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/id/" + this.s;
      this.httpSubscription = this.http.get(url).subscribe(
        response => {
          this.httpSubscription = null;

          this.idns = response["idns"];
          if (this.idns.length > 0) {
            this.warning = null;
          } else {
            this.warning = "NO_PLANS_FOUND_BY_IDN_AKN";
          }
        },
        error => {
          this.httpSubscription = null;
        }
      );
    } else {
      const match = this.s.match(/^(\/akn(\/(n(l(\/(a(c(t)?)?)?)?)?)?)?)(.*)/i);
      if (match != null) {  // Search by AKN.
        this.idns = [];
  
        this.s = match[1].toLowerCase() + match[9];
        if ((this.s.match(/^\/akn(\/(n(l(\/(a(c(t(\/.*)?)?)?)?)?)?)?)?$/) == null)) {
          this.warning = "WRONG_LEAD";
          this.plannen = [];
          return;
        }
        if (this.s.length < 16) {
          this.warning = "TOO_SHORT_FOR_AKN";
          this.plannen = [];
          return;
        }

        const identificatieFilter = regeling => !regeling.identificatie.toLowerCase().indexOf(this.s.toLowerCase());

        this.plannen = this.regelingModel.regelingen.filter(identificatieFilter).sort(this.sort);
        this.showIdentificatie = true;
        if (this.plannen.length > 0) {
          this.warning = null;
        } else {
          this.warning = "NO_PLANS_FOUND_BY_IDN_AKN";
        }
      } else {  // Search by name.
        this.idns = [];

        if (s == null) {
          s = this.s.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
        }
        if (s.length == 0) {
          this.warning = null;
          this.plannen = [];
          return;
        }
        if (s.length < 4) {
          this.warning = "TOO_SHORT_FOR_NAME";
          this.plannen = [];
          return;
        }

        const keywords = this.s.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "").split(/[^a-zA-Z0-9]+/);
        const keywordFilter = regeling => {
          return keywords.every((keyword, i) => {
            if (Object.values(regeling).some(planValue => (planValue + "").toLowerCase().includes(keyword.toLowerCase()))) {
              numPlannen[i]++;
              return true;
            }
            return false;
          });
        };
        const numPlannen = new Array(keywords.length).fill(0);

        this.plannen = this.regelingModel.regelingen.filter(keywordFilter).sort(this.sort);
        this.showIdentificatie = false;
        this.warning = null;

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/naam/" + s;
        this.httpSubscription = this.http.get(url).subscribe(
          response => {
            this.handleSearchByName(response, s, keywords, keywordFilter, numPlannen);
          },
          error => {
            this.handleSearchByName(error.error, s, keywords, keywordFilter, numPlannen);
          }
        );
      }
    }
  }

  private handleSearchByName(response, s, keywords, keywordFilter, numPlannen) {
    this.httpSubscription = null;

    if (response["ErrorType"] == "NO_PLANS_FOUND") {
      const split = s.split(/[^a-zA-Z0-9]+/);
      if (split.length == 1) {
        this.warning = "NO_PLANS_FOUND_BY_NAME";
      } else {
        split.pop();
        const join = split.join(" ");
        if (join.length < 4) {
          this.warning = "NO_PLANS_FOUND_BY_NAME";
        } else {
          this.search(join);
          return;
        }
      }
    } else if (response["ErrorType"] == "TOO_MANY_PLANS_FOUND") {
      if (s != this.s.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")) {
        this.warning = "NO_PLANS_FOUND_BY_NAME";
      } else {
        this.warning = "TOO_MANY_PLANS_FOUND_BY_NAME";
      }
    } else {
      const plannen = response["plannen"];
      plannen.forEach(plan => this.planDecorator.decoratePlan(plan, false));
      this.plannen = this.plannen.concat(plannen.filter(keywordFilter)).sort(this.sort);
    }

    if (this.plannen.length > 0) {
      this.warning = null;
    } else if (numPlannen[0] > 0) {
      this.warning = "FOUND_BUT_FILTERED:" + keywords.slice(0, numPlannen.indexOf(0)).join(" ") + ":" + keywords[numPlannen.indexOf(0)];
    }
  }
}
