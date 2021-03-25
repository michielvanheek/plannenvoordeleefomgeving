// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
/*  websiteURL: "http://pilot.test.ruimtelijkeplannen.nl/",
  websiteProxyURL: "http://www.niney.org/rpintproxy/",           // INT
  geoURL: "http://pilot.test.ruimtelijkeplannen.nl/"*/
/*  websiteURL: "http://www.acceptatie.ruimtelijkeplannen.nl/",
  websiteProxyURL: "http://www.niney.org/rpftoproxy/",           // FTO
  geoURL: "http://afnemers.acceptatie.ruimtelijkeplannen.nl/"*/
  websiteURL: "https://www.ruimtelijkeplannen.nl/",
//  websiteProxyURL: "https://www.niney.org/rpproxy/",             // PROD
  websiteProxyURL: "https://www.ruimtelijkeplannen.nl/",         // PROD
  geoURL: "https://afnemers.ruimtelijkeplannen.nl/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
