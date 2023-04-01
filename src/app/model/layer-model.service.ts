import { Injectable } from "@angular/core";
import { Layer } from "ng-niney";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class LayerModelService {
  layers = [
    new Layer("perceel"),        // 0 WMS
    null,                        // 1 WMS: selected bestemmingsplan contents
    null,                        // 2 WMTS: selected vormvrij-plan contents
    new Layer("bp_grenzen_all"), // 3 WMTS
    new Layer("SelectionLayer"), // 4 MF: selected bestemmingsplan or vormvrij-plan boundaries
    new Layer(null),             // 5 MVT: all regeling contents & boundaries
    new Layer("HighlightLayer"), // 6 MF: IMRO highlight
    new Layer(null)              // 7 MVT: IMOW highlight
  ];
  planOpacity = 100;
  otherPlansOpacity = 60;
  backgroundLayers = [new Layer(null), new Layer(null), new Layer(null), new Layer(null), new Layer(null)];
  backgroundLayer = null;

  constructor() {
    this.layers[0].baseURL = "https://geodata.nationaalgeoregister.nl/kadastralekaart/wms/v4_0";
    this.layers[3].baseURL = environment.geoWebCacheUrl;
    this.layers[3].visible = false;
    this.layers[5].baseURL = environment.locatiesUrl;
    this.layers[5].urlExtension = "$Z/$X/$Y.pbf";
    this.layers[5].visible = false;
    this.layers[7].baseURL = environment.locatiesUrl;
    this.layers[7].urlExtension = "$Z/$X/$Y.pbf";
    this.layers[7].visible = false;

    this.backgroundLayers[0].baseURL = "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=standaard&STYLE=default&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[0].title = "topografie";
    this.backgroundLayers[0].titleURL = "assets/background-layers/topo.png";
    this.backgroundLayers[0].expert = false;
    this.backgroundLayers[1].baseURL = "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=pastel&STYLE=default&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[1].title = "topografie pasteltinten";
    this.backgroundLayers[1].titleURL = "assets/background-layers/pastel.png";
    this.backgroundLayers[1].expert = true;
    this.backgroundLayers[2].baseURL = "https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=grijs&STYLE=default&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[2].title = "topografie grijstinten";
    this.backgroundLayers[2].titleURL = "assets/background-layers/grijs.png";
    this.backgroundLayers[2].expert = false;
    this.backgroundLayers[3].baseURL = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=bgtpastel&STYLE=default&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[3].title = "grootschalige topografie (BGT)";
    this.backgroundLayers[3].titleURL = "assets/background-layers/bgt.png";
    this.backgroundLayers[3].expert = true;
    this.backgroundLayers[4].baseURL = "https://service.pdok.nl/hwh/luchtfotorgb/wmts/v1_0?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=Actueel_ortho25&STYLE=default&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[4].title = "luchtfoto";
    this.backgroundLayers[4].titleURL = "assets/background-layers/foto.jpg";
    this.backgroundLayers[4].expert = false;
    for (var i = 0; i < this.backgroundLayers.length; i++) {
        this.backgroundLayers[i].urlExtension = "&TILEMATRIX=$Z&TILEROW=$Y&TILECOL=$X";
    }

    this.reset();
  }

  setBackgroundLayer(layer) {
    this.backgroundLayer = layer;
  }

  reset() {
    this.layers[0].visible = false;
    this.planOpacity = 100;
    this.otherPlansOpacity = 60;
    this.setBackgroundLayer(this.backgroundLayers[0]);
  }
}
