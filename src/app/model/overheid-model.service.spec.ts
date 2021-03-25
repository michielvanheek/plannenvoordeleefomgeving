import { TestBed } from '@angular/core/testing';

import { OverheidModelService } from './overheid-model.service';

describe('OverheidModelService', () => {
  let service: OverheidModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverheidModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
