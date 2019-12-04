import { TestBed } from '@angular/core/testing';

import { NpService } from './np.service';

describe('NpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NpService = TestBed.get(NpService);
    expect(service).toBeTruthy();
  });
});
