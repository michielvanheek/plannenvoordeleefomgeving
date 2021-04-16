import { TestBed } from '@angular/core/testing';

import { HighlightModelService } from './highlight-model.service';

describe('HighlightModelService', () => {
  let service: HighlightModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
