import { TestBed } from '@angular/core/testing';

import { OmgevingsdocumentModelService } from './omgevingsdocument-model.service';

describe('OmgevingsdocumentModelService', () => {
  let service: OmgevingsdocumentModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmgevingsdocumentModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
