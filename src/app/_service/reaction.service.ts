import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Http, RequestOptions, Response , Headers} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class ReactionService {

  private apiUrl = environment.apiUrl;

  list: any;
  headers: any;
  constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }
    get() {
      this.list = {'sessions': localStorage.getItem('sessions') };
      return this._http.post(this.apiUrl + 'getReactions', this.list, this.headers)
      .map(res => res.json())
      .do(data => console.log(JSON.stringify(data)));
    }


}
