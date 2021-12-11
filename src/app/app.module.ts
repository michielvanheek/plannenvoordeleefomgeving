import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AngularSplitModule } from "angular-split";
import { AngularSvgIconModule } from "angular-svg-icon";
import { TippyModule } from "ng-tippy";
import { NineyModule } from "ng-niney/niney.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanInfoComponent } from "./shared/plan-info/plan-info.component";
import { SvgIconComponent } from "./shared/svg-icon/svg-icon.component";
import { StopPlanViewerComponent } from './view/stop-plan-viewer/stop-plan-viewer.component';
import { LoaderComponent } from "./shared/loader/loader.component";
import { PlanAccordionComponent } from "./shared/plan-accordion/plan-accordion.component";
import { MapPanelComponent } from "./view/map-panel/map-panel.component";
import { SearchPlaceComponent } from "./view/search-place/search-place.component";
import { SelectPlanComponent } from "./view/select-plan/select-plan.component";
import { RoutingComponent } from "./view/routing/routing.component";
import { SearchPlanComponent } from "./view/search-plan/search-plan.component";
import { OmgevingsdocumentModelService } from "./model/omgevingsdocument-model.service";
import { ImroPlanViewerComponent } from "./view/imro-plan-viewer/imro-plan-viewer.component";
import { DocumentElementTitleComponent } from "./shared/document-element-title/document-element-title.component";
import { VectorTilesLayerComponent } from "./shared/vector-tiles-layer/vector-tiles-layer.component";
import { MarkanvasComponent } from "./view/markanvas/markanvas.component";
import { AnnotationsComponent } from './view/annotations/annotations.component';
import { HomeComponent } from './home/home.component';
import { LegendPanelComponent } from './view/legend-panel/legend-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanInfoComponent,
    SvgIconComponent,
    StopPlanViewerComponent,
    LoaderComponent,
    PlanAccordionComponent,
    MapPanelComponent,
    SearchPlaceComponent,
    SelectPlanComponent,
    RoutingComponent,
    SearchPlanComponent,
    ImroPlanViewerComponent,
    DocumentElementTitleComponent,
    VectorTilesLayerComponent,
    MarkanvasComponent,
    AnnotationsComponent,
    HomeComponent,
    LegendPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    AngularSplitModule.forRoot(),
    TippyModule,
    NineyModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: provider => () => provider.getPromise(), deps: [OmgevingsdocumentModelService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
