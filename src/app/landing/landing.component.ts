import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http ,Response} from '@angular/http';
import { LandingService } from "../_service/landing.service";

import { GlobalSettings } from "../_class/global-settings";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
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
       //this.searchreq = "who is leave on today";
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
      this.userImg = this._globalSettings.username.charAt(0)
      this.machineImg = "M";
      this.userName = this._globalSettings.username;
     
    }




   searchBot(){
             this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});
      this._landingService.getsearchResponse(this.searchreq).subscribe(response => {
            let res = response.result;
            this.chatLists.push({'machine':true,"value":res.data,"created_at":Date.now()});
            console.log("-------------------------------");
            console.log(this.chatLists);
            localStorage.setItem("chats",JSON.stringify(this.chatLists));
   },
 err =>{
  console.log("error msg");
  //this.donationlistprovider.showErrorToast(err);
})
}



}
