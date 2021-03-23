import { TestBed } from '@angular/core/testing';

import { StateModelService } from './state-model.service';

describe('StateModelService', () => {
  let service: StateModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
