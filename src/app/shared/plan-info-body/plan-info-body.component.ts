import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dso-plan-info-body',
  templateUrl: './plan-info-body.component.html',
  styleUrls: ['./plan-info-body.component.scss']
})
export class PlanInfoBodyComponent implements OnInit {
  @Input() plan;

  constructor() {
  }

  ngOnInit(): void {
  }

}
