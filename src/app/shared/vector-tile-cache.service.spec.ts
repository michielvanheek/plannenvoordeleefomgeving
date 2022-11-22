import { TestBed } from '@angular/core/testing';

import { VectorTileCacheService } from './vector-tile-cache.service';

describe('VectorTileCacheService', () => {
  let service: VectorTileCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VectorTileCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
