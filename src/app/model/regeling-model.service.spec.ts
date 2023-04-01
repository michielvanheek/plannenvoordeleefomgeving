import { TestBed } from '@angular/core/testing';

import { RegelingModelService } from './regeling-model.service';

describe('RegelingModelService', () => {
  let service: RegelingModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegelingModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
