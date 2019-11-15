import { TestBed } from '@angular/core/testing';

import { DecryptserviceService } from './decryptservice.service';

describe('DecryptserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecryptserviceService = TestBed.get(DecryptserviceService);
    expect(service).toBeTruthy();
  });
});
