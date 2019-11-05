import { TestBed } from '@angular/core/testing';

import { ApiMedicService } from './api-medic.service';

describe('ApiMedicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMedicService = TestBed.get(ApiMedicService);
    expect(service).toBeTruthy();
  });
});
