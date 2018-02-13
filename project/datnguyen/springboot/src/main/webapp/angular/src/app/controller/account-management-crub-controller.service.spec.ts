import { TestBed, inject } from '@angular/core/testing';

import { AccountManagementCrubControllerService } from './account-management-crub-controller.service';

describe('AccountManagementCrubControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountManagementCrubControllerService]
    });
  });

  it('should be created', inject([AccountManagementCrubControllerService], (service: AccountManagementCrubControllerService) => {
    expect(service).toBeTruthy();
  }));
});
