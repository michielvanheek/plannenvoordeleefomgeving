import { Injectable } from "@angular/core";
import { Layer } from "ng-niney";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class LayerModelService {
  layers = [
    new Layer("perceel"),        // WMS
    null,                        // WMS: selected bestemmingsplan contents
    null,                        // WMTS: selected vormvrij-plan contents
    new Layer("bp_grenzen_all"), // WMTS
    null,                        // WMS: selected plan boundaries
    new Layer("HighlightLayer")
  ];
  planOpacity = 100;
  otherPlansOpacity = 60;
  backgroundLayers = [new Layer(null), new Layer(null), new Layer(null), new Layer(null), new Layer(null)];
  backgroundLayer = null;

  constructor() {
    this.layers[0].baseURL = "https://geodata.nationaalgeoregister.nl/kadastralekaartv3/wms";
    this.layers[3].baseURL = environment.geoURL + "geowebcache/service/wms";
    this.layers[3].visible = false;

    this.backgroundLayers[0].baseURL = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=brtachtergrondkaart&STYLE=_null&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[0].title = "topografie";
    this.backgroundLayers[0].titleURL = "images/topo.png";
    this.backgroundLayers[0].expert = false;
    this.backgroundLayers[1].baseURL = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=brtachtergrondkaartpastel&STYLE=_null&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[1].title = "topografie pasteltinten";
    this.backgroundLayers[1].titleURL = "images/pastel.png";
    this.backgroundLayers[1].expert = true;
    this.backgroundLayers[2].baseURL = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=brtachtergrondkaartgrijs&STYLE=_null&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[2].title = "topografie grijstinten";
    this.backgroundLayers[2].titleURL = "images/grijs.png";
    this.backgroundLayers[2].expert = false;
    this.backgroundLayers[3].baseURL = "https://geodata.nationaalgeoregister.nl/tiles/service/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=bgtpastel&STYLE=_null&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fpng";
    this.backgroundLayers[3].title = "grootschalige topografie (BGT)";
    this.backgroundLayers[3].titleURL = "images/bgt.png";
    this.backgroundLayers[3].expert = true;
    this.backgroundLayers[4].baseURL = "https://geodata.nationaalgeoregister.nl/luchtfoto/rgb/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=Actueel_ortho25&STYLE=&TILEMATRIXSET=EPSG%3A28992&FORMAT=image%2Fjpeg";
    this.backgroundLayers[4].title = "luchtfoto";
    this.backgroundLayers[4].titleURL = "images/foto.jpg";
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
