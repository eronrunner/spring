import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountManagementGetControllerService } from '../../../controller/account-management-get-controller.service';
import { Http } from '@angular/http/src/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean;
  isSuccess: boolean;
  accounts = [{userName: 'nphatdat', password: '12345678'}];
  error: String = 'Error';
  success: String = 'Success';
  user: any;

  constructor(private router: Router, 
    public accountGet: AccountManagementGetControllerService,
    public get : Http
  ) { 
  }

  ngOnInit() {
   this.isSuccess = true;
  }

  login(user){
    this.user = user;
    for(let acc of this.accounts){
      if(acc.userName == user.userName && acc.password == user.password) {
        this.isLogin = true;
        break;
      }else {
        console.log(this.isLogin);
      }
    }
    if(this.isLogin){
      // this.router.navigate(['home']);
      this.isLogin = false;
    }else {
      this.isSuccess = false;
    }
  }
  get(){
    
  }
}
