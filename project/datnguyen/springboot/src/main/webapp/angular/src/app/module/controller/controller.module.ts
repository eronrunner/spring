import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagementGetControllerService } from '../../controller/account-management-get-controller.service';
import { AccountManagementCrubControllerService } from '../../controller/account-management-crub-controller.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AccountManagementGetControllerService , AccountManagementCrubControllerService]
})
export class ControllerModule { }
