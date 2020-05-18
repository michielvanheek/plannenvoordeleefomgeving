import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'dso-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})
export class DocumentViewerComponent implements OnInit {
  planInfo;
  plan;
  scrolledTop = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://demo.milav.eu/api.php/presenteren/v4/documenten/findById?identificatie=/akn/nl/act/mn002/2019/reg0001')
      .subscribe(response => {
        this.planInfo = response;
      });

    this.http.get('https://demo.milav.eu/api.php/presenteren/v4/documenten/_akn_nl_act_mn002_2019_reg0001/structuur')
      .subscribe(response => {
        this.plan = response;
      });
  }

  onElementScroll(event) {
    this.scrolledTop = event.target.scrollTop;
  }
}
