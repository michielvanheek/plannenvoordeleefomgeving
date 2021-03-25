import { TestBed } from '@angular/core/testing';

import { PlanLevelModelService } from './plan-level-model.service';

describe('PlanLevelModelService', () => {
  let service: PlanLevelModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanLevelModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
