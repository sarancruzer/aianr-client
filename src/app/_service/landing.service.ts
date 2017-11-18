import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response ,Headers} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class LandingService {

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
  
     getsearchResponse(searchText){
          this.list ={"sentences":searchText,"sessions":localStorage.getItem("sessions")}
          return this._http.post(this.apiUrl+'searchBotsNew',this.list,this.headers)
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
