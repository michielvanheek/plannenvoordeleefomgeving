import { TestBed } from '@angular/core/testing';

import { PlanDecoratorService } from './plan-decorator.service';

describe('PlanDecoratorService', () => {
  let service: PlanDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
