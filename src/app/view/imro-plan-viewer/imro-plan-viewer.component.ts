import { Component, DoCheck } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WKTConverter } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { PlanLevelModelService } from "src/app/model/plan-level-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-imro-plan-viewer",
  templateUrl: "./imro-plan-viewer.component.html",
  styleUrls: ["./imro-plan-viewer.component.scss"]
})
export class ImroPlanViewerComponent implements DoCheck {
  private scale = this.nineyDefault.defaultFocusModel.centerScale.scale;
  private markerXY = this.markerModel.xy;
  private plan = this.planModel.plan;
  private kaart = this.planModel.kaart;

  navState = "place-info";
  mapsVisible = false;
  expertDocumentsVisible = false;

  info = null;
  infos = [[], []];
  hasContents = false;

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    public highlightModel: HighlightModelService,
    public markerModel: MarkerModelService,
    private planLevelModel: PlanLevelModelService,
    public planModel: PlanModelService
  ) {
    this.loadInfo();
  }

  get planTypeAdjective() {
    const plan = this.planModel.plan;
    const planLevelTypes = this.planLevelModel.getPlanLevel(plan).types.filter(type => type.filter(plan));
    if (planLevelTypes.length == 0) {
      return null;
    }
    return (planLevelTypes[0].name == "regelgeving")? "regels": "beleidstekst";
  }

  ngDoCheck() {
    if ((this.scale != this.nineyDefault.defaultFocusModel.centerScale.scale) || (this.markerXY != this.markerModel.xy) || (this.plan != this.planModel.plan)) {
      if (this.scale != this.nineyDefault.defaultFocusModel.centerScale.scale) {
        this.scale = this.nineyDefault.defaultFocusModel.centerScale.scale;
      }
      if (this.markerXY != this.markerModel.xy) {
        this.markerXY = this.markerModel.xy;
      }
      if (this.plan != this.planModel.plan) {
        this.plan = this.planModel.plan;
      }

      this.loadInfo();
    }

    if (this.kaart != this.planModel.kaart) {
      this.kaart = this.planModel.kaart;

      this.setInfos();
    }
  }

  openInfo(info) {
    console.log(info.viewLinks.length);
    if (info.viewLinks.length == 1) {
      open(info.viewLinks[0].url);
    } else {
      info.viewLinksVisible = true;
    }
  }

  private loadInfo() {
    if ((this.markerModel.xy == null) || (this.planModel.plan == null) || (this.planModel.plan.sourcetable == "plangebied_pcp")) {
      this.setInfo(null);
    } else {
      const point = this.markerModel.xy;
      const buffer = Math.min(Math.round(this.nineyDefault.defaultFocusModel.centerScale.scale / 28.3464388369) / 100, 13.44);
      const url = environment.websiteProxyUrl + "web-roo/rest/" + this.planModel.plan.sourcetable + "/id/" + this.planModel.plan.identificatie + "/xy/" + point.x + "/" + point.y + "?buffer=" + buffer;
      this.http.get(url).subscribe(response => {
        for (const val of Object.values(response)) {
          if (Array.isArray(val)) {
            for (const info of val) {
              if (info.geometrie != null) {
                info.geometrie = (new WKTConverter()).wktToCoordPath(info.geometrie);
              } else {
                info.geometrie = "";
              }
            }
          }         
        }
        this.setInfo(response);
      });
    }
  }

  private setInfo(info) {
    this.info = info;
    this.setInfos();
  }

  private setInfos() {
    this.infos = [[], []];
    this.hasContents = false;

    if ((this.info == null) || (this.planModel.plan == null)) {
      return;
    }

    const enkelbestemmingHoofdgroepen = ["agrarisch", "agrarisch met waarden", "bedrijf", "bedrijventerrein", "bos", "centrum", "cultuur en ontspanning", "ontspanning en vermaak", "detailhandel", "dienstverlening", "gemengd", "groen", "horeca", "kantoor", "maatschappelijk", "natuur", "recreatie", "sport", "tuin", "verkeer", "water", "wonen", "woongebied", "overig"];
    const dubbelbestemmingHoofdgroepen = ["leiding", "waarde", "waterstaat"];
    const gebiedsaanduidingHoofdgroepen = ["geluidzone", "luchtvaartverkeerzone", "milieuzone", "reconstructiewetzone", "veiligheidszone", "vrijwaringszone", "wetgevingzone", "overige zone"];

    const bpContent = title => {
      return info => {
        const name = info.naam;
        if (name.toLowerCase() == title) {
          return title;
        }
        return "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>" + title;
      };
    }
    const ebdbContent = title => {  // Enkelbestemming & dubbelbestemming require strict capitalisation.
      return info => {
        const name = info.naam.trim().toLowerCase();
        const hoofdgroepen = enkelbestemmingHoofdgroepen.concat(dubbelbestemmingHoofdgroepen);
        for (let i = 0; i < hoofdgroepen.length; i++) {
          if (name.indexOf(hoofdgroepen[i]) == 0) {
            const nameParts = name.split(/-(.+)/);
            if (nameParts.length == 3) {
              let hoofdgroep = nameParts[0].trim();
              let specificat = nameParts[1].trim()
                .replace(/(.*)voorlopig(\s+\d+)*/, "$1Voorlopig$2")
                .replace(/(.*)uit te werken(\s+\d+)*/, "$1Uit te werken$2");
              hoofdgroep = hoofdgroep[0].toUpperCase() + hoofdgroep.slice(1);
              specificat = specificat[0].toUpperCase() + specificat.slice(1);
              return "<strong>" + hoofdgroep + " - " + specificat + "</strong><br/>" + title;
            } else {
              break;
            }
          }
        }
        return "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>" + title;
      };
    }
    const maatvoeringContent = info => {
      return "maatvoering:" + (info.maatvoering
        .search(/",\s?"/) > -1? "<br/><span>&#8226; ": " <span>") + info.maatvoering
        .replace(/",\s?"/g, "</span><br/><span>&#8226; ")
        .replace(/"/g, "")
        .replace(/maatvoering;\s+/g, "")
        .replace(/other:\s/g, "")
        .replace(/\s\(%\)=([\d,.]+)/g, ": $1%")
        .replace(/\s\((\w+)\)=([\d,.]+)/g, ": $2&nbsp;$1")
        .replace(/=/g, ": ")
          + "</span>";
    }
    const lettertekenContent = info => {
      return "lettertekenaanduiding: <span>" + info.naam.toLowerCase() +
        (info.lettertekencode? " " + info.lettertekencode: "") + "</span>";
    }
    const gebiedsaanduidingContent = info => {
      const name = info.naam.trim().replace(/other:\s/g, "");
      for (let i = 0; i < gebiedsaanduidingHoofdgroepen.length; i++) {
        if (name.toLowerCase().indexOf(gebiedsaanduidingHoofdgroepen[i]) == 0) {
          const nameParts = name.split(/-(.+)/);
          if (nameParts.length == 3) {
            let hoofdgroep = nameParts[0].trim();
            let specificat = nameParts[1].trim()
            hoofdgroep = hoofdgroep[0].toUpperCase() + hoofdgroep.slice(1);
            specificat = specificat[0].toUpperCase() + specificat.slice(1);
            return "<strong>" + hoofdgroep + " - " + specificat + "</strong><br/>gebiedsaanduiding";
          } else {
            break;
          }
        }
      }
      return "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>gebiedsaanduiding";
    }
    const vvvpContent = info => {
      return (info.naam? ("<strong>" + info.naam + "</strong><br/>"): "") +
        (info.thema? ("thema: " + info.thema.replace(/other:\s/g, "").toLowerCase() + "<br/>"): "") +
        (info.beleidInfo? ("beleidsinfo:" + (info.beleidInfo
          .search(/\),\s/) > -1? "<br/><span>&#8226; ": " <span>") + info.beleidInfo
          .replace(/other:\s/g, "")
          .replace(/\(\s-\s\)=/g, "")
          .replace(/([a-z]+)=(.*?)\((.*?)\)(,|$)/g, "$2 ($3 door $1)$4")
          .replace(/\),\s/g, ")</span><br/><span>&#8226; ")
          .toLowerCase()
            + "</span><br/>"): "") +
        (info.idealisatie? ("gebiedsbegrenzing: " + info.idealisatie): "");
    }
    const besluitvlakContent = info => {
      const name = info.naam.replace(/besluit(sub)?vlak/ig, "").trim() || info.typePlan;
      return "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>besluitvlak";
    }

    const enkelbestemmingLegendUrl = info => {
      const name = info["bestemmingsHoofdgroep"].replace("ontspanning en vermaak", "cultuur en ontspanning");
      return "assets/legend/" + name + ".png";
    }
    const dbgaLegendUrl = title => {  // Dubbelbestemming & gebiedsaanduiding in IMRO2006 plans have no well-defined grouping/symbol.
      const name2Dubbelbestemming = name => {
        if (name.match(/.*leiding.*/)) return "leiding";
        if (name.match(/.*hoogspanning.*/)) return "leiding";

        if (name.match(/.*waarde.*/)) return "waarde";
        if (name.match(/.*bijzonder.*/)) return "waarde";
        if (name.match(/.*karakteristiek.*/)) return "waarde";
        if (name.match(/.*beeldbepalend.*/)) return "waarde";
        if (name.match(/.*archeologi.*/)) return "waarde";
        if (name.match(/.*histori.*/)) return "waarde";
        if (name.match(/.*monument.*/)) return "waarde";
        if (name.match(/.*stadsgezicht.*/)) return "waarde";
        if (name.match(/.*dorpsgezicht.*/)) return "waarde";
        if (name.match(/.*ecologi.*/)) return "waarde";
        if (name.match(/.*natuur.*/)) return "waarde";
        if (name.match(/.*landschap.*/)) return "waarde";
        if (name.match(/.*beekdal.*/)) return "waarde";
        if (name.match(/.*meander.*/)) return "waarde";

        if (name.match(/.*water.*/)) return "waterstaat";
        if (name.match(/.*infiltratie.*/)) return "waterstaat";
        if (name.match(/.*retentie.*/)) return "waterstaat";
        if (name.match(/.*bassin.*/)) return "waterstaat";
        if (name.match(/.*dijk.*/)) return "waterstaat";
        if (name.match(/.*kade[ns].*/)) return "waterstaat";

        return name;
      }
      const name2Gebiedsaanduiding = name => {
        if (name.match(/.*geluid.*/)) return "geluidzone";
        if (name.match(/.*lawaai.*/)) return "geluidzone";
        if (name.match(/.*db(\s|a|\(a\)).*/)) return "geluidzone";

        if (name.match(/.*luchtvaart.*/)) return "luchtvaartverkeerzone";

        if (name.match(/.*milieu.*/)) return "milieuzone";
        if (name.match(/.*hinder.*/)) return "milieuzone";
        if (name.match(/.*geur.*/)) return "milieuzone";
        if (name.match(/.*bodembescherming.*/)) return "milieuzone";
        if (name.match(/.*grondwaterbescherming.*/)) return "milieuzone";

        if (name.match(/.*reconstructie.*/)) return "reconstructiewetzone";
        if (name.match(/.*extensivering.*/)) return "reconstructiewetzone";
        if (name.match(/.*ontwikkeling.*/)) return "reconstructiewetzone";

        if (name.match(/.*veiligheid.*/)) return "veiligheidszone";
        if (name.match(/.*risico.*/)) return "veiligheidszone";
        if (name.match(/.*lpg.*/)) return "veiligheidszone";

        if (name.match(/.*vrijwaring.*/)) return "vrijwaringszone";
        if (name.match(/.*bebouwings.*/)) return "vrijwaringszone";
        if (name.match(/.*bouwgrens.*/)) return "vrijwaringszone";
        if (name.match(/.*afstand.*/)) return "vrijwaringszone";
        if (name.match(/.*obstakelvrij.*/)) return "vrijwaringszone";
        if (name.match(/.*(rooi|gevel)lijn.*/)) return "vrijwaringszone";
        if (name.match(/.*straal(pad|verbinding).*/)) return "vrijwaringszone";
        if (name.match(/.*radar.*/)) return "vrijwaringszone";
        if (name.match(/.*molen.*/)) return "vrijwaringszone";

        if (name.match(/.*wetgeving.*/)) return "wetgevingzone";
        if (name.match(/.*wro.*/)) return "wetgevingzone";
        if (name.match(/.*wijziging.*/)) return "wetgevingzone";
        if (name.match(/.*vrijstellingsbevoegdheid.*/)) return "wetgevingzone";
        if (name.match(/.*regeling.*/)) return "wetgevingzone";
        if (name.match(/.*verordening.*/)) return "wetgevingzone";
        if (name.match(/.*goedkeuring.*/)) return "wetgevingzone";
        if (name.match(/.*toetsing.*/)) return "wetgevingzone";
        if (name.match(/.*raad van state.*/)) return "wetgevingzone";
        if (name.match(/.*monument.*/)) return "wetgevingzone";
        if (name.match(/.*stadsgezicht.*/)) return "wetgevingzone";
        if (name.match(/.*dorpsgezicht.*/)) return "wetgevingzone";
        if (name.match(/.*ecologische hoofdstructuur.*/)) return "wetgevingzone";
        if (name.match(/.*ehs.*/)) return "wetgevingzone";
        if (name.match(/.*pog.*/)) return "wetgevingzone";
        if (name.match(/.*natura\s?2000.*/)) return "wetgevingzone";

        return name;
      }

      return info => {
        let name = info[title];
        if (name == "wro-zone") {
          name = "wetgevingzone";
        } else if (name == "overig") {
          name = "overige zone";
        } else if (name == null) {
          name = info.naam.toLowerCase();
          for (
            let i = 0;
            (
              (i < 3) &&
              (dubbelbestemmingHoofdgroepen.indexOf(name) == -1) && (gebiedsaanduidingHoofdgroepen.indexOf(name) == -1)
            );
            i++
          ) {
            if (i == 0) {
              if (title == "bestemmingsHoofdgroep") {
                name = name2Dubbelbestemming(name);
              } else {  // title == "gebiedsAanduidingGroep"
                name = name2Gebiedsaanduiding(name);
              }
            } else if (i == 1) {
              if (title == "bestemmingsHoofdgroep") {
                name = name2Gebiedsaanduiding(name);
              } else {  // title == "gebiedsAanduidingGroep"
                name = name2Dubbelbestemming(name);
              }
            } else {  // i == 2
              console.log("Geen bestemmingshoofdgroep/gebiedsaanduidinggroep gevonden voor planobject met naam: " + name);
              name = "overige zone";
            }
          }
        }
        return "assets/legend/" + name + ".png";
      };
    }
    const bouwvlakLegendUrl = info => {
      return "assets/legend/bouwvlak.png";
    }
    const aanduidingLegendUrl = info => {
      return "assets/legend/aanduiding.png";
    }
    const figuurLegendUrl = info => {
      const name = info.naam.split(" - ")[0].toLowerCase();
      return "assets/legend/" + name + ".png";
    }
    const vvvpLegendUrl = info => {
      if (this.planModel.plan.viewSymbols[info.identificatie] != null) {
        return environment.geoUrl + "vvvp-wms/?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetSymbol&LAYER=&FORMAT=image/png&SYMBOLCODE=" + this.planModel.plan.viewSymbols[info.identificatie];
      }
      return "assets/nosymbol.png";
    }
    const besluitvlakLegendUrl = info => {
      return "assets/legend/besluitvlak.png";
    }

    [
      { name: "enkelBestemmingen", content: ebdbContent("enkelbestemming"), legendUrl: enkelbestemmingLegendUrl },
      { name: "dubbelBestemmingen", content: ebdbContent("dubbelbestemming"), legendUrl: dbgaLegendUrl("bestemmingsHoofdgroep") },
      { name: "bouwVlakken", content: bpContent("bouwvlak"), legendUrl: bouwvlakLegendUrl },
      { name: "functieAanduidingen", content: bpContent("functieaanduiding"), legendUrl: aanduidingLegendUrl },
      { name: "bouwAanduidingen", content: bpContent("bouwaanduiding"), legendUrl: aanduidingLegendUrl },
      { name: "maatvoeringen", content: maatvoeringContent, legendUrl: aanduidingLegendUrl },
      { name: "figuren", content: bpContent("figuur"), legendUrl: figuurLegendUrl },
      { name: "lettertekenAanduidingen", content: lettertekenContent, legendUrl: aanduidingLegendUrl },
      { name: "gebiedsAanduidingen", content: gebiedsaanduidingContent, legendUrl: dbgaLegendUrl("gebiedsAanduidingGroep") },
      { name: "structuurvisieGebieden", content: vvvpContent, legendUrl: vvvpLegendUrl },
      { name: "structuurvisieVerklaringenP", content: vvvpContent, legendUrl: vvvpLegendUrl },
      { name: "besluitVlakken", content: besluitvlakContent, legendUrl: besluitvlakLegendUrl },
      { name: "besluitSubVlakken", content: besluitvlakContent, legendUrl: besluitvlakLegendUrl }
    ].forEach(infoType => {
      const infos = this.info[infoType.name];
      if ((infos != null) && (infos.length > 0)) {
        this.hasContents = true;
        infos.forEach(info => {
          if (info.thema != null) {
            const match = info.thema.match(/#(\d+)\|(.*?)\|.*/);
            if (match != null) {
              info.cartografieInfo = { kaartNummer: match[1] };
              info.thema = match[2];
            }
          }

          info.viewContent = infoType.content(info);
          info.viewLegendUrl = infoType.legendUrl(info);
          this.setLinks(info);

          if ((info.cartografieInfo != null) && (this.planModel.kaart != null) &&
            (info.cartografieInfo.kaartNummer == this.planModel.kaart.kaartNummer)
          ) {
            this.infos[0].push(info);
          }
          if ((info.cartografieInfo == null) || (info.cartografieInfo.kaartNummer == null)) {
            this.infos[1].push(info);
          }
        });
      }
    });
  }

  private setLinks(info) {
    info.viewLinks = [];
    info.viewLinksVisible = false;

    if (info.verwijzingNaarTekst == null) {
      return;
    }

    const fileNames = info.verwijzingNaarTekst.split(", ");
    if (fileNames.length == 1) {
      if (this.planModel.plan.verwijzingen.verwijzingenPerType.plantekst != null) {
        info.viewLinks.push({ title: null, url: environment.websiteUrl + "web-roo/transform/" + this.planModel.plan.identificatie + "/" + fileNames[0] });
      } else {
        info.viewLinks.push({ title: null, url: environment.websiteUrl + "documents/" + this.planModel.plan.identificatie + "/" + fileNames[0] });
      }
    } else {
      for (let i = 0; i < fileNames.length; i++) {
        if (this.planModel.plan.verwijzingen.verwijzingenPerType.plantekst != null) {
          info.viewLinks.push({ title: "specifieke plantekst " + (i + 1), url: environment.websiteUrl + "web-roo/transform/" + this.planModel.plan.identificatie + "/" + fileNames[i] });
        } else {
          const prefix = fileNames[i].split("_")[0];
          const documentTypes = {
            "d": "besluitdocument",
            "db": "bijlagen bij het besluitdocument",
            "b": "beleidsteksten",
            "bb": "bijlagen bij de beleidsteksten",
            "r": "regels",
            "rb": "bijlagen bij de regels",
            "t": "toelichting",
            "tb": "bijlagen bij de toelichting",
            "i": "illustratie",
            "vb": "vaststellingsbesluit"
          }
          const documentType = documentTypes[prefix] || fileNames[i];
          info.viewLinks.push({ title: documentType, url: environment.websiteUrl + "documents/" + this.planModel.plan.identificatie + "/" + fileNames[i] });
        }
      }
    }
  }
}
