import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RoutingComponent } from "./view/routing/routing.component";

const routes: Routes = [{
  path: "viewer/:pt/:centerX/:centerY/:scale/:marker/:time/:tab/:plan/:component/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "viewer/:pt/:centerX/:centerY/:scale/:marker/:time/:tab/:plan/local",
  component: RoutingComponent,
  data: {
    local: true
  }
}, {
  path: "viewer/:pt/:centerX/:centerY/:scale/:marker/:time/:tab/:plan/:component",
  component: RoutingComponent
}, {
  path: "viewer/:pt/:centerX/:centerY/:scale/:marker/:time/:tab/:plan",
  component: RoutingComponent
}, {
  path: "viewer/:pt/:centerX/:centerY/:scale/:marker/:time",
  component: RoutingComponent
}, {
  path: "viewer",
  redirectTo: "viewer/p/148000/465000/1219123.641496919/NL/" + (new Date()).toISOString().replace(/^([^T]+)T(\d\d\:\d\d)[^Z]*Z$/, "$1T$2Z")
}, {
  path: "**",
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
