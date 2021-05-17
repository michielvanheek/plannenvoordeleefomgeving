import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorTilesLayerComponent } from './vector-tiles-layer.component';

describe('VectorTilesLayerComponent', () => {
  let component: VectorTilesLayerComponent;
  let fixture: ComponentFixture<VectorTilesLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectorTilesLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorTilesLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
