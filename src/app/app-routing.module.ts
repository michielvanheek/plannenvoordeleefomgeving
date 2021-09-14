import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoutingComponent } from "./view/routing/routing.component";

const routes: Routes = [{
  path: "viewer/:centerX/:centerY/:scale/:documentId/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "viewer/:centerX/:centerY/:scale/:documentId",
  component: RoutingComponent
}, {
  path: "viewer/:centerX/:centerY/:scale/:markerX/:markerY/:documentId/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "viewer/:centerX/:centerY/:scale/:markerX/:markerY/:documentId",
  component: RoutingComponent
}, {
  path: "viewer/:centerX/:centerY/:scale/:markerX/:markerY",
  component: RoutingComponent
}, {
  path: "viewer/:centerX/:centerY/:scale",
  component: RoutingComponent
}, {
  path: "viewer",
  redirectTo: "viewer/148000/465000/1219123.641496919"
}, {
  path: "**",
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
