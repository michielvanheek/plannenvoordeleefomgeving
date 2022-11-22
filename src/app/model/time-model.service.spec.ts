import { TestBed } from '@angular/core/testing';

import { TimeModelService } from './time-model.service';

describe('TimeModelService', () => {
  let service: TimeModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
