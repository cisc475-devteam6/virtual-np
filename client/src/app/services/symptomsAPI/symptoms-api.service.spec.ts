import { TestBed } from '@angular/core/testing';

import { SymptomsAPIService } from './symptoms-api.service';

describe('SymptomsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SymptomsAPIService = TestBed.get(SymptomsAPIService);
    expect(service).toBeTruthy();
  });
});
