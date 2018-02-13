import { Injectable } from '@angular/core';
import { RequestDataService } from '../service/request-data.service';
import { AccountModel } from '../domain-model/account-management';
import { RequestOptions } from '@angular/http';
import { CONTENT_TYPE, SPRING_HOST } from './configuration';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

@Injectable()
export class AccountManagementCrubControllerService {

  constructor(private client : RequestDataService) { }

  public registerAccount(account: AccountModel) : Observable<any>{
    let api = "/account/account-management/register-account";
    let request = new RequestOptions();
    let object = JSON.stringify(account);
    let headers = new Headers();
    console.log(object);
    headers.append('Content-Type', CONTENT_TYPE);
    request.headers = headers;
    request.body = object;
    return this.client.doPost(SPRING_HOST + api, request).map(
      val => {
        return val.ok;
      },
      err => {
        return err.status;
      }
    );
  }
}
