import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Request } from '@angular/http/src/static_request';
import {Observable} from 'rxjs';
@Injectable()
export class RequestDataService {

  constructor(protected http: Http) {
  }
  
  doGet(url: string, request: RequestOptions): Observable<Response>{
    return this.http.get(url, request).map(
      res => {
        console.log(res);
        return res;
      },
      err => {
        console.log(err);
        //chuyen huong den handler
      }
    );
  }

  doPost(url: string, request: RequestOptions){
    return this.http.post(url, request).map(
      res => {
        console.log(res);
        return res;
      },
      err => {
        console.log(err);
        //chuyen huong den handler
      }
    );
  }

  doPut(url: string, request: RequestOptions) {
    return this.http.put(url, request).map(
      res => {
        console.log(res);
        return res;
      },
      err => {
        console.log(err);
        //chuyen huong den handler
      }
    );
  }

  doDelete(url: string, request: RequestOptions) {
    return this.http.delete(url, request).map(
      res => {
        console.log(res);
        return res;
      },
      err => {
        console.log(err);
        //chuyen huong den handler
      }
    );
  }
}
