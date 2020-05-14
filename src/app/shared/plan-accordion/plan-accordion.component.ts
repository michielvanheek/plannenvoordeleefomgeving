import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dso-plan-accordion',
  templateUrl: './plan-accordion.component.html',
  styleUrls: ['./plan-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlanAccordionComponent implements OnInit {
  @Input() item;
  @Input() state;

  constructor() {
  }

  ngOnInit(): void {
  }

  openElement(element) {
    element.isOpen = !element.isOpen;
  }
}
