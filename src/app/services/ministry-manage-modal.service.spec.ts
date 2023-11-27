import { TestBed } from '@angular/core/testing';

import { MinistryManageModalService } from './ministry-manage-modal.service';

describe('MinistryManageModalService', () => {
  let service: MinistryManageModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinistryManageModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
