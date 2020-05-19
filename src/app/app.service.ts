import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {
  settings = {
    planTypeInHeader: false
  }
}
