import { TestBed, inject } from '@angular/core/testing';

import { AccountManagementGetControllerService } from './account-management-get-controller.service';

describe('AccountManagementGetControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountManagementGetControllerService]
    });
  });

  it('should be created', inject([AccountManagementGetControllerService], (service: AccountManagementGetControllerService) => {
    expect(service).toBeTruthy();
  }));
});
