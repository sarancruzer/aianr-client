import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Http, RequestOptions, Response ,Headers} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TaskLogsService {
      

  private apiUrl = environment.apiUrl; 
  
  list:any;
  headers : any;
  constructor(private _http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  get(){
      this.list ={"sessions":localStorage.getItem("sessions")}
      return this._http.post(this.apiUrl+'getAllTaskLogs',this.list,this.headers)
      .map(res =>res.json())
      .do(data => console.log(JSON.stringify(data)));  
  }   
    delete(id:any) {
      return this._http.post(this.apiUrl+'deleteTask/'+id,'',this.headers)
      .map((res:Response) => res.json())
      .do(data => console.log(JSON.stringify(data)));        
    }   
        
  
}