import { Component, Input, OnChanges, SimpleChanges, forwardRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { VectorTileModel } from "ng-niney";
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
export class VectorTilesLayerComponent extends TilesLayerComponent implements OnChanges {
  zoomLevelScale = null;

  @Input() fill;
  @Input() filter;

  constructor(
    private http: HttpClient,
    protected nineyDefaultService: NineyDefaultService
  ) {
    super(nineyDefaultService);

    this.incubate = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tileModel == null) {
        return;
    }

    if (changes.filter) {
        this.tileModel.tiles.forEach(tile => { tile.corrupted = performance.now() - 8000 });
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
      return (tile.scale <= maxZoomLevelScale) && (tile.scale != this.zoomLevelScale);
    };
  
    tileModel.loadTileData = tile => {
      if (tile.vectorData.length == 0) {
        this.http.get(tile.url, { responseType: "arraybuffer" }).subscribe(
          response => {
            if (this.layer == null) {
              this.tileModel.completeTile(tile, false);
              return;
            }
            const layer = new VectorTile(new Protobuf(response)).layers[this.layer.name];
            for (let i = 0; i < layer.length; i++) {
              const feature = layer.feature(i);
              feature.path = (new SVGConverter()).vectorTileFeatureToPath(feature);
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
    let path = "";
    for (let feature of tile.vectorData) {
      if (this.filter && feature.properties.identificatie != this.filter) {
        continue;
      }
      path += feature.path;
    }

    if (tile.scale != this.zoomLevelScale) {
      const rescaleFactor = tile.scale / this.zoomLevelScale;
      tile.scale = this.zoomLevelScale;
      tile.tileWidth *= rescaleFactor;
      tile.tileHeight *= rescaleFactor;
    }

    const canvas = document.createElement("canvas");
    canvas.width = tile.tileWidth;
    canvas.height = tile.tileHeight;
    const ctx = canvas.getContext("2d");
    ctx.scale(canvas.width / tile.extent, canvas.height / tile.extent);
    ctx.lineWidth = 1.5 * tile.extent / canvas.height;
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";

    const path2d = new Path2D(path);
    ctx.stroke(path2d);
    if (this.fill) {
        ctx.fill(path2d);
    }

    tile.data = canvas;
    this.tileModel.completeTile(tile, true);
  }
}
