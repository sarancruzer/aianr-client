import { environment } from './../../environments/environment';
import { map } from 'rxjs/operator/map';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class RequestService {

  private apiUrl = environment.apiUrl;

  list: any;
  headers:  any;

  constructor(private _http: Http) {

    this.headers = new Headers();
    this.headers.append('Content-Type',  'application/json');
   }

get(params: any) {
  this.list = {'requestFlag': params, 'sessions': localStorage.getItem('sessions')};
  return this._http.post(this.apiUrl + 'getRequestTask',  this.list, this.headers)
  .map(res => res.json())
  .do((data) => {console.log(JSON.stringify(data)); });
}

update(params: any, id: any)  {
  this.list =  {'info': params, 'sessions': localStorage.getItem('sessions')};
  return this._http.post(this.apiUrl + 'updateRequestTask/' + id, this.list, this.headers)
  .map(res  =>  res.json())
  .do(data  =>  console.log(JSON.stringify(data)));
}



}
