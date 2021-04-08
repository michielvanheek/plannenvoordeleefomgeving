import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlanLevelModelService {
  planLevels = [
    {id: 0, name: "Gemeente", adjective: "gemeentelijk plan", types: [{
      name: "regelgeving",
      filter: val => {
        return (
          ((val.viewPlanLevel.name == "Gemeente") && (val.typePlan != "structuurvisie") && (val.typePlan != "omgevingsvisie")) ||
          ((val.viewPlanLevel.name == "Provincie") && (val.typePlan != "provinciale verordening") && (val.typePlan != "structuurvisie") && (val.typePlan != "omgevingsverordening") && (val.typePlan != "omgevingsvisie")) ||
          ((val.viewPlanLevel.name == "Rijk") && (val.typePlan != "amvb") && (val.typePlan != "regeling") && (val.typePlan != "structuurvisie") && (val.typePlan != "AMvB") && (val.typePlan != "ministeriële regeling") && (val.typePlan != "omgevingsvisie"))
        );
      }
    }, {
      name: "beleid",
      filter: val => {
        return ((val.viewPlanLevel.name == "Gemeente") && ((val.typePlan == "structuurvisie") || (val.typePlan == "omgevingsvisie")));
      }
    }]},
    {id: 1, name: "Provincie", adjective: "provinciaal plan", types: [{
      name: "regelgeving",
      filter: val => {
        return ((val.viewPlanLevel.name == "Provincie") && (val.typePlan == "omgevingsverordening"));
      }
    }, {
      name: "beleid",
      filter: val => {
        return ((val.viewPlanLevel.name == "Provincie") && (val.typePlan == "omgevingsvisie"));
      }
    }
    ]},
    {id: 2, name: "Waterschap", adjective: "waterschapsplan", types: [{
      name: "regelgeving",
      filter: val => {
        return ((val.viewPlanLevel.name == "Waterschap") && (val.typePlan == "waterschapsverordening"));
      }
    }, {
      name: "beleid",
      filter: val => {
        return ((val.viewPlanLevel.name == "Waterschap") && (val.typePlan == "omgevingsvisie"));
      }
    }]},
    {id: 3, name: "Rijk", adjective: "rijksplan", types: [{
      name: "regelgeving",
      filter: val => {
        return ((val.viewPlanLevel.name == "Rijk") && ((val.typePlan == "AMvB") || (val.typePlan == "ministeriële regeling")) && (val.naam != "Voorlopige oplossing functionele structuur"));
      }
    }, {
      name: "beleid",
      filter: val => {
        return ((val.viewPlanLevel.name == "Rijk") && (val.typePlan == "omgevingsvisie"));
      }
    }]}
  ];
  planLevel = this.planLevels[0];

  setPlanLevel(planLevel) {
    this.planLevel = planLevel;
  }

  getPlanLevel(plan) {
    if (plan.overheidsCode == "0000") {
      return this.planLevels[3];  // rijk
    }
    if (plan.overheidsCode >= "9900") {
      return this.planLevels[1];  // provincie
    }
    if (plan.overheidsCode >= "9000") {
      return this.planLevels[2];  // waterschap
    }
    return this.planLevels[0];    // gemeente
  }
}
