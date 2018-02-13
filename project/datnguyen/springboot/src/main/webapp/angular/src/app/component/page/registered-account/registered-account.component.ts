import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../domain-model/account-management';
import { AccountManagementCrubControllerService } from '../../../controller/account-management-crub-controller.service';

@Component({
  selector: 'app-registered-account',
  templateUrl: './registered-account.component.html',
  styleUrls: ['./registered-account.component.css']
})
export class RegisteredAccountComponent implements OnInit {

  constructor(private accountCrub: AccountManagementCrubControllerService) { }

  ngOnInit() {
  }

  register(account){
    let accountModel = new AccountModel();
    accountModel.accountId = account.username;
    accountModel.registeredEmail = account.email;
    accountModel.password = account.password;
    this.accountCrub.registerAccount(accountModel).subscribe(
      val =>{
        console.log(val);
      },
      err => {
        console.log(err);
      }
    );
  }
}
