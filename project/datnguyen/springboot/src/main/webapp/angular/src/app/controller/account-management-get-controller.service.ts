import { Injectable } from '@angular/core';
import { RequestDataService } from '../service/request-data.service';
import {HttpModule, Http, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountManagementGetControllerService {
  private environment = environment;
  constructor(private client: RequestDataService, private http: Http){
  }

  public findAccount(){
      let request = new RequestOptions();
      let url = "";
      return this.client.doGet(url, request);
  }

  public findAllAccounts() : Observable<any> {
    let url = "http://localhost:4200/account/account-management/all-accounts";
    let request = new RequestOptions();
    return this.client.doGet(url, request).map(
      val => {
        return val.json();
      },
      err => {
        console.log(err);
        //chuyen den handler
      }
    );
  }
}
