import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, forwardRef } from "@angular/core";
import { Bounds, BoundsModel, CenterScale, Filter, FocusModel, VectorTileModel } from "ng-niney";
import { CanvasSymbolizer } from "ng-niney/map-feature-layer/canvas-symbolizer";
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
  private zoomLevelScale = null;
  private tilesBoundsModel = new BoundsModel();
  private tilesFocusModel = new FocusModel();
  private childrenFilter = null;

  @ContentChildren(CanvasSymbolizer) private contentChildren: QueryList<CanvasSymbolizer>;

  @Input() filter = null;

  constructor(
    protected nineyDefaultService: NineyDefaultService,
    private vectorTileCache: VectorTileCacheService
  ) {
    super(nineyDefaultService);

    this.incubate = true;
  }

  ngAfterContentInit() {
    this.initChildren();
    this.setChildrenFilter();

    this.contentChildren.changes.subscribe(() => {
      this.initChildren();
      this.setChildrenFilter();
      this.tileModel.loadTiles();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tileModel == null) {
        return;
    }

    if (changes.filter) {
      this.setChildrenFilter();
      this.tileModel.loadTiles();
    }
  }

  protected createTileModel() {
    const tileModel = new VectorTileModel();
    const maxZoomLevelScale = 4762.201724597;
    tileModel.maxZoomLevel = 11;

    const origSetBoundsAndCenterScales = tileModel.setBoundsAndCenterScales;
    tileModel.setBoundsAndCenterScales = (bounds, centerScale, animationCenterScale, envelope, animationEnvelope) => {
      this.zoomLevelScale = this.focusModel.srs.getZoomLevel(centerScale.scale).scale;
      origSetBoundsAndCenterScales.call(tileModel, bounds, centerScale, animationCenterScale, envelope, animationEnvelope);
    };
    const origSetCenterScale = tileModel.setCenterScale;
    tileModel.setCenterScale = (centerScale, envelope) => {
      this.zoomLevelScale = this.focusModel.srs.getZoomLevel(centerScale.scale).scale;
      origSetCenterScale.call(tileModel, centerScale, envelope);
    };

    const eq = (a, b) => (a.length == b.length) && (a.every((aa, i) => aa == b[i]));

    tileModel.tileNeedsReload = tile => {
      return (
        ((tile.scale <= maxZoomLevelScale) && (tile.scale != this.zoomLevelScale)) ||
        (tile.symbology == null) ||
        !eq(tile.symbology.filters, this.contentChildren.map(symbolizer => symbolizer.filter)) ||
        !eq(tile.symbology.cssFunctions, this.contentChildren.map(symbolizer => symbolizer.cssFunction))
      ) && tile.completed;
    };
  
    tileModel.loadTileData = tile => {
      this.vectorTileCache.loadTileData(tile, this);
    };

    return tileModel;
  }

  private setTileData(tile, vectorTileLayers) {
    if ((vectorTileLayers.reduce((num, vectorTileLayer) => num += vectorTileLayer.length, 0) < 1000) && ((this.childrenFilter == null) || (this.childrenFilter.value.length < 3000))) {
      this.setVectorTileData(tile, vectorTileLayers);
    } else {
      setTimeout(() => this.setVectorTileData(tile, vectorTileLayers));
    }
  }

  private setVectorTileData(tile, vectorTileLayers) {
    if (tile.tileWidth != tile.tileHeight) {
      console.warn("Tile width and height are not equal. Image will be distorted.");
    }

    if (tile.scale != this.zoomLevelScale) {
      const rescaleFactor = tile.scale / this.zoomLevelScale;
      tile.scale = this.zoomLevelScale;
      tile.tileWidth = Math.round(tile.tileWidth * rescaleFactor);
      tile.tileHeight = Math.round(tile.tileHeight * rescaleFactor);
    }

    tile.symbology = {
      filters: this.contentChildren.map(symbolizer => symbolizer.filter),
      cssFunctions: this.contentChildren.map(symbolizer => symbolizer.cssFunction)
    };

    const canvas = document.createElement("canvas");
    canvas.width = tile.tileWidth;
    canvas.height = tile.tileHeight;
    const scaling = tile.tileWidth / vectorTileLayers[0].extent;

    const bounds = new Bounds(tile.tileWidth, tile.tileHeight);
    const centerScale = new CenterScale(vectorTileLayers[0].extent / 2, vectorTileLayers[0].extent / 2, 1 / 0.000352778 / scaling, 1);

    this.tilesBoundsModel.setBounds(bounds);
    this.tilesFocusModel.setCenterScale(centerScale);

    const features = [];
    for (let vectorTileLayer of vectorTileLayers) {
      for (let i = 0; i < vectorTileLayer.length; i++) {
        const feature = vectorTileLayer.feature(i);
        feature.properties.identificatie = feature.properties.technisch_id || feature.properties.identificatie;
        if ((this.childrenFilter == null) || (this.childrenFilter.value.includes(feature.properties.identificatie))) {
          feature.geometry = (new SVGConverter()).vectorTileFeatureToPath(feature);
          features.push(feature);
        }
      }
    }

    this.contentChildren.forEach(contentChild => {
      contentChild.setContext(canvas.getContext("2d"), bounds, centerScale);
      contentChild.setFeatures(features);
      contentChild.setFeatures(null);
    });

    tile.data = canvas;
    this.tileModel.completeTile(tile, true);
  }

  private initChildren() {
    this.contentChildren.forEach(contentChild => {
      contentChild.animate = false;
      contentChild.init(this.tilesBoundsModel, this.tilesFocusModel, null, null);
    });
  }

  private setChildrenFilter() {
    if (this.filter == null) {
      return;
    }

    const identificaties = (Array.isArray(this.filter)? this.filter: [this.filter].concat(this.filter.omvat || [])).map(locatie => locatie.technischId || locatie.identificatie);
    if (
      (this.childrenFilter != null) &&
      (this.childrenFilter.value.length == identificaties.length) &&
      (this.childrenFilter.value.every((identificatie, i) => identificatie == identificaties[i]))
    ) {
      return;
    }

    this.childrenFilter = new Filter("properties.identificatie", identificaties, "IN");

    this.contentChildren.forEach(contentChild => {
      contentChild.filter = this.childrenFilter;
      contentChild.mapFeatureModel.filter = this.childrenFilter;
    });
  }
}
