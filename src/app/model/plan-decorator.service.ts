import { Injectable } from "@angular/core";
import { OverheidModelService } from "./overheid-model.service";
import { PlanLevelModelService } from "./plan-level-model.service";

@Injectable({
  providedIn: "root"
})
export class PlanDecoratorService {

  constructor(
    private overheidModel: OverheidModelService,
    private planLevelModel: PlanLevelModelService
  ) { }

  bestemmingsplanType(plan) {
    switch(plan.typePlan) {
      case "bestemmingsplan":                                 //-----------------------------------------------------
          return 0;                                           // mother plan: no; dedicated procedure (dossier): yes
      case "Chw bestemmingsplan":
          return 0;
      case "gemeentelijk plan; bestemmingsplan artikel 10":
          return 0;
      case "rijksbestemmingsplan":
          return 0;
      case "inpassingsplan":
          return 0;
      case "beheersverordening":
          return 0;
      case "aanwijzingsbesluit":
          return 0;
      case "reactieve aanwijzing":
          return 0;
      case "exploitatieplan":
          return 0;
      case "wijzigingsplan":                                  //-----------------------------------------------------
          return 1;                                           // mother plan: yes; dedicated procedure (dossier): yes
      case "gemeentelijk plan; wijzigingsplan artikel 11":
          return 1;
      case "uitwerkingsplan":
          return 1;
      case "gemeentelijk plan; uitwerkingsplan artikel 11":
          return 1;
      case "omgevingsvergunning":
          return 1;
      case "projectbesluit":
          return 1;
      case "tijdelijke ontheffing buitenplans":
          return 1;
      case "voorbereidingsbesluit":                           //-----------------------------------------------------
          return 2;                                           // mother plan: yes; dedicated procedure: no
      case "gemeentelijk plan; voorbereidingsbesluit":        // (potentially in dossier mother plan)
          return 2;
      case "gerechtelijke uitspraak":
          return 2;
      default:                                                //-----------------------------------------------------
          return -1;                                          // not a bestemmingsplan
    }
  }

  status(plan) {
    const bestemmingsplanType = this.bestemmingsplanType(plan);
    if (bestemmingsplanType == -1) {
      return plan.planStatus;
    }
    if ((plan.planStatus == "geconsolideerd") || (plan.planStatus == "geconsolideerde versie")) {
      if (plan.dossierStatus == "geconsolideerd") {
        return "geconsolideerd";
      }
      return "onbekend";
    }
    if (bestemmingsplanType == 2) {
      if (plan.dossierStatus == "vervallen") {
        return "vervallen";
      }
      if (plan.dossierStatus == "geconsolideerd") {
        return "onbekend";
      }
      return plan.planStatus;
    }
    if ((plan.planStatus == "vigerend") || (plan.planStatus == "goedgekeurd") || (plan.planStatus == "onherroepelijk")) {
      return plan.planStatus;
    }
    if (plan.planStatus == "vastgesteld") {
      if (plan.dossierStatus == null) {
        return "vastgesteld";
      }
      if ((plan.dossierStatus == "geheel onherroepelijk in werking") || (plan.dossierStatus == "vervallen")) {
        return plan.dossierStatus.replace("geheel onherroepelijk in werking", "onherroepelijk");
      }
      if ((plan.dossierStatus == "in voorbereiding") || (plan.dossierStatus == "geconsolideerd")) {
        return "onbekend";
      }
      if (plan.typePlan == "beheersverordening") {
        return "onbekend";
      }
      return plan.dossierStatus;
    }
    if (plan.dossierStatus == "vervallen") {
      return "vervallen";
    }
    if (plan.dossierStatus == "in voorbereiding") {
      return plan.planStatus;
    }
    return "onbekend";
  }

  decoratePlan(plan, includeStatus) {
    plan.viewOverheidName = plan.naamOverheid;
    if ((plan.viewOverheidName == null) || (plan.viewOverheidName == "gemeente")) {
      if (this.overheidModel.overheden[plan.overheidsCode] != null) {
        plan.viewOverheidName = this.overheidModel.overheden[plan.overheidsCode].name;
      }
    }
    
    plan.viewPlanLevel = this.planLevelModel.getPlanLevel(plan);
    
    if (includeStatus) {
      plan.viewStatus = this.status(plan);
    }
    
    const split = plan.datum.split("-");
    plan.viewDate = split[2] + "-" + split[1] + "-" + split[0];
  }
}
