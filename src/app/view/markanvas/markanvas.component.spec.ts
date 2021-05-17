import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkanvasComponent } from './markanvas.component';

describe('MarkanvasComponent', () => {
  let component: MarkanvasComponent;
  let fixture: ComponentFixture<MarkanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
