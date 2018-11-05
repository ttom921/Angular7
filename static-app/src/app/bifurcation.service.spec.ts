import { TestBed } from '@angular/core/testing';

import { BifurcationService } from './bifurcation.service';

describe('BifurcationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BifurcationService = TestBed.get(BifurcationService);
    expect(service).toBeTruthy();
  });
});
