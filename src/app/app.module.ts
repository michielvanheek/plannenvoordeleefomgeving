import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {TippyModule} from 'ng-tippy';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DocumentViewerComponent} from './document-viewer/document-viewer.component';
import {PlanInfoComponent} from './shared/plan-info/plan-info.component';
import {SvgIconComponent} from './shared/svg-icon/svg-icon.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {PlanInfoBodyComponent} from './shared/plan-info-body/plan-info-body.component';
import {LoaderComponent} from './shared/loader/loader.component';
import {PlanAccordionComponent} from './shared/plan-accordion/plan-accordion.component';
import {AngularSplitModule} from "angular-split";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DocumentViewerComponent,
    PlanInfoComponent,
    SvgIconComponent,
    PlanInfoBodyComponent,
    LoaderComponent,
    PlanAccordionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AngularSplitModule.forRoot(),
    TippyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
