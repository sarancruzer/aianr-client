import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response ,Headers} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class FavouriteService {

  private apiUrl = environment.apiUrl; 
  
  list:any;
  headers : any;
  constructor(private _http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }
  
  
     getFavourites(){
          this.list ={"sessions":localStorage.getItem("sessions")}
          return this._http.post(this.apiUrl+'getFavourites',this.list,this.headers)
          .map(res =>res.json())
          .do(data => console.log(JSON.stringify(data)));
    
      }

      addFavourites(params:any){
        this.list ={"question":params,"sessions":localStorage.getItem("sessions")}
        return this._http.post(this.apiUrl+'addFavourites',this.list,this.headers)
        .map(res =>res.json())
        .do(data => console.log(JSON.stringify(data)));  
    }

    getReactions(){
      this.list ={"sessions":localStorage.getItem("sessions")}
      return this._http.post(this.apiUrl+'getReactions',this.list,this.headers)
      .map(res =>res.json())
      .do(data => console.log(JSON.stringify(data)));
    }
     
  
}
