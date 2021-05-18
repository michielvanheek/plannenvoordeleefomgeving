import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class AppService {
  documentOpenModeChange$: Subject<boolean> = new Subject<boolean>();
  settings = {
    placeInfoDebugMode: false,
    documentOpenMode: false
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
    ARTIKEL: "Artikel",
    LID: "",
    BIJLAGE: "BIJLAGE"
  };
}
