import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, ConnectionBackend, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Request } from '@angular/http/src/static_request';

@Injectable()
export class RequestDataService {

  constructor(private http: Http) {
  }
  
  doGet(url: string, request: RequestOptions){
    return new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then(
        res => {
          resolve(res);
        }
      ).catch(
        error => {
          reject(error);
        }
      )
      // return promise;
    });
  }

  doPost(url: string, request: RequestOptions){
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, request).toPromise().then(
        res => {
          resolve(res.json());
        }
      ).catch(
        error => {
          reject(error);
        }
      )
      return promise;
    });
  }

  doPut(url: string, request: RequestOptions) {
    let promise = new Promise((resolve, reject) => {
      this.http.put(url, request).toPromise().then(
        res => {
          resolve(res.json());
        }
      ).catch(
        error => {
          reject(error);
        }
      )
      return promise;
    });
  }

  doDelete(url: string, request: RequestOptions) {
    let promise = new Promise((resolve, reject) => {
      this.http.delete(url, request).toPromise().then(
        res => {
          resolve(res.json());
        }
      ).catch(
        error => {
          reject(error);
        }
      )
      return promise;
    });
  }
}
