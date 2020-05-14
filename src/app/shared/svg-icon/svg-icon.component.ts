import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dso-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() icon: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
