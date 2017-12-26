import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http ,Response} from '@angular/http';
import { LandingService } from "../_service/landing.service";

import { GlobalSettings } from "../_class/global-settings";
import { FavouriteService } from '../_service/favourite.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.scss'],
  providers:[LandingService,FavouriteService]
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
    private _service: LandingService,
    private _globalSettings: GlobalSettings,
    private _favouriteService:FavouriteService
      
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
      this.getFavourites();
      this._globalSettings.username = localStorage.getItem("employeeName");            
      this.chatLists = JSON.parse(localStorage.getItem("chats"));
      this.userImg = "U"
      this.machineImg = "M"; 
     
    }

 
   searchBot(){

    if(this.searchreq != null){
             this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});              
      this._service.getsearchResponse(this.searchreq).subscribe(response => {
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
     this._service.sendReactions(flag,question).subscribe(response => {
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
    this._favouriteService.addFavourites(question).subscribe(response => {
      let res = response.result.data;
      console.log("currentUser");
      },
    err =>{
    console.log("error msg");
    //this.donationlistprovider.showErrorToast(err);
    })
   }

   getFavourites(){
    this._favouriteService.getFavourites().subscribe(response => {
      let res = response.result.data.info;
      this.favouriteLists = res;
      localStorage.setItem("favourites",JSON.stringify(res));
      
      console.log("currentUser");
      },
    err =>{
    console.log("error msg");
    //this.donationlistprovider.showErrorToast(err);
    })
   }






}
