import { TestBed } from '@angular/core/testing';

import { AuthhttpinterceptorService } from './authhttpinterceptor.service';

describe('AuthhttpinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthhttpinterceptorService = TestBed.get(AuthhttpinterceptorService);
    expect(service).toBeTruthy();
  });
});
