import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
  settings = {
    planTypeInHeader: false
  }
  titleSymbols = {
    HOOFDSTUK: 'HOOFDSTUK',
    TITEL: 'TITEL',
    AFDELING: 'AFDELING',
    PARAGRAAF: '§',
    SUBPARAGRAAF: '§',
    SUBSUBPARAGRAAF: '§',
    ARTIKEL: 'Artikel',
    LID: '',
    BIJLAGE: 'BIJLAGE'
  }
}
