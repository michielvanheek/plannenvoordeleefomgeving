import { TestBed } from '@angular/core/testing';

import { DisplayModelService } from './display-model.service';

describe('DisplayModelService', () => {
  let service: DisplayModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
