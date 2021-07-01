import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AppService {
  settings = {
    placeInfoShowOrphans: false,
    placeInfoDebugMode: false,
  };

  titleSymbols = {
    BOEK: "BOEK",
    DEEL: "DEEL",
    HOOFDSTUK: "HOOFDSTUK",
    TITEL: "TITEL",
    AFDELING: "AFDELING",
    PARAGRAAF: "§",
    SUBPARAGRAAF: "§",
    SUBSUBPARAGRAAF: "§",
    ARTIKEL: "ARTIKEL",
    BIJLAGE: "BIJLAGE"
  };
}
