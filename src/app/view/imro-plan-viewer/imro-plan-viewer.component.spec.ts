import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImroPlanViewerComponent } from './imro-plan-viewer.component';

describe('ImroPlanViewerComponent', () => {
  let component: ImroPlanViewerComponent;
  let fixture: ComponentFixture<ImroPlanViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImroPlanViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImroPlanViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
