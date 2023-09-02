import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,
/*  websiteUrl: "http://pilot.test.ruimtelijkeplannen.nl/",
  websiteProxyUrl: "http://www.niney.org/rpintproxy/",           // INT
  geoUrl: "http://pilot.test.ruimtelijkeplannen.nl/"*/
/*  websiteUrl: "http://www.acceptatie.ruimtelijkeplannen.nl/",
  websiteProxyUrl: "http://www.niney.org/rpftoproxy/",           // FTO
  geoUrl: "http://afnemers.acceptatie.ruimtelijkeplannen.nl/"*/
  websiteUrl: "https://www.ruimtelijkeplannen.nl/",
//  websiteProxyUrl: "https://www.niney.org/rpproxy/",
  websiteProxyUrl: "https://www.ruimtelijkeplannen.nl/",
  geoUrl: "https://afnemers.ruimtelijkeplannen.nl/",
  geoWebCacheUrl: "https://www.ruimtelijkeplannen.nl/kaartservices/geowebcache/service/wms",
//  dsoUrl: "https://nep-knooppunt-ketenacceptatie.viewer.dso.kadaster.nl/publiek/omgevingsdocumenten/api/presenteren/v7/",
//  dsoUrl: "https://service.acc.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v7/",
  dsoUrl: "https://service.pre.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v7/",
//  dsoUrl: "https://service.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v7/",
  dsoOptions: {
    headers: new HttpHeaders({
      "Accept" : "application/json, application/hal+json",
      "Accept-CRS": "EPSG:28992",
      "Content-CRS": "EPSG:28992",
      "X-Api-Key": "297a74b1-6941-4174-b058-94bfb72f9615"
//      "X-Api-Key": "307c52d5-59ca-4396-99a9-3f5f50a07b59"
    })
  },
  ihr: false,
  ihrUrl: "https://ruimte.omgevingswet.overheid.nl/ruimtelijke-plannen/api/opvragen/v4/",
  ihrOptions: {
    headers: new HttpHeaders({
      "Accept" : "application/json, application/hal+json",
      "Accept-CRS": "epsg:28992",
      "Content-CRS": "epsg:28992",
      "X-Api-Key": "462c15cf-1d76-4cf2-9456-8d926885a8c4"
    })
  },
//  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten$L-ketenacc/wmts/v1_0/locaties/EPSG:28992/",
//  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten$L-acc/wmts/v1_0/locaties/EPSG:28992/",
  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten$L-pre/wmts/v1_0/locaties/EPSG:28992/",
//  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten$L/wmts/v1_0/locaties/EPSG:28992/",
  geocoderUrl: "https://api.pdok.nl/bzk/locatieserver/search/v3_1/",
  tweakMnre: false,
  legalAnnotations: false,
  gebiedsaanwijzingGroep: false,
  stripQuotes: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
