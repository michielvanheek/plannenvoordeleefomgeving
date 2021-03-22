import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentViewerComponent} from "./document-viewer/document-viewer.component";

const routes: Routes = [{
  path: 'view/:documentId/local',
  component: DocumentViewerComponent,
  data: {
    local: true
  }
}, {
  path: 'view/:documentId',
  component: DocumentViewerComponent
}, {
  path: '**',
  redirectTo: 'view/%2Fakn%2Fnl%2Fact%2Fmnre1034%2F2019%2Freg0001/local'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
