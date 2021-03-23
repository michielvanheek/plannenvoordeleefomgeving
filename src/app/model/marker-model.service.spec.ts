import { TestBed } from '@angular/core/testing';

import { MarkerModelService } from './marker-model.service';

describe('MarkerModelService', () => {
  let service: MarkerModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
