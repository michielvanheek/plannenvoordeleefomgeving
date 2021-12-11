import { TestBed } from '@angular/core/testing';

import { ImowValueModelService } from './imow-value-model.service';

describe('ImowValueModelService', () => {
  let service: ImowValueModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImowValueModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
