import { TestBed } from '@angular/core/testing';

import { MerchantRegistrationService } from './merchant-registration.service';

describe('MerchantRegistrationService', () => {
  let service: MerchantRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
