import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http ,Response} from '@angular/http';
import { LandingService } from "../_service/landing.service";

import { GlobalSettings } from "../_class/global-settings";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.scss'],
  providers:[LandingService]
})
export class LandingComponent implements OnInit{

  searchreq : string;
  searchResponse: any;
  
  tokens:any;
  private chatLists = [];
  userImg:string;
  machineImg:string;
  userName:string;

  constructor(
    private _router: Router,
    private _http: Http,
    private _landingService: LandingService,
    private _globalSettings: GlobalSettings
      
   ){
       //this.searchreq = "who is leave on today"; - DONE
       //this.searchreq = "today leave list"; - DONE
       //this.searchreq = "How many casual leaves can be taken in a year?";
       //this.searchreq = "How many days do we work in a week";
       //this.searchreq = "What is the work hour timing for our organization";             
       //this.searchreq = "Whom should I contact to inform my leave of absence"; - DONE      
       //this.searchreq = "What is the work hour timing for our organization"; - DONE      
       //this.searchreq = "What is the commencement time of lunch break"; - DONE      
       //this.searchreq = "How many public holidays does the organization provide in a year"; -DONE
       //this.searchreq = "How many permission can be taken in a month"; - DONE
       //this.searchreq = "How many months is considered for maternity leave"; - DONE
       //this.searchreq = "How many leaves do we get in a financial year"; - DONE
       //this.searchreq = "How many leaves are remaining for this financial year"; - DONE
       //this.searchreq = "How many kinds of leave does our organization provide";  - DONE   
       //this.searchreq = "How many hours is the permission considered";   - DONE
         
       
       

       
       
       
       //this.chatLists.push(JSON.parse(localStorage.getItem("chats")));
        let chts = JSON.parse(localStorage.getItem("chats"));
        console.log(chts);
        if(chts === null){
          this.chatLists.push({'machine':true,"value":"Hi! I can help you with AIANR related queries.","created_at":Date.now()});
        }else{
          this.chatLists = chts;
        }
        localStorage.setItem("chats",JSON.stringify(this.chatLists));
    }   

    ngOnInit(){
      
      this.chatLists = JSON.parse(localStorage.getItem("chats"));
      //this.userImg = this._globalSettings.username.charAt(0)
      this.userImg = "U"
      this.machineImg = "M";     
     
    }




   searchBot(){
             this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});
      this._landingService.getsearchResponse(this.searchreq).subscribe(response => {
            let res = response.result.data;
            let session = response.result.data.session;
            this.chatLists.push({'machine':true,"value":res.response,"created_at":Date.now()});
            console.log("-------------------------------");
            console.log(session);
            console.log(response);
            localStorage.setItem("chats",JSON.stringify(this.chatLists));
            localStorage.setItem("sessions",JSON.stringify(session));
            
   },
 err =>{
  console.log("error msg");
  //this.donationlistprovider.showErrorToast(err);
})
}



}
