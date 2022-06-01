import { TestBed } from '@angular/core/testing';

import { DiffBuilderService } from './diff-builder.service';

describe('DiffBuilderService', () => {
  let service: DiffBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiffBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
