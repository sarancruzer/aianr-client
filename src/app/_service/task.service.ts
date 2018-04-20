import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http,  RequestOptions,  Response , Headers} from '@angular/http';
import { environment } from '../../environments/environment';
import { IEmail, Email } from '../_interface/email.model';
import { map } from 'rxjs/operator/map';


@Injectable()
export class TaskService  {



  private apiUrl = environment.apiUrl;

  list: any;
  headers:  any;
  constructor(private _http:  Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type',  'application/json');
  }

  get() {
      this.list = {'sessions': localStorage.getItem('sessions')};
      return this._http.post(this.apiUrl + 'getAllTasks', this.list, this.headers)
      .map(res  => res.json())
      .do(data  =>  console.log(JSON.stringify(data)));
  }

  add(params: any) {
        this.list = {'info': params, 'sessions': localStorage.getItem('sessions')};
        return this._http.post(this.apiUrl + 'createTask', this.list, this.headers)
        .map(res  => res.json())
        .do(data  =>  console.log(JSON.stringify(data)));
    }

    update(params: any, id: any)  {
      this.list =  {'info': params, 'sessions': localStorage.getItem('sessions')};
      return this._http.post(this.apiUrl + 'updateTask/' + id, this.list, this.headers)
      .map(res  =>  res.json())
      .do(data  =>  console.log(JSON.stringify(data)));
    }

    delete(id: any)  {
      return this._http.post(this.apiUrl + 'deleteTask/' + id, '', this.headers)
      .map((res: Response)  =>  res.json())
      .do(data  =>  console.log(JSON.stringify(data)));
    }

    getAllReports() {
      this.list =  {'sessions': localStorage.getItem('sessions')};
      return this._http.post(this.apiUrl + 'getAllReports', this.list, this.headers)
      .map(res  => res.json())
      .do(data  =>  console.log(JSON.stringify(data)));
  }

  getAllEmailAddress()  {
      this.list =  {'sessions': localStorage.getItem('sessions')};
      return this._http.post(this.apiUrl + 'getAllEmailAddress', this.list, this.headers)
      .map(res  => res.json())
      .do(data  =>  console.log(JSON.stringify(data)));

      // return this.http.get(url)
      // .pipe(map(data => data.json().items.map(item => item.full_name)));


  }



}



