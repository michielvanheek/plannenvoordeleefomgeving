import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dso-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  plan;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://demo.milav.eu/api.php/presenteren/v4/documenten/_akn_nl_act_mnre1034_2018_amvb00002/structuur')
      .subscribe(response => {
        this.plan = response;
      });
  }

}
