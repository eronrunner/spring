import { Injectable } from '@angular/core';
import { RequestDataService } from '../service/request-data.service';
import {HttpModule, Http, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountManagementGetControllerService {
  private environment = environment;
  
  constructor(private client: RequestDataService){
  }

  public findAccount(){
      let request = new RequestOptions();
      let url = "";
      return this.client.doGet(url, request);
  }

  public findAllAccounts(){
    let request = new RequestOptions();
    let url = "http://localhost:4200/account/account-management/all-accounts";
    let results;
    this.client.doGet(url, request)
    .then((res)=>{
      results = res;

    },
      (error) => {
        results = "aaaaaaa";
      }
    );
    return results;
  }
}
