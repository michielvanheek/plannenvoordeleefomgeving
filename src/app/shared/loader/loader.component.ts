import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dso-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
