import { TestBed } from '@angular/core/testing';

import { ParapluModelService } from './paraplu-model.service';

describe('ParapluModelService', () => {
  let service: ParapluModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParapluModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
