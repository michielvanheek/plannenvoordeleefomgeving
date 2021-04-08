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
  plannenMessages = [];
//  plannenMessageTypes = {
//    "NONE_FOUND_BUT": {text: "Geen plannen gevonden met <strong>%1</strong> in de naam, nu aan het zoeken naar <strong>%2</strong>...", level: "info"}
//  };

  constructor(
    private http: HttpClient,
    public stateModel: StateModelService,
    private planDecorator: PlanDecoratorService,
    private omgevingsdocumentModel: OmgevingsdocumentModelService,
    public planModel: PlanModelService
  ) { }

  loadPlannen(s) {
    if (s == null) {
      s = this.s;
    }
    if (s.length == 0) {
      this.warning = null;
      this.idns = [];
      this.plannen = [];
      this.plannenMessages = [];
      return;
    }

    const match = this.s.match(/^(NL\.I(M(R(O)?)?)?)(.*)/i);
    if (match != null) {  // Search by IDN.
      console.log(match);
      this.plannen = [];
      this.plannenMessages = [];

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
        this.plannenMessages = [];
  
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

        if (s.length < 4) {
          this.warning = "TOO_SHORT_FOR_NAME";
          this.plannen = [];
          return;
        }

        const url = environment.websiteProxyUrl + "web-roo/rest/search/plannen/naam/" + s;
        this.http.get(url).subscribe(response => {
          this.warning = null;
          if (response["ErrorType"] == "NO_PLANS_FOUND") {
            this.plannen = [];
            const split = s.split(/[^a-zA-Z0-9]+/);
            if (split.length == 1) {
              this.warning = "NO_PLANS_FOUND_BY_NAME";
            } else {
              split.pop();
              const join = split.join(" ");
              if (join.length < 4) {
                this.warning = "NO_PLANS_FOUND_BY_NAME";
              } else {
                this.plannenMessages.push(["NONE_FOUND_BUT", s, join], 2500);  // timeout push
                this.loadPlannen(join);
              }
            }
            return;
          }
          if (response["ErrorType"] == "TOO_MANY_PLANS_FOUND") {
            this.warning = "TOO_MANY_PLANS_FOUND_BY_NAME";
            this.plannen = [];
            return;
          }

          response["plannen"].forEach(plan => this.planDecorator.decoratePlan(plan, false));

          this.plannen = response["plannen"].concat(this.omgevingsdocumentModel.omgevingsdocumenten).filter(plan => {
            const keywords = this.s.split(/[^a-zA-Z0-9]+/);
            return keywords.filter(keyword =>
              Object.values(plan).filter(planValue =>
                (planValue + "").toLowerCase().includes(keyword.toLowerCase())
              ).length > 0
            ).length == keywords.length;
          });
          if (this.plannen.length == 0) {
            this.warning = "FOUND_BUT_FILTERED:" + s + ":" + this.s.replace(s, "");
          }
        });
      }
    }
  }
}
