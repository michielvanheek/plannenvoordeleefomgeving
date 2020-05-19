import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentViewerComponent} from "./document-viewer/document-viewer.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'view/%2Fakn%2Fnl%2Fact%2Fmn002%2F2019%2Freg0001'
  },
  {
    path: 'view/:path',
    component: DocumentViewerComponent
  },
  {
    path: 'view/:path/local',
    component: DocumentViewerComponent,
    data: {
      local: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
