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
  showDialog = false;

  private favouriteLists = [];

  constructor(
    private _router: Router,
    private _http: Http,
    private _landingService: LandingService,
    private _globalSettings: GlobalSettings
      
   ){
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
      this._globalSettings.username = localStorage.getItem("employeeName");      
      
      this.chatLists = JSON.parse(localStorage.getItem("chats"));
      this.favouriteLists = JSON.parse(localStorage.getItem("favourites"));
      //this.userImg = this._globalSettings.username.charAt(0)
      this.userImg = "U"
      this.machineImg = "M"; 
     
    }

 
   searchBot(){

    if(this.searchreq != null){
             this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});              
      this._landingService.getsearchResponse(this.searchreq).subscribe(response => {
            let res = response.result.data;
            let session = response.result.data.session;

            this.chatLists.push({'machine':true,"value":res.response,"created_at":Date.now()});
            this.searchreq = ""
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
}else{
  //this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});  
  this.chatLists.push({'machine':true,"value":"Please enter your question","created_at":Date.now()});
  localStorage.setItem("chats",JSON.stringify(this.chatLists));

}
}

favtoAsk(question){
  this.searchreq = question;
  this.searchBot();
  this.showDialog = false;

}

   reaction(flag,question){
     this._landingService.sendReactions(flag,question).subscribe(response => {
       let res = response.result.data;
       console.log("currentUser");
       },
     err =>{
     console.log("error msg");
     //this.donationlistprovider.showErrorToast(err);
     })

     
   }


   addFavourites(question){
    console.log(question);    
    this.favouriteLists.push({'question':question});
    localStorage.setItem("favourites",JSON.stringify(this.favouriteLists));
    this._landingService.addFavourites(question).subscribe(response => {
      let res = response.result.data;
      console.log("currentUser");
      },
    err =>{
    console.log("error msg");
    //this.donationlistprovider.showErrorToast(err);
    })
   }


}
