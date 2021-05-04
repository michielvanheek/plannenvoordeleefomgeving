import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AppService {
  settings = {
    placeInfoDebugMode: false,
    documentOpenMode: false
  }
  titleSymbols = {
    BOEK: "BOEK",
    DEEL: "DEEL",
    HOOFDSTUK: "HOOFDSTUK",
    TITEL: "TITEL",
    AFDELING: "AFDELING",
    PARAGRAAF: "§",
    SUBPARAGRAAF: "§",
    SUBSUBPARAGRAAF: "§",
    ARTIKEL: "Artikel",
    LID: "",
    BIJLAGE: "BIJLAGE"
  }
}
