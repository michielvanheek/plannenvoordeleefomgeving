import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopPlanViewerComponent } from './stop-plan-viewer.component';

describe('StopPlanViewerComponent', () => {
  let component: StopPlanViewerComponent;
  let fixture: ComponentFixture<StopPlanViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopPlanViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopPlanViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
