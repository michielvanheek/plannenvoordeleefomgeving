import { AppEvent } from "./AppEvent";

export interface AppEventListener {

  appEventHandler(event: AppEvent): void;
}
