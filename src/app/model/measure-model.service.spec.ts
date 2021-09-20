import { TestBed } from '@angular/core/testing';

import { MeasureModelService } from './measure-model.service';

describe('MeasureModelService', () => {
  let service: MeasureModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasureModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
