import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'dso-plan-info-body',
  templateUrl: './plan-info-body.component.html',
  styleUrls: ['./plan-info-body.component.scss']
})
export class PlanInfoBodyComponent implements OnInit {
  @ViewChild('scrollHeader', {static: true}) scrollHeader: ElementRef;

  @Input() plan;
  @Input() scrolledTop;

  headers = [
    {label: 'Regels', type: 'LICHAAM'},
    {label: 'Toelichting', type: ''},
    {label: 'Bijlagen', type: 'BIJLAGE'}
  ]
  activeHeader;

  tabData;

  public startOffsetOfScrollbar;

  constructor() {
  }

  ngOnInit(): void {
    this.startOffsetOfScrollbar = this.scrollHeader.nativeElement.offsetTop;
    console.log('init', this.plan);
    this.onChangeTab(this.headers[0]);
  }

  onChangeTab(tab) {
    this.activeHeader = tab;
    this.tabData = {
      _embedded: {
        documentstructuurelementen: this.plan._embedded.documentstructuurelementen.filter(d => d.soort === this.activeHeader.type)
      }
    };
    console.log(this.tabData)
  }


}
