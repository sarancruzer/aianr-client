import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response ,Headers} from '@angular/http';
import { Observable } from 'rxjs';
 

@Injectable()
export class LoginService {

    
private apiUrl = environment.apiUrl; 

list:any;
headers : any;
constructor(private _http: Http){
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
}

// getsearchResponse(value): Observable<ISearch[]> {
//       return this._http.get(this.apiUrl+value)
//       .map((response: Response) => <ISearch[]> response.json())
//       .do(data => console.log(JSON.stringify(data)));
//    }

   getAuthenticate(email:string,password:string){
        this.list ={"email":email,"password":password}
        console.log(this.list);
        return this._http.post(this.apiUrl+'authenticate',this.list,this.headers)
        .map(res =>res.json())
        .do(data => console.log(JSON.stringify(data)));
    }
 
    private extractData(res: Response) {
	      let body = res.json();
        return body.data || {};
    }
    private handleErrorObservable (error: Response | any) {
	      console.error(error.message || error);
	      return Observable.throw(error.message || error);
    }
   


}
