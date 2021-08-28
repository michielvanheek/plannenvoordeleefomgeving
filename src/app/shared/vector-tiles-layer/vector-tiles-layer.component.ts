import { AfterContentInit, Component, ContentChildren, Input, OnChanges, QueryList, SimpleChanges, forwardRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Bounds, BoundsModel, CenterScale, FocusModel, VectorTileModel } from "ng-niney";
import { MapLayer } from "ng-niney/map/map-layer";
import { Symbolizer } from "ng-niney/map-feature-layer/symbolizer";
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

  @ContentChildren(Symbolizer) private contentChildren: QueryList<Symbolizer>;

  @Input() filter;

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

    tileModel.tileNeedsReload = tile => {
      return (
        ((tile.scale <= maxZoomLevelScale) && (tile.scale != this.zoomLevelScale)) ||
        (tile.symbology != this.filter)
      ) && tile.completed;
    };
  
    tileModel.loadTileData = tile => {
      if (tile.vectorData.length == 0) {
        this.http.get(tile.url, {responseType: "arraybuffer"}).subscribe(
          response => {
            if (this.layer == null) {
              this.tileModel.completeTile(tile, false);
              return;
            }
            const layer = new VectorTile(new Protobuf(response)).layers[this.layer.name];
            for (let i = 0; i < layer.length; i++) {
              const feature = layer.feature(i);
              feature.geometry = (new SVGConverter()).vectorTileFeatureToPath(feature);
              tile.vectorData.push(feature);
            }
            tile.extent = layer.extent;
            this.setTileData(tile);
          },
          error => {
            this.tileModel.completeTile(tile, false);
          }
        );
      } else {
        this.setTileData(tile);
      }
    };

    return tileModel;
  }

  private setTileData(tile) {
    if (tile.tileWidth != tile.tileHeight) {
      console.warn("Tile width and height are not equal. Image will be distorted.");
    }

    if (tile.scale != this.zoomLevelScale) {
      const rescaleFactor = tile.scale / this.zoomLevelScale;
      tile.scale = this.zoomLevelScale;
      tile.tileWidth = Math.round(tile.tileWidth * rescaleFactor);
      tile.tileHeight = Math.round(tile.tileHeight * rescaleFactor);
    }

    tile.symbology = this.filter;

    const canvas = document.createElement("canvas");
    canvas.width = tile.tileWidth;
    canvas.height = tile.tileHeight;
    const scaling = tile.tileWidth / tile.extent;

    const bounds = new Bounds(tile.tileWidth, tile.tileHeight);
    const centerScale = new CenterScale(tile.extent / 2, tile.extent / 2, 1 / 0.000352778 / scaling, 1);

    this.tilesBoundsModel.setBounds(bounds);
    this.tilesFocusModel.setCenterScale(centerScale);

    this.contentChildren.forEach(contentChild => {
      contentChild.setContext(canvas.getContext("2d"), bounds, centerScale);
      contentChild.setFeatures(tile.vectorData);
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
    this.contentChildren.forEach(contentChild => {
      contentChild.mapFeatureModel.setFilter(this.filter? "properties.identificatie == " + this.filter: null);
    });
  }
}
