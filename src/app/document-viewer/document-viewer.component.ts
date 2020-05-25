import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    const query = this.activatedRoute.snapshot.params.path;
    const structurePath = query.replace(/\//g, '_');
    const local = this.activatedRoute.snapshot.data.local;
    const structureApiPath = local
      ? `/assets/${structurePath}.json`
      : `https://demo.milav.eu/api.php/presenteren/v4/documenten/${structurePath}/structuur`;

    this.http.get('https://demo.milav.eu/api.php/presenteren/v4/documenten/findById?identificatie=' + query)
      .subscribe(response => {
        this.planInfo = response;
      });

    this.http.get(structureApiPath)
      .subscribe(response => {
        this.plan = response;
      });
  }

  onElementScroll(event) {
    this.scrolledTop = event.target.scrollTop;
  }
}
