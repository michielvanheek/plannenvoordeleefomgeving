export class Planalysis {
    planItems = null;
    dossierSupersets = {};
    dossierSets = {};

    constructor(plannen, planLevels, parapluItems) {
        if (plannen == null) {
            return;
        }

        this.addPlannen(plannen, planLevels);
        this.analyze(parapluItems);
    }

    private addPlannen(plannen, planLevels) {
        this.planItems = planLevels.map(planLevel => {
            return planLevel.types.map(type => {
                const filteredPlannen = plannen.filter(type.filter);
                const sortedPlannen = filteredPlannen.sort((a, b) => (a["datum"] > b["datum"])? -1: (a["datum"] < b["datum"])? 1: (a["identificatie"] < b["identificatie"])? -1: (a["identificatie"] > b["identificatie"])? 1: 0);
                return sortedPlannen.map(plan => {
                    return { plan: plan, rule: null, helpText: null };
                });
            });
        });
    }

    private analyze(parapluItems) {
        for (let i = 0; i < this.planItems[0][0].length; i++) {
            const planItem = this.planItems[0][0][i];
            const plan = planItem.plan;

            if ((plan.dossierId != null) && (plan.viewStatus != "vervallen") && (plan.viewStatus != "geconsolideerd")) {
                const dossierSuperset = this.dossierSupersets[plan.dossierId];
                if (dossierSuperset == null) {
                    const dossierSet = this.dossierSets[plan.identificatie] = {plannen: [plan], mainPlan: plan};
                    this.dossierSupersets[plan.dossierId] = [dossierSet];
                } else if (
                    (plan.typePlan != dossierSuperset[dossierSuperset.length - 1].mainPlan.typePlan) ||
                    (this.statusLevel(plan) >= this.statusLevel(dossierSuperset[dossierSuperset.length - 1].mainPlan))
                ) {
                    const dossierSet = this.dossierSets[plan.identificatie] = {plannen: [plan], mainPlan: plan};
                    dossierSuperset.push(dossierSet);
                } else {
                    dossierSuperset[dossierSuperset.length - 1].plannen.push(plan);
                    this.planItems[0][0].splice(i--, 1);
                }
            }
        }

        for (let i = 0; i < this.planItems[0][0].length; i++) {
            const planItem = this.planItems[0][0][i];
            const plan = planItem.plan;

            if (plan.dossierId != null) {
                const dossierSuperset = this.dossierSupersets[plan.dossierId];
                if (dossierSuperset != null) {
                    for (let j = 0; j < dossierSuperset.length; j++) {
                        if ((dossierSuperset[j].mainPlan == plan) && (dossierSuperset[j].plannen.length <= 1)) {
                            dossierSuperset.splice(j--, 1);
                            if (dossierSuperset.length == 0) {
                                delete this.dossierSupersets[plan.dossierId];
                            }
                            delete this.dossierSets[plan.identificatie];
                        }
                    }
                }
            }
        }

        for (let i = 0; i < this.planItems[0][0].length; i++) {
            const planItem = this.planItems[0][0][i];
            const plan = planItem.plan;

            let rule = "";
            let text = "";

            if (plan.viewStatus == "onbekend") {
                text += " heeft een voor ons onbekende status. U kunt de status van dit plan opvragen bij de " + plan.viewOverheidName + ".";
            } else if (plan.viewStatus == "vervallen") {
                text += " heeft de status <strong>vervallen</strong>. Een vervallen plan heeft geen rechtsgeldigheid.";
            } else if (plan.viewStatus == "geconsolideerd") {
                text += " is een geconsolideerd plan, een samenvoeging van meerdere onderliggende, rechtsgeldige bestemmingsplannen. Een geconsolideerd plan is gemaakt voor een beter overzicht; u kunt er geen rechten aan ontlenen.";
            } else if ((plan.viewStatus == "concept") || (plan.viewStatus == "voorontwerp") || (plan.viewStatus == "ontwerp")) {
                text += " heeft de status <strong>" + plan.viewStatus + "</strong>. Daarmee zou het in de toekomst een geldig plan kunnen worden.";
                if (this.old(plan)) {
                    text += " Het plan is echter al meer dan een jaar oud (" + plan.viewDate + ") en sindsdien nooit vastgesteld. Mogelijk wordt dit plan nooit geldig.";
                } else if (this.additional(plan, parapluItems)) {
                    rule = "ca";
                    text += " Het plan is wel een " + this.additional(plan, parapluItems) + ". Daarom zal dit plan altijd bekeken moeten worden in samenhang met";
                }
            } else if (this.additional(plan, parapluItems)) {
                rule = "a";
                text += " is een " + this.additional(plan, parapluItems) + ". Daarom moet dit plan altijd bekeken worden in samenhang met";
            } else {
                text += " heeft de status <strong>" + plan.viewStatus + "</strong>.";
                if (plan.viewStatus == "vastgesteld") {
                    rule = "pu";
                    text += " De " + plan.viewOverheidName + " heeft het bestemmingsplan vastgesteld, maar eventueel kunnen bezwaar en beroep nog van invloed zijn op dit plan.";
                    if (this.old(plan)) {
                        text += " De vaststellingsdatum (" + plan.viewDate + ") is al meer dan een jaar geleden. Mogelijk loopt er een langdurige gerechtelijke procedure over dit plan. Dit kunt u navragen bij de " + plan.viewOverheidName + ".";
                    }
                } else if (plan.viewStatus == "geheel in werking") {
                    rule = "pu";
                    text += " Daarmee is dit bestemmingsplan nu rechtsgeldig. Er loopt echter een gerechtelijke procedure tegen het plan. De Raad van State zal beslissen of het plan alsnog geheel, gedeeltelijk of helemaal niet rechtsgeldig wordt. Wij kunnen niet zien over welk onderwerp of over welke plek de gerechtelijke procedure gaat. Dit kunt u navragen bij de " + plan.viewOverheidName + ".";
                } else if (plan.viewStatus == "deels in werking") {
                    rule = "pu";
                    text += " Tegen dit bestemmingsplan is een voorlopige voorziening ingesteld. Het plan is nu rechtsgeldig, met uitzondering van de bepalingen in de voorlopige voorziening. De Raad van State zal beslissen of het plan alsnog geheel, gedeeltelijk of helemaal niet rechtsgeldig wordt. Wij kunnen niet zien over welk onderwerp of over welke plek de gerechtelijke procedure gaat. Dit kunt u navragen bij de " + plan.viewOverheidName + ".";
                } else if (plan.viewStatus == "niet in werking") {
                    rule = "pu";
                    text += " Tegen dit bestemmingsplan loopt een gerechtelijke procedure, met als gevolg dat het plan in zijn geheel nog niet rechtsgeldig is. De Raad van State zal beslissen of het plan alsnog geheel, gedeeltelijk of helemaal niet rechtsgeldig wordt. Wij kunnen niet zien over welk onderwerp of over welke plek de gerechtelijke procedure gaat. Dit kunt u navragen bij de " + plan.viewOverheidName + ".";
                } else if ((plan.viewStatus == "vigerend") || (plan.viewStatus == "goedgekeurd") || (plan.viewStatus == "onherroepelijk")) {
                    rule = "u";
                } else if (plan.viewStatus == "deels onherroepelijk in werking") {
                    rule = "pu";
                    text += " Daarmee is dit bestemmingsplan rechtsgeldig, met uitzondering van de onderwerpen en/of plekken waarvan de Raad van State heeft beslist dat ze niet rechtsgeldig zijn. Wij kunnen niet zien welke onderwerpen en/of plekken dat zijn. Dit kunt u navragen bij de " + plan.viewOverheidName + ".";
                }
            }

            planItem.rule = rule;
            planItem.helpText = text;
        }

        for (let i = 0; i < this.planItems[0][0].length; i++) {
            const planItem = this.planItems[0][0][i];
            const plan = planItem.plan;

            const uRelations = this.relations(this.planItems[0][0], i, "u", true);  // includes "pu"
            const aRelations = this.relations(this.planItems[0][0], i, "a", false);
            let text = planItem.helpText;

            if (planItem.rule.indexOf("a") > -1) {
                if (uRelations.above * uRelations.below > 0) {
                    text += " de andere bestemmingsplannen op deze plek.";
                } else if (uRelations.below == 1) {
                    text += " onderliggend bestemmingsplan.";
                } else if (uRelations.below > 1) {
                    text += " onderliggende bestemmingsplannen.";
                } else if (uRelations.above == 1) {
                    text += " bovenliggend bestemmingsplan.";
                } else if (uRelations.above > 1) {
                    text += " bovenliggende bestemmingsplannen.";
                } else {
                    text += " andere plannen op deze plek.";
                }
            } else if (planItem.rule == "u") {
                if (uRelations.both == 0) {
                    text += " Daarmee is dit het rechtsgeldige " + (plan.typePlan != "beheersverordening"? "bestemmings": "") + "plan.";
                    if (aRelations.above > 0) {
                        text += " Maar niet het enige rechtsgeldige plan op deze plek.";
                        if (aRelations.above == 1) {
                            text += " Raadpleeg <em>" + aRelations.abovePlan.naam + "</em>, hierboven, voor de onderwerpen die het betreft.";
                        } else {  // aRelations.above > 1
                            text += " Raadpleeg bovenliggende plannen, bijvoorbeeld <em>" + aRelations.abovePlan.naam + "</em>, voor de onderwerpen die het betreft.";
                        }
                    }
                } else {
                    text += " Daarmee is dit een rechtsgeldig " + (plan.typePlan != "beheersverordening"? "bestemmings": "") + "plan.";
                    if (uRelations.below > 0) {
                        text += " Mogelijk is dit een herziening van het plan <em>" + uRelations.belowPlan.naam + "</em>, hieronder.";
                        if (aRelations.above > 0) {
                            text += " Sowieso is dit niet het enige rechtsgeldige plan op deze plek.";
                            if (aRelations.above == 1) {
                                text += " Raadpleeg <em>" + aRelations.abovePlan.naam + "</em>, hierboven, voor de onderwerpen die het betreft.";
                            } else {  // aRelations.above > 1
                                text += " Raadpleeg bovenliggende plannen, bijvoorbeeld <em>" + aRelations.abovePlan.naam + "</em>, voor de onderwerpen die het betreft.";
                            }
                        }
                    } else {  // uRelations.above > 0
                        text += " Maar mogelijk niet op deze plek. Als het plan <em>" + uRelations.abovePlan.naam + "</em>, hierboven, een <strong>integrale herziening</strong> is van het plan <em>" + plan.naam + "</em>, dan heeft <em>" + plan.naam + "</em> op deze plek geen rechtsgeldigheid meer. Het plan <em>" + uRelations.abovePlan.naam + "</em> kan ook een <strong>gedeeltelijke herziening</strong> zijn. In dat geval moeten beide bestemmingsplannen in samenhang bekeken worden.";
                    }
                }
            }

            planItem.helpText = text;
        }
    }

    statusLevel(plan) {
        switch(plan.planStatus) {
            case "concept":
                return 0;
            case "voorontwerp":
                return 1;
            case "ontwerp":
                return 2;
            case "vastgesteld":
                return 3;
            case "vigerend":
                return 4;
            case "goedgekeurd":
                return 5;
            case "onherroepelijk":
                return 5;
        }
        return -1;
    }

    old(plan) {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const oneYearAgoString = oneYearAgo.toISOString().split("T")[0];
        return (plan.datum < oneYearAgoString);
    }

    additional(plan, parapluItems) {
        if ((plan.typePlan.indexOf("bestemmingsplan") == -1) && (plan.typePlan != "inpassingsplan") && (plan.typePlan != "beheersverordening")) {
            return "<strong>" + plan.typePlan.replace("gemeentelijk plan; ", "") + "</strong>";
        } else if (plan.naam.toLowerCase().indexOf("paraplu") > -1) {
            return "<strong>parapluplan</strong>, een plan met een beperkt aantal onderwerpen";
        } else if (plan.naam.toLowerCase().indexOf("facet") > -1) {
            return "<strong>facetplan (parapluplan)</strong>, een plan met een beperkt aantal onderwerpen";
        } else if (plan.naam.toLowerCase().indexOf("algemene regels") > -1) {
            return "<strong>parapluplan</strong>, een plan met een beperkt aantal onderwerpen";
        } else {
            for (let i = 0; i < parapluItems.length; i++) {
                const parapluItem = parapluItems[i];
                if (plan.naam.toLowerCase().indexOf(parapluItem[0]) > -1) {
                    if (typeof parapluItem[1] == "object") {
                        return "<strong>" + parapluItem[1][0] + "</strong>, een plan dat alleen over " + parapluItem[1][1] + " gaat";
                    } else if (typeof parapluItem[1] == "string") {
                        return "<strong>parapluplan</strong>, een plan dat bijvoorbeeld alleen over " + parapluItem[1] + " gaat";
                    } else if (parapluItem[1]) {
                        return "<strong>parapluplan</strong>, een plan dat bijvoorbeeld alleen over " + parapluItem[0] + " gaat";
                    } else {
                        return false;
                    }
                }
            }
        }
        return false;
    }

    relations(planItems, i, rule, includeOthers) {
        const relations = {above: 0, below: 0, both: 0, abovePlan: null, belowPlan: null};
        for (let j = 0; j < i; j++) {
            if ((planItems[j].rule == rule) || (includeOthers && (planItems[j].rule.indexOf(rule) > -1))) {
                relations.above++;
                if (relations.abovePlan == null) {
                    relations.abovePlan = planItems[j].plan;
                }
            }
        }
        for (let j = i + 1; j < planItems.length; j++) {
            if ((planItems[j].rule == rule) || (includeOthers && (planItems[j].rule.indexOf(rule) > -1))) {
                relations.below++;
                if (relations.belowPlan == null) {
                    relations.belowPlan = planItems[j].plan;
                }
            }
        }
        relations.both = relations.above + relations.below;
        return relations;
    }

    getNumPlannenText() {
        let numPlannenText = null;
        const numGemeentePlannen = this.getNumPlannen(0);
        if (numGemeentePlannen == 1) {
            numPlannenText = "1 gemeentelijk, ";
        } else {
            numPlannenText = (numGemeentePlannen + " gemeentelijke, ");
        }
        numPlannenText += this.getNumPlannen(1) + " provinciale en " + this.getNumPlannen(2) + " rijksplannen";
        return numPlannenText;
    }

    getNumPlannen(i) {
        let numPlannen = 0;
        for (let j = 0; j < this.planItems[i].length; j++) {
            numPlannen += this.planItems[i][j].length;
        }
        return numPlannen;
    }
}
