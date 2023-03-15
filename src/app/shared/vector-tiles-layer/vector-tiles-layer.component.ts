import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, forwardRef } from "@angular/core";
import { Bounds, CenterScale, Filter, VectorTileModel } from "ng-niney";
import { CanvasSymbolizerComponent } from "ng-niney/canvas-symbolizer/canvas-symbolizer.component";
import { MapLayer } from "ng-niney/map/map-layer";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { TilesLayerComponent } from "ng-niney/tiles-layer/tiles-layer.component";
import { SVGConverter } from "../svg-converter";
import { VectorTileCacheService } from "../vector-tile-cache.service";

@Component({
  selector: "vectortileslayer",
  templateUrl: "./vector-tiles-layer.component.html",
  styleUrls: ["./vector-tiles-layer.component.scss"],
  providers: [{ provide: MapLayer, useExisting: forwardRef(() => VectorTilesLayerComponent) }]
})
export class VectorTilesLayerComponent extends TilesLayerComponent implements AfterContentInit, OnChanges {
  private filter = null;
  private cssFunction = null;

  @ContentChildren(CanvasSymbolizerComponent) private contentChildren: QueryList<CanvasSymbolizerComponent>;

  @Input("filter") locatiesOrLocatie = null;
  @Input("filtercssfunction") filterAndCssFunction = null;

  constructor(
    protected nineyDefaultService: NineyDefaultService,
    private vectorTileCache: VectorTileCacheService
  ) {
    super(nineyDefaultService);

    this.incubate = true;
  }

  init(boundsModel, focusModel, envelopeModel) {
    super.init(boundsModel, focusModel, envelopeModel);

    this.initChildren();
    this.setChildrenFilter();
    this.setChildrenCssFunction();
  }

  ngAfterContentInit() {
    this.contentChildren.changes.subscribe(() => {
      this.initChildren();
      this.setChildrenFilter();
      this.setChildrenCssFunction();
      this.tileModel.loadTiles();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tileModel == null) {
        return;
    }

    if (changes.locatiesOrLocatie) {
      this.setChildrenFilter();
      this.tileModel.loadTiles();
    } else if (changes.filterAndCssFunction) {
      this.setChildrenFilter();
      this.setChildrenCssFunction();
      this.tileModel.loadTiles();
    }
  }

  protected createTileModel() {
    const tileModel = new VectorTileModel();

    const eq = (a, b) => (a.length == b.length) && (a.every((aa, i) => aa == b[i]));

    tileModel.tileNeedsReload = tile => {
      return (
        (tile.symbology == null) ||
        !eq(tile.symbology.filters, this.contentChildren.map(symbolizer => symbolizer.mapFeatureModel.filter)) ||
        !eq(tile.symbology.cssFunctions, this.contentChildren.map(symbolizer => symbolizer.mapFeatureModel.cssFunction))
      );
    };

    tileModel.loadTileData = tile => {
      tile.symbology = {
        filters: this.contentChildren.map(symbolizer => symbolizer.mapFeatureModel.filter),
        cssFunctions: this.contentChildren.map(symbolizer => symbolizer.mapFeatureModel.cssFunction)
      };

      this.vectorTileCache.loadTileData(tile, this);
    };

    return tileModel;
  }

  loadTileDataHandler(tile, vectorTileLayers, transform) {
    if (vectorTileLayers == null) {
      this.discardTileData(tile);
    } else if ((vectorTileLayers.reduce((num, vectorTileLayer) => num += vectorTileLayer.length, 0) < 1000) && ((this.filter == null) || (this.filter.value.length < 3000))) {
      this.processTileData(tile, vectorTileLayers, transform.zoomFactor, transform.xShiftFactor, transform.yShiftFactor);
    } else {
      setTimeout(() => this.processTileData(tile, vectorTileLayers, transform.zoomFactor, transform.xShiftFactor, transform.yShiftFactor));
    }
  }

  private discardTileData(tile) {
    this.tileModel.completeTile(tile, false);
  }

  private processTileData(tile, vectorTileLayers, zoomFactor, xShiftFactor, yShiftFactor) {
    if (tile.tileWidth != tile.tileHeight) {
      console.warn("Tile width and height are not equal. Image will be distorted.");
    }

    let filterHash = {};
    if (this.filter != null) {
      this.filter.value.forEach(identificatie => filterHash[identificatie] = true);
    } else if (!this.contentChildren.some(contentChild => !contentChild.filter)) {
      this.contentChildren.forEach(contentChild => contentChild.filter.value.forEach(identificatie => filterHash[identificatie] = true));
    } else {
      filterHash = null;
    }

    const svgConverter = new SVGConverter();
    const features = [];
    const pointFeatures = [];

    for (let vectorTileLayer of vectorTileLayers) {
      for (let i = 0; i < vectorTileLayer.length; i++) {
        const feature = vectorTileLayer.feature(i);
        feature.properties.identificatie = feature.properties.technisch_id || feature.properties.identificatie;
        if ((filterHash == null) || filterHash[feature.properties.identificatie]) {
          if (!vectorTileLayer.pointsOnly) {
            feature.geometry = svgConverter.vectorTileFeatureToPath(feature);
            features.push(feature);
          } else {
            feature.geometry = svgConverter.vectorTileFeatureToPoint(feature);
            pointFeatures.push(feature);
          }
        }
      }
    }

    const canvas = this.createCanvas(tile.tileWidth, tile.tileHeight);
    const pointCanvas = this.createCanvas(tile.tileWidth + 2 * this.tileModel.snoopMargin, tile.tileHeight + 2 * this.tileModel.snoopMargin);
    const unscaledExtent = vectorTileLayers[0].extent;
    const extent = unscaledExtent / zoomFactor;
    const bounds = new Bounds(canvas.width, canvas.height);
    const pointBounds = new Bounds(pointCanvas.width, pointCanvas.height);
    const centerScale = new CenterScale(xShiftFactor * unscaledExtent + extent / 2, yShiftFactor * unscaledExtent + extent / 2, extent / 0.000352778 / tile.tileWidth, 1);

    this.contentChildren.forEach(contentChild => {
      contentChild.setContext(canvas.getContext("2d"), false, bounds, centerScale, features);
      contentChild.setContext(pointCanvas.getContext("2d"), true, pointBounds, centerScale, pointFeatures);
    });

    tile.data = canvas;
    tile.snoopData = pointCanvas;

    this.tileModel.completeTile(tile, true);
  }

  private createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  private initChildren() {
    this.contentChildren.forEach(contentChild => {
      contentChild.init(this.boundsModel, this.focusModel, this.envelopeModel, null);
    });
  }

  private setChildrenFilter() {
    if ((this.locatiesOrLocatie == null) && (this.filterAndCssFunction == null)) {
      return;
    }

    const locatiesOrLocatie = this.locatiesOrLocatie || this.filterAndCssFunction.filter;
    const identificaties = (Array.isArray(locatiesOrLocatie)? locatiesOrLocatie: [locatiesOrLocatie].concat(locatiesOrLocatie.omvat || [])).map(locatie => locatie.technischId || locatie.identificatie);
    if (
      (this.filter != null) &&
      (this.filter.value.length == identificaties.length) &&
      (this.filter.value.every((identificatie, i) => identificatie == identificaties[i]))
    ) {
      return;
    }

    this.filter = new Filter("properties.identificatie", identificaties, "IN");

    this.contentChildren.forEach(contentChild => {
      contentChild.filter = this.filter;
      contentChild.mapFeatureModel.filter = this.filter;
    });
  }

  private setChildrenCssFunction() {
    if (this.filterAndCssFunction == null) {
      return;
    }

    if (this.cssFunction == this.filterAndCssFunction.cssFunction) {
      return;
    }

    this.cssFunction = this.filterAndCssFunction.cssFunction;

    this.contentChildren.forEach(contentChild => {
      if (contentChild.cssFunction == "inherit") {
        contentChild.mapFeatureModel.cssFunction = this.cssFunction;
      }
    });
  }
}
