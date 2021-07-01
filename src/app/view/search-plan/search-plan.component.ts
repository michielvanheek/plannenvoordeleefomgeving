import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { OmgevingsdocumentModelService } from "src/app/model/omgevingsdocument-model.service";
import { PlanDecoratorService } from "src/app/model/plan-decorator.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { StateModelService } from "src/app/model/state-model.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-search-plan",
  templateUrl: "./search-plan.component.html",
  styleUrls: ["./search-plan.component.scss"]
})
export class SearchPlanComponent {
  s = "";
  warning = null;
  idns = [];
  plannen = [];

  constructor(
    private http: HttpClient,
    public stateModel: StateModelService,
    private planDecorator: PlanDecoratorService,
    private omgevingsdocumentModel: OmgevingsdocumentModelService,
    public planModel: PlanModelService
  ) { }

  loadPlannen(s) {
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
      this.http.get(url).subscribe(response => {
        this.warning = null;
        this.idns = response["idns"];
        if (this.idns.length == 0) {
          this.warning = "NO_PLANS_FOUND_BY_IDN_AKN";
        }
      });
    } else {
      const match = this.s.match(/^(\/akn(\/(n(l(\/(a(c(t)?)?)?)?)?)?)?)(.*)/i);
      if (match != null) {  // Search by AKN.
        this.plannen = [];
  
        this.s = match[1].toLowerCase() + match[9];
        if ((this.s.match(/^\/akn(\/(n(l(\/(a(c(t(\/.*)?)?)?)?)?)?)?)?$/) == null)) {
          this.warning = "WRONG_LEAD";
          this.idns = [];
          return;
        }
        if (this.s.length < 16) {
          this.warning = "TOO_SHORT_FOR_AKN";
          this.idns = [];
          return;
        }

        this.warning = null;
        this.idns = this.omgevingsdocumentModel.identificaties.filter(identificatie => !identificatie.toLowerCase().indexOf(this.s.toLowerCase())).sort();
        if (this.idns.length == 0) {
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

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/naam/" + s;
        this.http.get(url).subscribe(response => {
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
                this.loadPlannen(join);
                return;
              }
            }
            this.plannen = [];
          } else if (response["ErrorType"] == "TOO_MANY_PLANS_FOUND") {
            if (s != this.s.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")) {
              this.warning = "NO_PLANS_FOUND_BY_NAME";
            } else {
              this.warning = "TOO_MANY_PLANS_FOUND_BY_NAME";
            }
            this.plannen = [];
          } else {
            this.warning = null;
            this.plannen = response["plannen"];
            this.plannen.forEach(plan => this.planDecorator.decoratePlan(plan, false));
          }

          const keywords = this.s.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "").split(/[^a-zA-Z0-9]+/);
          const numPlannen = new Array(keywords.length).fill(0);
          this.plannen = this.plannen.concat(this.omgevingsdocumentModel.omgevingsdocumenten).filter(plan => {
            return keywords.every((keyword, i) => {
              if (Object.values(plan).some(planValue => (planValue + "").toLowerCase().includes(keyword.toLowerCase()))) {
                numPlannen[i]++;
                return true;
              }
              return false;
            });
          });
          this.plannen.sort((a, b) => {
            if (a.naam.replace("'s-", "").toLowerCase() > b.naam.replace("'s-", "").toLowerCase()) {
              return 1;
            }
            return -1;
          });
          if (this.plannen.length > 0) {
            this.warning = null;
          } else if (numPlannen[0] > 0) {
            this.warning = "FOUND_BUT_FILTERED:" + keywords.slice(0, numPlannen.indexOf(0)).join(" ") + ":" + keywords[numPlannen.indexOf(0)];
          }
        });
      }
    }
  }
}
