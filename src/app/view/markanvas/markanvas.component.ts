import { Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
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
import { StateModelService } from "src/app/model/state-model.service";
import { SVGConverter } from "src/app/shared/svg-converter";
import { environment } from "../../../environments/environment";

@Component({
  selector: "dso-markanvas",
  templateUrl: "./markanvas.component.html",
  styleUrls: ["./markanvas.component.scss"]
})
export class MarkanvasComponent implements OnInit, DoCheck {
  private scale = this.nineyDefault.defaultFocusModel.incubationCenterScale.scale;
  private markerXY = this.markerModel.xy;
  private markerLocaties = this.imowModel.markerLocaties;
  private numLoading = this.imowModel.numLoading;
  private planIdentificatie = this.planModel.plan.identificatie;

  private layer = new Layer("vlaklocaties");
  private refreshToken = 0;
  private tileModel = new VectorTileModel();

  private maxZoomLevel = 11;
  private tileSize = 256;
  private canvasSize = 400;

  legal = false;
  specify = false;
  @Output() close: EventEmitter<any> = new EventEmitter(false);
  @ViewChild("canvas", {static: true}) private canvasRef: ElementRef;

  private specificLocaties = {};
  private nonSpecificLocaties = {};

  infos = [[], [], []];
  orphanLocaties = [];

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    public appService: AppService,
    public highlightModel: HighlightModelService,
    public stateModel: StateModelService,
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
    if ((this.scale != scale) || (this.markerLocaties != this.imowModel.markerLocaties)) {
      if (this.scale != scale) {
        this.scale = scale;
      }
      if (this.markerLocaties != this.imowModel.markerLocaties) {
        this.markerLocaties = this.imowModel.markerLocaties;
        this.markerXY = this.markerModel.xy;
      }
      this.setLocaties();
    }

    if ((this.numLoading != this.imowModel.numLoading) || (this.planIdentificatie != this.planModel.plan.identificatie)) {
      if (this.numLoading != this.imowModel.numLoading) {
        this.numLoading = this.imowModel.numLoading;
      }
      if (this.planIdentificatie != this.planModel.plan.identificatie) {
        this.planIdentificatie = this.planModel.plan.identificatie;
      }
      this.setCollections();
    }
  }

  setLegal(legal) {
    this.legal = legal;

    this.setCollections();
  }

  openInfo(info) {
    if ((info.teksten == null) || (info.teksten.length == 0)) {
      return;
    }

    const index = {};
    info.teksten.forEach(tekst => index[tekst.documentTechnischId || tekst.documentIdentificatie] = true);
    const planIdentificaties = Object.keys(index);
    if (planIdentificaties.includes(this.planModel.plan.technischId || this.planModel.plan.identificatie)) {
      this.imowModel.setComponentIdentificaties("filtered", info.teksten, false, info.label);
      this.close.emit();
    } else if (planIdentificaties.length == 1) {
      this.planModel.loadPlan(planIdentificaties[0], null, false, false);
    } else {  // planIdentificaties.length > 1
      info.plannen = planIdentificaties.map(identificatie => this.omgevingsdocumentModel.regelingen.find(regeling => (regeling.technischId || regeling.identificatie) == identificatie));
    }
  }

  private setLocaties() {
    if (this.markerXY == null) {
      this.specificLocaties = {};
      this.nonSpecificLocaties = {};
      this.setCollections();
      return;
    }

    if (this.specify) {
      this.loadTile();
    } else {
      this.specificLocaties = {};
      this.nonSpecificLocaties = {};

      this.imowModel.markerLocatieIdentificaties.forEach(identificatie => {
        const locatie = this.imowModel.locaties[identificatie];
        if (locatie == null) {
          return;
        }

        this.specificLocaties[locatie.technischId || locatie.identificatie] = locatie;
        if (locatie.groepen != null) {
          for (const groep of locatie.groepen) {
            this.specificLocaties[groep.technischId || groep.identificatie] = groep;
          }
        }
      });

      this.setCollections();
    }
  }

  private loadTile() {
    const srs = this.nineyDefault.defaultFocusModel.srs;

    const zoomLevel = srs.getZoomLevel(this.scale, this.maxZoomLevel);
    const tileLimit = Math.pow(2, zoomLevel.zoomLevel);
    const tileX = Math.floor((this.markerXY.x - srs.minX) / zoomLevel.resolution / this.tileSize);
    const tileY = Math.max(Math.floor((srs.maxY - this.markerXY.y) / zoomLevel.resolution / this.tileSize), 0);

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
          e: (canvasHalf - (this.markerXY.x - srs.minX) / tileResolution % this.tileSize) * rescaleFactor - canvasHalf * (rescaleFactor - 1),
          f: (canvasHalf - (srs.maxY - this.markerXY.y) / tileResolution % this.tileSize) * rescaleFactor - canvasHalf * (rescaleFactor - 1)
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

        this.setCollections();
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

  private setCollections() {
    this.infos = [[], [], []];  // Specific, non-specific, in other plans.

    const locaties = (Object.values(Object.assign({}, this.specificLocaties, this.nonSpecificLocaties)) as any[]);

    if (!this.legal) {
      const gebiedsaanwijzingen = locaties.reduce((gebiedsaanwijzingen, locatie) => gebiedsaanwijzingen.concat(locatie.gebiedsaanwijzingen || []), []);
      const activiteitlocatieaanduidingen = locaties.reduce((activiteitlocatieaanduidingen, locatie) => activiteitlocatieaanduidingen.concat(locatie.activiteitlocatieaanduidingen || []), []);
      const normwaarden = locaties.reduce((normwaarden, locatie) => normwaarden.concat(locatie.normwaarden || []), []);

      gebiedsaanwijzingen.forEach(gebiedsaanwijzing => {
        const inPlan = gebiedsaanwijzing.teksten.some(tekst => (tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie));
        const specific = gebiedsaanwijzing.locaties.some(locatie => this.specificLocaties[locatie.identificatie]);
        if (inPlan) {
          this.infos[specific? 0: 1].push(this.gebiedsaanwijzingToInfo(gebiedsaanwijzing));
        } else {  // !inPlan
          this.infos[2].push(this.gebiedsaanwijzingToInfo(gebiedsaanwijzing));
        }
      });

      activiteitlocatieaanduidingen.forEach(activiteitlocatieaanduiding => {
        const inPlan = true;
        const specific = activiteitlocatieaanduiding.locaties.some(locatie => this.specificLocaties[locatie.identificatie]);
        if (inPlan) {
          const twinfo = this.infos[specific? 0: 1].find(info =>
            info.locaties.map(locatie => locatie.technischId || locatie.identificatie).sort().join("|") == activiteitlocatieaanduiding.locaties.map(locatie => locatie.technischId || locatie.identificatie).sort().join("|") &&
            (info.teksten || []).map(tekst => tekst.technischId || tekst.identificatie).sort().join("|") == (activiteitlocatieaanduiding.teksten || []).map(tekst => tekst.technischId || tekst.identificatie).sort().join("|")
          );
          if (twinfo != null) {
            this.addActiviteitToInfo(twinfo, activiteitlocatieaanduiding);
          } else {
            this.infos[specific? 0: 1].push(this.activiteitlocatieaanduidingToInfo(activiteitlocatieaanduiding));
          }
        } else {  // !inPlan
          this.infos[2].push(this.activiteitlocatieaanduidingToInfo(activiteitlocatieaanduiding));
        }
      });

      normwaarden.forEach(normwaarde => {
        const inPlan = normwaarde.omgevingsnorm.teksten.some(tekst => (tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie));
        const specific = normwaarde.locaties.some(locatie => this.specificLocaties[locatie.identificatie]);
        if (inPlan) {
          this.infos[specific? 0: 1].push(this.normwaardeToInfo(normwaarde));
        } else {  // !inPlan
          this.infos[2].push(this.normwaardeToInfo(normwaarde));
        }
      });
    } else {
      locaties.filter(locatie => {
        const teksten = {};
        const otherPlansTeksten = {};
        let specific = false;

        (locatie.gebiedsaanwijzingen || []).concat(locatie.activiteitlocatieaanduidingen || []).concat(locatie.normwaarden || []).forEach(annotation => {
          (annotation.teksten || annotation.omgevingsnorm?.teksten || []).forEach(tekst => {
            if ((tekst.documentTechnischId || tekst.documentIdentificatie) == (this.planModel.plan.technischId || this.planModel.plan.identificatie)) {
              teksten[tekst.technischId || tekst.identificatie] = tekst;
            } else {
              otherPlansTeksten[tekst.technischId || tekst.identificatie] = tekst;
            }
          });
          specific = specific || annotation.locaties.some(locatie => this.specificLocaties[locatie.identificatie]);
        });

        if (Object.values(teksten).length > 0) {
          this.infos[specific? 0: 1].push(this.locatieToInfo(locatie, Object.values(teksten)));
        } else if (Object.values(otherPlansTeksten).length > 0) {
          this.infos[2].push(this.locatieToInfo(locatie, Object.values(otherPlansTeksten)));
        }
      });

      this.infos.forEach(infos =>
        infos.sort((a, b) => (!a.locaties[0].noemer || (a.locaties[0].noemer > b.locaties[0].noemer))? 1: (a.locaties[0].noemer && (a.locaties[0].noemer < b.locaties[0].noemer))? -1: 0)
      );
    }

    this.orphanLocaties = locaties.filter(locatie => 
      locatie.gebiedsaanwijzingen && !locatie.gebiedsaanwijzingen.length &&
      locatie.activiteitlocatieaanduidingen && !locatie.activiteitlocatieaanduidingen.length &&
      locatie.normwaarden && !locatie.normwaarden.length &&
      (!locatie.groepen || locatie.groepen.every(groep =>
        groep.gebiedsaanwijzingen && !groep.gebiedsaanwijzingen.length &&
        groep.activiteitlocatieaanduidingen && !groep.activiteitlocatieaanduidingen.length &&
        groep.normwaarden && !groep.normwaarden.length
      )) &&
      (!locatie.omvat || locatie.omvat.every(omvatLocatie => {
        const sublocatie = this.imowModel.locaties[omvatLocatie.identificatie];
        return sublocatie.normwaarden && !sublocatie.normwaarden.length
      }))
    );
  }

  private locatieToInfo(locatie, teksten) {
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + (locatie.noemer? (locatie.noemer[0].toUpperCase() + locatie.noemer.slice(1)): "Naamloze begrenzing") + "</strong><br/>" + locatie.locatieType.toLowerCase(),
      label: locatie.noemer || "naamloze begrenzing",
      locaties: [locatie],
      teksten: teksten,
      annotation: null
    };
  }

  private gebiedsaanwijzingToInfo(gebiedsaanwijzing) {
    return {
      image: "assets/legend/relatie.png",
      text: "<strong>" + gebiedsaanwijzing.viewName[0].toUpperCase() + gebiedsaanwijzing.viewName.slice(1) + "</strong><br/>" + gebiedsaanwijzing.viewType,
      label: ((gebiedsaanwijzing.viewType == "functie")? gebiedsaanwijzing.viewType + " ": "") + gebiedsaanwijzing.viewName,
      locaties: gebiedsaanwijzing.locaties,
      teksten: gebiedsaanwijzing.teksten,
      annotation: gebiedsaanwijzing
    };
  }

  private activiteitlocatieaanduidingToInfo(activiteitlocatieaanduiding) {
    return {
      image: "assets/legend/bouwvlak.png",
      text: "<strong>" + activiteitlocatieaanduiding.viewName[0].toUpperCase() + activiteitlocatieaanduiding.viewName.slice(1) + "</strong><br/>" + activiteitlocatieaanduiding.viewType,
      label: activiteitlocatieaanduiding.viewName,
      locaties: activiteitlocatieaanduiding.locaties,
      teksten: activiteitlocatieaanduiding.teksten,
      annotation: activiteitlocatieaanduiding
    };
  }

  private normwaardeToInfo(normwaarde) {
    return {
      image: "assets/legend/aanduiding.png",
      text: "<strong>" + normwaarde.viewName[0].toUpperCase() + normwaarde.viewName.slice(1) + "</strong><br/>" + normwaarde.viewType + ": " + normwaarde.viewValue,
      label: normwaarde.viewName,
      locaties: normwaarde.locaties,
      teksten: normwaarde.omgevingsnorm.teksten,
      annotation: normwaarde
    };
  }

  private addActiviteitToInfo(gebiedsaanwijzingInfo, activiteitlocatieaanduiding) {
    gebiedsaanwijzingInfo.text += "<br/>" + activiteitlocatieaanduiding.betreftEenActiviteit.naam;
  }
}
