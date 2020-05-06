import { TestBed } from '@angular/core/testing';

import { NPmailService } from './npmail.service';

describe('NPmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NPmailService = TestBed.get(NPmailService);
    expect(service).toBeTruthy();
  });
});
