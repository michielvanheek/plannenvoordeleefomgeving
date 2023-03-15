import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Timer } from "ng-niney";
import { NineyDefaultService } from "ng-niney/niney-default.service";

@Injectable({
  providedIn: "root"
})
export class VectorTileCacheService {
  private timeToLive = 16000;
  private minSize = 20;
  private cleanUpTimer = new Timer(Math.trunc(this.timeToLive / 2), -1);
  private maxZoomLevelIndex = 11;
  private excludedTileZxys = [
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
  private endpoints = [
    {name: "-totaal", layers: [
      {name: "vlaklocaties_totaal", pointsOnly: false},
      {name: "lijnlocaties_totaal", pointsOnly: false},
      {name: "puntlocaties_totaal", pointsOnly: true}
    ]},
    {name: "", layers: [
      {name: "ontwerp_vlaklocaties", pointsOnly: false},
      {name: "ontwerp_lijnlocaties", pointsOnly: false},
      {name: "ontwerp_puntlocaties", pointsOnly: true}
    ]}
  ];
  private cache = {};

  constructor(
    private http: HttpClient,
    private nineyDefault: NineyDefaultService
  ) {
    this.cleanUpTimer.timerHandler = () => this.cleanUp();
    this.cleanUpTimer.start();
  }

  loadTileData(tile, component) {
    const transform = this.getTransform(tile);
    const url = transform.url;
    if (this.cache[url] != null) {
      if (this.cache[url].layers != null) {
        this.cache[url].timestamp = Date.now();
        component.loadTileDataHandler(tile, this.cache[url].layers, transform);
      } else {
        if (!this.cache[url].listeners.find(listener => (listener.tile.url == tile.url) && (listener.component == component))) {
          this.cache[url].listeners.push({tile: tile, component: component, transform: transform});
        }
      }
    } else {
      const tileZxy = url.match(/(\/\d+\/\d+\/\d+)\.pbf$/)[1];
      if (this.excludedTileZxys.includes(tileZxy)) {
        this.cache[url] = {timestamp: Date.now(), layers: [{extent: 4096, length: 0}]};
        component.loadTileDataHandler(tile, this.cache[url].layers, transform);
      } else {
        this.cache[url] = {timestamp: Date.now(), listeners: [{tile: tile, component: component, transform: transform}]};
        let vectorTileLayers = [];
        let numLoading = this.endpoints.length;
        this.endpoints.forEach(endpoint => {
          const endpointUrl = url.replace(/\$L/, endpoint.name);
          this.http.get(endpointUrl, {responseType: "arraybuffer"}).subscribe(
            response => {
              if (vectorTileLayers != null) {
                const vectorTile = new VectorTile(new Protobuf(response));
                endpoint.layers.forEach(layer => {
                  const vectorTileLayer = vectorTile.layers[layer.name];
                  if (vectorTileLayer != null) {
                    vectorTileLayer.pointsOnly = layer.pointsOnly;
                    vectorTileLayers.push(vectorTileLayer);
                  }
                });
              }
              numLoading--;
              this.proceed(url, vectorTileLayers, numLoading);
            },
            error => {
              vectorTileLayers = null;
              numLoading--;
              this.proceed(url, vectorTileLayers, numLoading);
            }
          );
        });
      }
    }
  }

  private getTransform(tile) {
    if (this.maxZoomLevelIndex == null) {
      return {zoomFactor: 1, xShiftFactor: 0, yShiftFactor: 0, url: tile.url};
    }

    const srs = this.nineyDefault.defaultFocusModel.srs;
    const tileZoomLevel = srs.getZoomLevel(tile.scale);
    const maxZoomLevel = srs.zoomLevels[this.maxZoomLevelIndex];
    if (tileZoomLevel.zoomLevel <= maxZoomLevel.zoomLevel) {
      return {zoomFactor: 1, xShiftFactor: 0, yShiftFactor: 0, url: tile.url};
    }

    const zoomFactor = Math.pow(2, tileZoomLevel.zoomLevel - maxZoomLevel.zoomLevel);
    const subTileX = Math.round((tile.minX - srs.minX) / maxZoomLevel.resolution / tile.tileWidth * zoomFactor) / zoomFactor;
    const subTileY = Math.round((srs.maxY - tile.maxY) / maxZoomLevel.resolution / tile.tileHeight * zoomFactor) / zoomFactor;
    const tileLimit = Math.pow(2, maxZoomLevel.zoomLevel);
    const tileX = ((Math.floor(subTileX) % tileLimit) + tileLimit) % tileLimit;
    const tileY = Math.max(Math.floor(subTileY), 0);
    const tileZ = maxZoomLevel.zoomLevel;

    return {
      zoomFactor: zoomFactor,
      xShiftFactor: subTileX % 1,
      yShiftFactor: subTileY % 1,
      url: tile.url.replace(/\/(\d+)\/\d+\/\d+\.pbf$/, "/" + tileZ + "/" + tileX + "/" + tileY + ".pbf")
    };
  }

  private proceed(url, vectorTileLayers, numLoading) {
    if (numLoading == 0) {
      if ((vectorTileLayers != null) && (vectorTileLayers.length > 0)) {
        this.cache[url].layers = vectorTileLayers;
        this.cache[url].listeners.forEach(listener => {
          listener.component.loadTileDataHandler(listener.tile, this.cache[url].layers, listener.transform);
        });
        delete this.cache[url].listeners;
      } else {
        console.warn((vectorTileLayers? "No layers found in vector tile: ": "Error loading vector tile: ") + url);
        this.cache[url].listeners.forEach(listener => {
          listener.component.loadTileDataHandler(listener.tile, null, null);
        });
        delete this.cache[url];
      }
    }
  }

  private cleanUp() {
    const timestamps = Object.values(this.cache).map((c: any) => c.timestamp).sort();
    if (timestamps.length <= this.minSize) {
      return;
    }

    const cleanUpTimestamp = Date.now() - this.timeToLive;
    const minSizeTimestamp = this.minSize? timestamps[timestamps.length - this.minSize]: Number.MAX_SAFE_INTEGER;
    Object.keys(this.cache).forEach(key => {
      if ((this.cache[key].timestamp < cleanUpTimestamp) && (this.cache[key].timestamp < minSizeTimestamp)) {
        delete this.cache[key];
      }
    });
  }
}
