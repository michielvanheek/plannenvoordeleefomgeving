import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'dso-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  planInfo;
  plan;
  scrolledTop = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
  }

  ngOnInit(): void {
    const documentId = this.activatedRoute.snapshot.params.documentId;
    const underscoredDocumentId = documentId.replace(/\//g, '_');
    const local = this.activatedRoute.snapshot.data.local;
    const options = {
      headers: new HttpHeaders({
        "Accept" : "application/json, application/hal+json",
        "x-api-key": "f9303b04-8db4-4d34-b2a9-356ba490f977"
      })
    };

    const documentMetaUrl = local? `/assets/${underscoredDocumentId}.meta.json`:
      'https://service.acc.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v5/omgevingsdocumenten/findById?identificatie=' + documentId;
    this.http.get(documentMetaUrl, options).subscribe(response => {
      this.planInfo = response;
    });

    const documentUrl = local? `/assets/${underscoredDocumentId}.json`:
      `https://service.acc.omgevingswet.overheid.nl/publiek/omgevingsdocumenten/api/presenteren/v5/omgevingsdocumenten/${underscoredDocumentId}/documentcomponenten`;
    this.http.get(documentUrl, options).subscribe(response => {
      this.plan = response;
    });
  }

  onElementScroll(event) {
    this.scrolledTop = event.target.scrollTop;
  }
}
