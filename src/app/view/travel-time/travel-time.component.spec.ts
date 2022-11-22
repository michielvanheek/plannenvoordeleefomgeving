import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTimeComponent } from './travel-time.component';

describe('TravelTimeComponent', () => {
  let component: TravelTimeComponent;
  let fixture: ComponentFixture<TravelTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
