import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, forwardRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Bounds, BoundsModel, CenterScale, Filter, FocusModel, VectorTileModel } from "ng-niney";
import { CanvasSymbolizer } from "ng-niney/map-feature-layer/canvas-symbolizer";
import { MapLayer } from "ng-niney/map/map-layer";
import { NineyDefaultService } from "ng-niney/niney-default.service";
import { TilesLayerComponent } from "ng-niney/tiles-layer/tiles-layer.component";
import { SVGConverter } from "src/app/shared/svg-converter";

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

  @Input() vectorCaching = true;
  @Input() filter = null;

  constructor(
    private http: HttpClient,
    protected nineyDefaultService: NineyDefaultService
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
      if (tile.vectorData == null) {
        const tileZxy = tile.url.match(/(\/\d+\/\d+\/\d+)\.pbf$/)[1];
        const excludedTileZxys = [
          "/3/2/5",
          "/3/3/5",
          "/3/4/0",
          "/3/5/0",
          "/3/5/1",
          "/3/5/4",
          "/3/5/5",
          "/4/4/0",
          "/4/4/1",
          "/4/4/2",
          "/4/4/5",
          "/4/4/6",
          "/4/4/10",
          "/4/5/10",
          "/4/6/10",
          "/4/7/10",
          "/4/7/0",
          "/4/8/0",
          "/4/8/1",
          "/4/8/2",
          "/4/9/0",
          "/4/9/1",
          "/4/9/2",
          "/4/9/3",
          "/4/10/0",
          "/4/10/1",
          "/4/10/2",
          "/4/10/3",
          "/4/10/4",
          "/4/10/8",
          "/4/10/9",
          "/4/10/10",
        ];
        if (!excludedTileZxys.includes(tileZxy)) {
          this.http.get(tile.url, {responseType: "arraybuffer"}).subscribe(
            response => {
              if (this.layer == null) {
                this.tileModel.completeTile(tile, false);
                return;
              }
              const vectorTileLayers = [];
              ["vlaklocaties", "ontwerp_vlaklocaties"].forEach(layerName => {
                const vectorTileLayer = new VectorTile(new Protobuf(response)).layers[layerName];
                if (vectorTileLayer != null) {
                  vectorTileLayers.push(vectorTileLayer);
                }
              });
              if (vectorTileLayers.length > 0) {
                this.setTileData(tile, vectorTileLayers);
              } else {
                console.warn("Could not instantiate: " + tile.url);
                this.tileModel.completeTile(tile, false);
              }
            },
            error => {
              this.tileModel.completeTile(tile, false);
            }
          );
        } else {
          this.setTileData(tile, [{extent: 4096, length: 0}]);
        }
      } else {
        this.setTileData(tile, tile.vectorData);
      }
    };

    return tileModel;
  }

  private setTileData(tile, vectorTileLayers) {
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
    if (this.vectorCaching) {
      tile.vectorData = vectorTileLayers;
    }
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
