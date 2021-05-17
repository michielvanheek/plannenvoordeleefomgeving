import { TestBed } from '@angular/core/testing';

import { ImowModelService } from './imow-model.service';

describe('ImowModelService', () => {
  let service: ImowModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImowModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
