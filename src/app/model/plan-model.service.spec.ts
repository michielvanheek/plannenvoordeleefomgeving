import { TestBed } from '@angular/core/testing';

import { PlanModelService } from './plan-model.service';

describe('PlanModelService', () => {
  let service: PlanModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
