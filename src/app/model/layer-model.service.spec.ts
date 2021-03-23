import { TestBed } from '@angular/core/testing';

import { LayerModelService } from './layer-model.service';

describe('LayerModelService', () => {
  let service: LayerModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayerModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
