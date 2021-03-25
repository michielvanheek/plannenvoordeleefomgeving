import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlanLevelModelService {
  planLevels = [
    {id: 0, name: "Gemeente", adjective: "gemeentelijk plan", types: [{
      name: "bestemmingsplannen",
      filter: val => {
        return (
          ((val.viewPlanLevel.name == "Gemeente") && (val.typePlan != "structuurvisie")) ||
          ((val.viewPlanLevel.name == "Provincie") && (val.typePlan != "provinciale verordening") && (val.typePlan != "structuurvisie")) ||
          ((val.viewPlanLevel.name == "Rijk") && (val.typePlan != "amvb") && (val.typePlan != "regeling") && (val.typePlan != "structuurvisie"))
        );
      }
    }, {
      name: "structuurvisies",
      filter: val => {
        return ((val.viewPlanLevel.name == "Gemeente") && (val.typePlan == "structuurvisie"));
      }
    }]},
    {id: 1, name: "Provincie", adjective: "provinciaal plan", types: [{
      name: "bestemmingsplannen",
      filter: val => {
        return false;
      }
    }, {
      name: "verordeningen",
      filter: val => {
        return ((val.viewPlanLevel.name == "Provincie") && (val.typePlan == "provinciale verordening"));
      }
    }, {
      name: "structuurvisies",
      filter: val => {
        return ((val.viewPlanLevel.name == "Provincie") && (val.typePlan == "structuurvisie"));
      }
    }
    ]},
    {id: 2, name: "Rijk", adjective: "rijksplan", types: [{
      name: "bestemmingsplannen",
      filter: val => {
        return false;
      }
    }, {
      name: "regels",
      filter: val => {
        return ((val.viewPlanLevel.name == "Rijk") && ((val.typePlan == "amvb") || (val.typePlan == "regeling")));
      }
    }, {
      name: "structuurvisies",
      filter: val => {
        return ((val.viewPlanLevel.name == "Rijk") && (val.typePlan == "structuurvisie"));
      }
    }]}
  ];
  planLevel = this.planLevels[0];

  setPlanLevel(planLevel) {
    this.planLevel = planLevel;
  }

  getPlanLevel(plan) {
    if (plan.overheidsCode == "0000") {
      return this.planLevels[2];
    }
    if (plan.overheidsCode >= "9900") {
      return this.planLevels[1];
    }
    /*if (plan.naamOverheid != null) {
      if (plan.naamOverheid.toLowerCase().indexOf("provincie") == 0) {
        return "PROVINCIE";
      }
      if ((plan.naamOverheid.toLowerCase().indexOf("rijksoverheid") == 0) || (plan.naamOverheid.toLowerCase().indexOf("ministerie") == 0)) {
        return "RIJK";
      }
    }*/
    return this.planLevels[0];
  }
}
