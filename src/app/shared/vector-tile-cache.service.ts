import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VectorTile } from "@mapbox/vector-tile";
import * as Protobuf from "pbf";
import { Timer } from "ng-niney";

@Injectable({
  providedIn: "root"
})
export class VectorTileCacheService {
  private timeToLive = 16000;
  private minSize = 20;
  private cleanUpTimer = new Timer(Math.trunc(this.timeToLive / 2), -1);
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
    {name: "-totaal", layerNames: ["vlaklocaties_totaal", "lijnlocaties_totaal", "puntlocaties_totaal"]},
    {name: "", layerNames: ["ontwerp_vlaklocaties", "ontwerp_lijnlocaties", "ontwerp_puntlocaties"]}
  ];
  private cache = {};

  constructor(private http: HttpClient) {
    this.cleanUpTimer.timerHandler = () => this.cleanUp();
    this.cleanUpTimer.start();
  }

  loadTileData(tile, component) {
    const url = tile.url;
    if (this.cache[url] != null) {
      if (this.cache[url].layers != null) {
        this.cache[url].timestamp = Date.now();
        component.setTileData(tile, this.cache[url].layers);
      } else {
        if (!this.cache[url].listeners.find(listener => listener.component == component)) {
          this.cache[url].listeners.push({tile: tile, component: component});
        }
      }
    } else {
      const tileZxy = url.match(/(\/\d+\/\d+\/\d+)\.pbf$/)[1];
      if (this.excludedTileZxys.includes(tileZxy)) {
        this.cache[url] = {timestamp: Date.now(), layers: [{extent: 4096, length: 0}]};
        component.setTileData(tile, this.cache[url].layers);
      } else {
        this.cache[url] = {timestamp: Date.now(), listeners: [{tile: tile, component: component}]};
        let vectorTileLayers = [];
        let numLoading = this.endpoints.length;
        this.endpoints.forEach(endpoint => {
          const endpointUrl = url.replace(/\$L/, endpoint.name);
          this.http.get(endpointUrl, {responseType: "arraybuffer"}).subscribe(
            response => {
              if (vectorTileLayers != null) {
                endpoint.layerNames.forEach(layerName => {
                  const vectorTileLayer = new VectorTile(new Protobuf(response)).layers[layerName];
                  if (vectorTileLayer != null) {
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

  private proceed(url, vectorTileLayers, numLoading) {
    if (numLoading == 0) {
      if ((vectorTileLayers != null) && (vectorTileLayers.length > 0)) {
        this.cache[url].layers = vectorTileLayers;
        this.cache[url].listeners.forEach(listener => {
          listener.component.setTileData(listener.tile, this.cache[url].layers);
        });
        delete this.cache[url].listeners;
      } else {
        console.warn((vectorTileLayers? "No layers found in vector tile: ": "Error loading vector tile: ") + url);
        this.cache[url].listeners.forEach(listener => {
          listener.component.tileModel.completeTile(listener.tile, false);
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
