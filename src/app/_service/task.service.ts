import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Http, RequestOptions, Response ,Headers} from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class TaskService {

      

  private apiUrl = environment.apiUrl; 
  
  list:any;
  headers : any;
  constructor(private _http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
  }

  get(){
      this.list ={"sessions":localStorage.getItem("sessions")}
      return this._http.post(this.apiUrl+'getAllTasks',this.list,this.headers)
      .map(res =>res.json())
      .do(data => console.log(JSON.stringify(data)));  
  }

  add(params:any){
        this.list ={"info":params,"sessions":localStorage.getItem("sessions")}
        return this._http.post(this.apiUrl+'createTask',this.list,this.headers)
        .map(res =>res.json())
        .do(data => console.log(JSON.stringify(data)));  
    }
   
    update(params:any,id:any) {
      this.list ={"info":params,"sessions":localStorage.getItem("sessions")}
      return this._http.post(this.apiUrl+'updateTask/'+id,this.list,this.headers)
      .map(res => res.json())
      .do(data => console.log(JSON.stringify(data)));        
    }
  
    delete(id:any) {
      return this._http.post(this.apiUrl+'deleteTask/'+id,'',this.headers)
      .map((res:Response) => res.json())
      .do(data => console.log(JSON.stringify(data)));        
    }
    
        
  
}
