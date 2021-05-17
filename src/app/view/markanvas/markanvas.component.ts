import { Component, DoCheck, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Layer, VectorTileModel } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { AppService } from "../../app.service";
import { HighlightModelService } from "src/app/model/highlight-model.service";
import { ImowModelService } from "src/app/model/imow-model.service";
import { MarkerModelService } from "src/app/model/marker-model.service";
import { PlanModelService } from "src/app/model/plan-model.service";
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
  private tileModel = new VectorTileModel();

  private maxZoomLevel = 11;
  private tileSize = 256;
  private canvasSize = 400;

  @ViewChild("canvas", { static: true }) private canvasRef: ElementRef;

  filteredLocaties = [];
  gebiedsaanwijzingen = [];
  normwaarden = [];
  orphanLocaties = [];

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService,
    public appService: AppService,
    public highlightModel: HighlightModelService,
    private markerModel: MarkerModelService,
    public imowModel: ImowModelService,
    private planModel: PlanModelService
  ) {
    this.layer.baseURL = environment.locatiesUrl;
    this.layer.urlExtension = "$Z/$X/$Y.pbf";
  }

  ngOnInit(): void {
    this.canvasRef.nativeElement.width = this.canvasSize;
    this.canvasRef.nativeElement.height = this.canvasSize;

    this.loadTile();
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
      this.loadTile();
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

  openInfo(imowObject) {
    const componentIdentificaties = {};

    componentIdentificaties[imowObject.regelteksten[0].documentIdentificatie + "__body"] = "trail";
    imowObject.regelteksten.forEach(
      regeltekst => regeltekst.documentKruimelpad.forEach(
        pad => componentIdentificaties[pad.identificatie] = "trail"
      )
    );
    imowObject.regelteksten.forEach(
      regeltekst => componentIdentificaties[regeltekst.documentKruimelpad[regeltekst.documentKruimelpad.length - 1].identificatie] = "target"
    );

    this.planModel.setComponentIdentificaties(componentIdentificaties);
  }

  private loadTile() {
    if (this.markerXY == null) {
      this.filteredLocaties = [];
      this.setCollections();
      return;
    }

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
    this.http.get(tile.url, { responseType: "arraybuffer" }).subscribe(
      response => {
        this.filteredLocaties = [];

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
          const locatie = this.markerLocaties.find(locatie => locatie.identificatie == feature.properties.identificatie);
          if (locatie == null) {
            continue;
          }
          const canvas = this.getPlaceSpecificCanvas(feature, matrix);
          if (canvas == null) {
            continue;
          }

          ctx.drawImage(canvas, 0, 0, this.canvasSize, this.canvasSize);

          if (!this.filteredLocaties.includes(locatie)) {
            this.filteredLocaties.push(locatie);
          }
        }

        this.setCollections();
      }
    );
  }

  private getPlaceSpecificCanvas(feature, matrix) {
    const path2d = new Path2D((new SVGConverter()).vectorTileFeatureToPath(feature));
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
    this.gebiedsaanwijzingen =
      Object.values(this.imowModel.gebiedsaanwijzingen).filter(gebiedsaanwijzing =>
        gebiedsaanwijzing["regelteksten"].find(regeltekst => regeltekst.documentIdentificatie == this.planModel.plan.identificatie) &&
        gebiedsaanwijzing["locaties"].find(gebiedsaanwijzingLocatie =>
          this.filteredLocaties.find(filteredLocatie => filteredLocatie.identificatie == gebiedsaanwijzingLocatie.identificatie)
        )
      );

    this.normwaarden =
      (Object.values(this.imowModel.omgevingsnormen).filter(omgevingsnorm =>
        omgevingsnorm["regelteksten"].find(regeltekst => regeltekst.documentIdentificatie == this.planModel.plan.identificatie)
      ) as any[]).reduce((normwaarden, omgevingsnorm) => normwaarden.concat(omgevingsnorm["normwaarde"].filter(normwaarde => 
        normwaarde["locaties"].find(normwaardeLocatie =>
          this.filteredLocaties.find(filteredLocatie => filteredLocatie.identificatie == normwaardeLocatie.identificatie)
        )
      )), []);

    const adoptedLocaties = this.gebiedsaanwijzingen.concat(this.normwaarden).reduce((locaties, locatieParent) => locaties.concat(locatieParent.locaties), []);
    this.orphanLocaties = this.filteredLocaties.filter(filteredLocatie => !adoptedLocaties.find(adoptedLocatie => adoptedLocatie.identificatie == filteredLocatie.identificatie));
  }
}
