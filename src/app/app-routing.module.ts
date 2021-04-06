import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutingComponent } from "./view/routing/routing.component";

const routes: Routes = [{
  path: "view/:centerX/:centerY/:scale/:documentId/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "view/:centerX/:centerY/:scale/:documentId",
  component: RoutingComponent
}, {
  path: "view/:centerX/:centerY/:scale/:markerX/:markerY/:documentId/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "view/:centerX/:centerY/:scale/:markerX/:markerY/:documentId",
  component: RoutingComponent
}, {
  path: "view/:centerX/:centerY/:scale/:markerX/:markerY",
  component: RoutingComponent
}, {
  path: "view/:centerX/:centerY/:scale",
  component: RoutingComponent
}, {
  path: "**",
  redirectTo: "view/148000/465000/1219123.641496919"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
