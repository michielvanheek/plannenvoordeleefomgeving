import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerTimeInfoComponent } from './marker-time-info.component';

describe('MarkerTimeInfoComponent', () => {
  let component: MarkerTimeInfoComponent;
  let fixture: ComponentFixture<MarkerTimeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerTimeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerTimeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
