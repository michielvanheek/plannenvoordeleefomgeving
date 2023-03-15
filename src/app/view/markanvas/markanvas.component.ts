import { Component, DoCheck, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Layer, VectorTileModel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppService } from "../../app.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { OmgevingsdocumentModelService } from "src/app/model/omgevingsdocument-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
import { SelectComponentSetTabScrollTo } from "src/app/action/SelectComponentSetTabScrollTo";
import { StateModelService } from "src/app/model/state-model.service";
import { SVGConverter } from "src/app/shared/svg-converter";
import { TimeModelService } from "src/app/model/time-model.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-markanvas",
  templateUrl: "./markanvas.component.html",
  styleUrls: ["./markanvas.component.scss"]
})
export class MarkanvasComponent implements OnInit, DoCheck {
  private scale = this.nineyDefault.defaultFocusModel.incubationCenterScale.scale;
  private markerLocaties = this.imowModel.markerLocaties;
  private numLoading = this.imowModel.numLoadingL + this.imowModel.numLoading;
  private planIdentificatie = this.planModel.plan.technischId || this.planModel.plan.identificatie;

  private layer = new Layer("vlaklocaties");
  private refreshToken = 0;
  private tileModel = new VectorTileModel();

  private maxZoomLevel = 11;
  private tileSize = 256;
  private canvasSize = 400;

  legal = false;
  specify = false;
  @Input() display;
  @ViewChild("canvas", {static: true}) private canvasRef: ElementRef;

  private specificLocaties = {};
  private nonSpecificLocaties = {};

  selfInfos = [];
  otherVersionInfos = [];
  otherPlanInfos = [];
  orphanInfos = [];

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    public appService: AppService,
    public highlightModel: HighlightModelService,
    public stateModel: StateModelService,
    public timeModel: TimeModelService,
    public markerModel: MarkerModelService,
    private omgevingsdocumentModel: OmgevingsdocumentModelService,
    public imowModel: ImowModelService,
    public planModel: PlanModelService
  ) {
    this.layer.baseURL = environment.locatiesUrl;
    this.layer.urlExtension = "$Z/$X/$Y.pbf";

    this.legal = environment.legalAnnotations;
  }

  ngOnInit(): void {
    this.canvasRef.nativeElement.width = this.canvasSize;
    this.canvasRef.nativeElement.height = this.canvasSize;

    this.setLocaties();
  }

  ngDoCheck(): void {
    const scale = this.nineyDefault.defaultFocusModel.incubationCenterScale.scale;
    if ((this.specify && (this.scale != scale)) || (this.markerLocaties != this.imowModel.markerLocaties)) {
      if (this.specify && (this.scale != scale)) {
        this.scale = scale;
      }
      if (this.markerLocaties != this.imowModel.markerLocaties) {
        this.markerLocaties = this.imowModel.markerLocaties;
      }
      this.setLocaties();
    }

    if ((this.numLoading != (this.imowModel.numLoadingL + this.imowModel.numLoading)) || (this.planIdentificatie != (this.planModel.plan.technischId || this.planModel.plan.identificatie))) {
      if (this.numLoading != (this.imowModel.numLoadingL + this.imowModel.numLoading)) {
        this.numLoading = this.imowModel.numLoadingL + this.imowModel.numLoading;
      }
      if (this.planIdentificatie != (this.planModel.plan.technischId || this.planModel.plan.identificatie)) {
        this.planIdentificatie = this.planModel.plan.technischId || this.planModel.plan.identificatie;
      }
      this.setInfos();
    }
  }

  setLegal(legal) {
    this.legal = legal;

    this.setInfos();
  }

  setHighlight(info) {
    this.highlightModel.setHighlight(info, false);
  }

  cease(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  blurLinks() {
    const links: NodeListOf<HTMLElement> = document.querySelectorAll("dso-markanvas .list-group a, dso-markanvas .list-group button");
    for (let i = 0; i < links.length; i++) {
      links[i].blur();
    }
  }

  openInfo(info) {
    if ((info.teksten == null) || (info.teksten.length == 0)) {
      return false;
    }

    const index = {};
    info.teksten.forEach(tekst => index[tekst.documentTechnischId || tekst.documentIdentificatie] = true);
    const planIdentificaties = Object.keys(index);
    if (planIdentificaties.includes(this.planModel.plan.technischId || this.planModel.plan.identificatie)) {
      new SelectComponentSetTabScrollTo(this.imowModel, this.planModel, this.display, info);
    } else {
      const plannen = planIdentificaties.map(identificatie => this.omgevingsdocumentModel.regelingen.find(regeling => (regeling.technischId || regeling.identificatie) == identificatie));
      if (plannen.length == 1) {
        this.planModel.loadPlan(plannen[0].viewId, null, false, false);
      } else {
        info.plannen = plannen;
        return false;
      }
    }
    return true;
  }

  setSub(info, numSubinfos) {
    this.setSubinfos(info, numSubinfos);
  }

  isOntwerp(info) {
    if (info.annotation.technischId != null) {
      return true;
    }
    return !!info.teksten && !!info.teksten.length && info.teksten.every(tekst => tekst.technischId);
  }

  isFuture(info) {
    if (info.annotation.technischId != null) {
      return false;
    }

    const teksten = (info.teksten || []).filter(tekst => !tekst.technischId);
    const tekstenAreFuture = !!teksten.length && teksten.every(tekst => tekst.geregistreerdMet.beginInwerking > this.timeModel.time);
    if (info.annotation.betreftEenActiviteit != null) {
      return tekstenAreFuture;
    }
    const annotationIsFuture = (info.annotation.geregistreerdMet.beginInwerking > this.timeModel.time);
    return annotationIsFuture || tekstenAreFuture;
  }

  private setLocaties() {
    if (this.specify) {
      this.loadTile();
    } else {
      this.specificLocaties = {};
      this.nonSpecificLocaties = {};

      this.imowModel.markerLocaties.filter(locatie => !this.omgevingsdocumentModel.regelingen.some(regeling => regeling.locatieIdentificatie == (locatie.technischId || locatie.identificatie))).forEach(locatie => {
        this.specificLocaties[locatie.technischId || locatie.identificatie] = locatie;
      });

      this.setInfos();
    }
  }

  private loadTile() {
    const srs = this.nineyDefault.defaultFocusModel.srs;

    const zoomLevel = srs.getZoomLevel(this.scale, this.maxZoomLevel);
    const tileLimit = Math.pow(2, zoomLevel.zoomLevel);
    const tileX = Math.floor((this.markerModel.xy.x - srs.minX) / zoomLevel.resolution / this.tileSize);
    const tileY = Math.max(Math.floor((srs.maxY - this.markerModel.xy.y) / zoomLevel.resolution / this.tileSize), 0);

    const minX = tileX * this.tileSize * zoomLevel.resolution + srs.minX;
    const maxY = -(tileY * this.tileSize * zoomLevel.resolution - srs.maxY);

    const url = this.layer.baseURL + this.layer.urlExtension
      .replace("$Z", zoomLevel.zoomLevel)
      .replace("$X", ((tileX % tileLimit) + tileLimit) % tileLimit)
      .replace("$Y", tileY);

    const tile = this.tileModel.createTile(minX, maxY, zoomLevel.scale, tileX, tileY, this.tileSize, this.tileSize, url);

    this.loadTileData(tile);
  }

  private loadTileData(tile) {
    this.http.get(tile.url + "?" + this.refreshToken++, { responseType: "arraybuffer" }).subscribe(
      response => {
        this.specificLocaties = {};
        this.nonSpecificLocaties = {};

        const layer = new VectorTile(new Protobuf(response)).layers[this.layer.name];
        const canvasHalf = this.canvasSize / 2;
        const srs = this.nineyDefault.defaultFocusModel.srs;
        const tileResolution = srs.getZoomLevel(tile.scale, this.maxZoomLevel).resolution;
        const zoomLevelScale = srs.getZoomLevel(this.scale).scale;
        let rescaleFactor = 1;
        if (tile.scale != zoomLevelScale) {
          rescaleFactor = tile.scale / zoomLevelScale;
          tile.tileWidth *= rescaleFactor;
          tile.tileHeight *= rescaleFactor;
        }
        const matrix = {
          a: tile.tileWidth / layer.extent,
          b: 0,
          c: 0,
          d: tile.tileHeight / layer.extent,
          e: (canvasHalf - (this.markerModel.xy.x - srs.minX) / tileResolution % this.tileSize) * rescaleFactor - canvasHalf * (rescaleFactor - 1),
          f: (canvasHalf - (srs.maxY - this.markerModel.xy.y) / tileResolution % this.tileSize) * rescaleFactor - canvasHalf * (rescaleFactor - 1)
        };

        const ctx = this.canvasRef.nativeElement.getContext("2d");
        ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);

        for (let i = 0; i < layer.length; i++) {
          const feature = layer.feature(i);
          if (!this.imowModel.markerLocatieIdentificaties.some(identificatie => identificatie == feature.properties.identificatie)) {
            continue;
          }

          const canvas = this.getPlaceSpecificCanvas(feature, matrix);
          const locatie = this.imowModel.locaties[feature.properties.identificatie];
          if (canvas != null) {
            ctx.drawImage(canvas, 0, 0, this.canvasSize, this.canvasSize);

            this.specificLocaties[locatie.identificatie] = locatie;
            if (locatie.groepen != null) {
              for (const groep of locatie.groepen) {
                this.specificLocaties[groep.identificatie] = groep;
              }
            }
          } else if (this.specificLocaties[locatie.identificatie] == null) {
            this.nonSpecificLocaties[locatie.identificatie] = locatie;
            if (locatie.groepen != null) {
              for (const groep of locatie.groepen) {
                if (this.specificLocaties[groep.identificatie] == null) {
                  this.nonSpecificLocaties[groep.identificatie] = groep;
                }    
              }
            }
          }
        }

        this.setInfos();
      }
    );
  }

  private getPlaceSpecificCanvas(feature, matrix) {
    const path2d = new Path2D((new SVGConverter()).vectorTileFeatureToPath(feature).replace(/K/g, "L"));
    const canvas = document.createElement("canvas");
    canvas.width = this.canvasSize;
    canvas.height = this.canvasSize;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(matrix);
    ctx.lineWidth = 12;
    ctx.stroke(path2d);

    const dataUrl = canvas.toDataURL()
    const minALength = Math.round(dataUrl.length * 0.7);
    const match = dataUrl.match(new RegExp("A{" + minALength + "}"));
    if (match == null) {
      ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
      ctx.fill(path2d);
  
      return canvas;
    }
    return null;
  }

  private setInfos() {
    this.selfInfos = [];
    this.otherVersionInfos = [];
    this.otherPlanInfos = [];

    const locaties = (Object.values(Object.assign({}, this.specificLocaties, this.nonSpecificLocaties)) as any[]);

    const normwaarden = locaties.reduce((normwaarden, locatie) => normwaarden.concat(locatie.normwaarden || []), []);
    const omgevingsnormen = {};
    normwaarden.forEach(normwaarde => {
      const id = normwaarde.omgevingsnorm.technischId || normwaarde.omgevingsnorm.identificatie;
      omgevingsnormen[id] = (omgevingsnormen[id] || []).concat(normwaarde);
    });
    (Object.values(omgevingsnormen) as any[]).forEach(normwaarden => {
      const omgevingsnorm = normwaarden[0].omgevingsnorm;
      const inSelf = (omgevingsnorm.teksten || []).some(tekst => ((tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie)) && this.annotationTimeMatchesPlanTime(tekst)) && this.annotationTimeMatchesPlanTime(omgevingsnorm);
      const info = this.omgevingsnormToInfo(omgevingsnorm, normwaarden, !this.legal);
      this.setSubinfos(info, !this.legal? 3: 1);
      if (inSelf) {
        this.selfInfos.push(info);
      } else {
        const inOtherVersion = (omgevingsnorm.teksten || []).some(tekst => this.planModel.plan.versions.some(version => version.identificatie == tekst.documentIdentificatie));
        if (inOtherVersion) {
          this.otherVersionInfos.push(info);
        } else {
          this.otherPlanInfos.push(info);
        }
      }
    });

    if (!this.legal) {
      const gebiedsaanwijzingen = locaties.reduce((gebiedsaanwijzingen, locatie) => gebiedsaanwijzingen.concat(locatie.gebiedsaanwijzingen || []), []);
      gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        const inSelf = (gebiedsaanwijzing.teksten || []).some(tekst => ((tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie)) && this.annotationTimeMatchesPlanTime(tekst)) && this.annotationTimeMatchesPlanTime(gebiedsaanwijzing);
        const info = this.gebiedsaanwijzingToInfo(gebiedsaanwijzing);
        if (inSelf) {
          this.selfInfos.push(info);
        } else {
          const inOtherVersion = (gebiedsaanwijzing.teksten || []).some(tekst => this.planModel.plan.versions.some(version => version.identificatie == tekst.documentIdentificatie));
          if (inOtherVersion) {
            this.otherVersionInfos.push(info);
          } else {
            this.otherPlanInfos.push(info);
          }
        }
      });

      const activiteitlocatieaanduidingen = locaties.reduce((activiteitlocatieaanduidingen, locatie) => activiteitlocatieaanduidingen.concat(locatie.activiteitlocatieaanduidingen || []), []);
      const supers = {};
      activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        const id = activiteitlocatieaanduiding.super.superId;
        supers[id] = supers[id] || activiteitlocatieaanduiding.super;
      });
      (Object.values(supers) as any[]).forEach(activiteitlocatieaanduiding => {
        const teksten = activiteitlocatieaanduiding.teksten;
        const activiteitlocatieaanduidingTo = infos => {
          const twinfo = infos.find(info =>
            info.locaties.map(locatie => locatie.technischId || locatie.identificatie).sort().join("|") == activiteitlocatieaanduiding.locaties.map(locatie => locatie.technischId || locatie.identificatie).sort().join("|") &&
            info.teksten.map(tekst => tekst.technischId || tekst.identificatie).sort().join("|") == teksten.map(tekst => tekst.technischId || tekst.identificatie).sort().join("|")
          );
          if (twinfo != null) {
            twinfo.text += "<br/>" + activiteitlocatieaanduiding.viewType;
          } else {
            infos.push(this.activiteitlocatieaanduidingToInfo(activiteitlocatieaanduiding, teksten));
          }
        };
        const inSelf = teksten.some(tekst => ((tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie)) && this.annotationTimeMatchesPlanTime(tekst));
        if (inSelf) {
          activiteitlocatieaanduidingTo(this.selfInfos);
        } else {
          const inOtherVersion = teksten.some(tekst => this.planModel.plan.versions.some(version => version.identificatie == tekst.documentIdentificatie));
          if (inOtherVersion) {
            activiteitlocatieaanduidingTo(this.otherVersionInfos);
          } else {
            activiteitlocatieaanduidingTo(this.otherPlanInfos);
          }
        }
      });

      locaties.forEach(locatie => {
        const locatieMatches = this.annotationTimeMatchesPlanTime(locatie);
        const selfTeksten = {};
        const otherVersionTeksten = {};
        ((locatie.teksten && locatie.teksten[this.planModel.plan.technischId || this.planModel.plan.identificatie]) || []).forEach(tekst => {
          const tekstMatches = this.annotationTimeMatchesPlanTime(tekst);
          if (locatieMatches && tekstMatches) {
            selfTeksten[tekst.technischId || tekst.identificatie] = tekst;
          } else {
            otherVersionTeksten[tekst.technischId || tekst.identificatie] = tekst;
          }
        });
        this.selfInfos.forEach(info => info.teksten.forEach(tekst => delete selfTeksten[tekst.technischId || tekst.identificatie]));
        this.otherVersionInfos.forEach(info => info.teksten.forEach(tekst => delete otherVersionTeksten[tekst.technischId || tekst.identificatie]));
        if (Object.values(selfTeksten).length > 0) {
          this.selfInfos.push(this.locatieToInfo(locatie, Object.values(selfTeksten)));
        }
        if (Object.values(otherVersionTeksten).length > 0) {
          this.otherVersionInfos.push(this.locatieToInfo(locatie, Object.values(otherVersionTeksten)));
        }
      });
    } else {
      locaties.forEach(locatie => {
        const locatieMatches = this.annotationTimeMatchesPlanTime(locatie);
        const selfTeksten = {};
        const otherVersionTeksten = {};
        const otherPlanTeksten = {};
        const processTekst = (tekst, annotationMatches) => {
          const tekstMatches = this.annotationTimeMatchesPlanTime(tekst);
          if (((tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie)) && locatieMatches && annotationMatches && tekstMatches) {
            selfTeksten[tekst.technischId || tekst.identificatie] = tekst;
          } else if (this.planModel.plan.versions.some(version => version.identificatie == tekst.documentIdentificatie)) {
            otherVersionTeksten[tekst.technischId || tekst.identificatie] = tekst;
          } else {
            otherPlanTeksten[tekst.technischId || tekst.identificatie] = tekst;
          }
        };

        (locatie.gebiedsaanwijzingen || []).forEach(gebiedsaanwijzing => {
          const annotationMatches = this.annotationTimeMatchesPlanTime(gebiedsaanwijzing);
          (gebiedsaanwijzing.teksten || []).forEach(tekst => {
            processTekst(tekst, annotationMatches);
          });
        });
        (locatie.activiteitlocatieaanduidingen || []).forEach(activiteitlocatieaanduiding => {
          (activiteitlocatieaanduiding.teksten || []).forEach(tekst => {
            processTekst(tekst, true);
          });
        });
        ((locatie.teksten && locatie.teksten[this.planModel.plan.technischId || this.planModel.plan.identificatie]) || []).forEach(tekst => {
          processTekst(tekst, true);
        });

        if (Object.values(selfTeksten).length > 0) {
          this.selfInfos.push(this.locatieToInfo(locatie, Object.values(selfTeksten), false));
        } else if (Object.values(otherVersionTeksten).length > 0) {
          this.otherVersionInfos.push(this.locatieToInfo(locatie, Object.values(otherVersionTeksten), false));
        } else if (Object.values(otherPlanTeksten).length > 0) {
          this.otherPlanInfos.push(this.locatieToInfo(locatie, Object.values(otherPlanTeksten), false));
        }
      });
    }

    const byText = (a, b) => (a.text > b.text)? 1: (a.text < b.text)? -1: 0;
    this.selfInfos.sort(byText);
    this.otherVersionInfos.sort(byText);
    this.otherPlanInfos.sort(byText);

    this.orphanInfos = !this.appService.settings.placeInfoShowOrphans? []: locaties.filter(locatie => !(
      locatie.gebiedsaanwijzingen?.length || locatie.activiteitlocatieaanduidingen?.length || locatie.normwaarden?.length ||
      (locatie.teksten && locatie.teksten[this.planModel.plan.technischId || this.planModel.plan.identificatie]?.length) ||
      locatie.groepen?.some(groep =>
        groep.gebiedsaanwijzingen?.length || groep.activiteitlocatieaanduidingen?.length || groep.normwaarden?.length ||
        (groep.teksten && groep.teksten[this.planModel.plan.technischId || this.planModel.plan.identificatie]?.length)
      ) ||
      locatie.omvat?.some(sublocatie => sublocatie.normwaarden?.length)
    )).map(locatie => this.locatieToInfo(locatie, null, !this.legal));
  }

  private setSubinfos(info, numSubinfos) {
    info.subinfos = info.annotation.layer.getClassifiedNormwaarden(info.normwaarden, numSubinfos).map(normwaarde => this.normwaardeToInfo(normwaarde));
  }

  private locatieToInfo(locatie, teksten, showType = true) {
    const name = !environment.stripQuotes? locatie.viewName: locatie.viewName.replace(/^(aanduiding|functie)[ '"]+([^'"]+)[ '"]+$/g, "$2");
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong>" + (showType? ("<br/>" + locatie.locatieType.toLowerCase().replace(/engroep$/, "")): ""),
      label: locatie.viewName,
      locaties: [locatie],
      teksten: teksten,
      annotation: locatie
    };
  }

  private gebiedsaanwijzingToInfo(gebiedsaanwijzing) {
    const name = !environment.stripQuotes? gebiedsaanwijzing.viewName: gebiedsaanwijzing.viewName.replace(/^(aanduiding|functie)[ '"]+([^'"]+)[ '"]+$/g, "$2");
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>" + gebiedsaanwijzing.viewType,
      label: gebiedsaanwijzing.viewName,
      locaties: gebiedsaanwijzing.locaties,
      teksten: gebiedsaanwijzing.teksten,
      annotation: gebiedsaanwijzing
    };
  }

  private activiteitlocatieaanduidingToInfo(activiteitlocatieaanduiding, teksten) {
    const name = !environment.stripQuotes? activiteitlocatieaanduiding.viewName: activiteitlocatieaanduiding.viewName.replace(/^(aanduiding|functie)[ '"]+([^'"]+)[ '"]+$/g, "$2");
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + name[0].toUpperCase() + name.slice(1) + "</strong><br/>" + ((activiteitlocatieaanduiding.viewType.toLowerCase() != name.toLowerCase())? activiteitlocatieaanduiding.viewType: "activiteit"),
      label: activiteitlocatieaanduiding.viewName,
      locaties: activiteitlocatieaanduiding.locaties,
      teksten: teksten,
      annotation: activiteitlocatieaanduiding
    };
  }

  private omgevingsnormToInfo(omgevingsnorm, normwaarden, showType = true) {
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + omgevingsnorm.viewName[0].toUpperCase() + omgevingsnorm.viewName.slice(1) + "</strong>" + (showType? ("<br/>" + omgevingsnorm.viewType): ""),
      label: omgevingsnorm.viewName,
      locaties: normwaarden.reduce((locaties, normwaarde) => locaties.concat(normwaarde.locaties), []),
      teksten: omgevingsnorm.teksten,
      annotation: omgevingsnorm,
      normwaarden: normwaarden
    };
  }

  private normwaardeToInfo(normwaarde) {
    return {
      image: "assets/legend/relatie.png",
      text: normwaarde.viewValue,
      label: normwaarde.viewName,
      locaties: normwaarde.locaties,
      teksten: normwaarde.omgevingsnorm.teksten,
      annotation: normwaarde
    };
  }

  private annotationTimeMatchesPlanTime(annotation) {
    if ((annotation.technischId != null) || (this.planModel.plan.technischId != null)) {
      return true;
    }

    const annotationVersion = annotation.geregistreerdMet;
    const planVersion = this.planModel.plan.geregistreerdMet;
    if ((annotationVersion != null) && (planVersion != null)) {
      if ((annotationVersion.beginGeldigheid <= this.timeModel.time) && (planVersion.beginGeldigheid <= this.timeModel.time)) {
        return true;
      }
      if ((annotationVersion.beginGeldigheid <= planVersion.beginGeldigheid) && ((annotationVersion.eindGeldigheid == null) || (annotationVersion.eindGeldigheid > planVersion.beginGeldigheid))) {
        return true;
      }
      if ((planVersion.beginGeldigheid <= annotationVersion.beginGeldigheid) && ((planVersion.eindGeldigheid == null) || (planVersion.beginGeldigheid > annotationVersion.eindGeldigheid))) {
        return true;
      }
    }
    return false;
  }
}
