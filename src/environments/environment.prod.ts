import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
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
//  dsoUrl: "https://service.acc.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v5/",
  dsoUrl: "https://service.pre.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v5/",
  dsoOptions: {
    headers: new HttpHeaders({
      "Accept" : "application/json, application/hal+json",
      "x-api-key": "f9303b04-8db4-4d34-b2a9-356ba490f977",
      "Content-CRS": "EPSG:28992",
      "Accept-CRS": "EPSG:28992"
    })
  },
//  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten-acc/wmts/v1_0/locaties/EPSG:28992/"
  locatiesUrl: "https://service.pdok.nl/omgevingswet/omgevingsdocumenten-pre/wmts/v1_0/locaties/EPSG:28992/"
};
