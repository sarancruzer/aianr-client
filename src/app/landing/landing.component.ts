import { Component, OnInit, Input, ElementRef, Renderer,ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import { LandingService } from "../_service/landing.service";

import { GlobalSettings } from "../_class/global-settings";
import { FavouriteService } from "../_service/favourite.service";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonService } from "../_service/common.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.scss"],
  providers: [LandingService, FavouriteService]
})
export class LandingComponent implements OnInit {
  @ViewChild("scrollMe") private myscoll: ElementRef;

  searchreq: string;
  searchResponse: any;

  tokens: any;
  private chatLists = [];
  userImg: string;
  machineImg: string;
  userName: string;
  showDialog = false;

  private favouriteLists = [];
  private reactionLists = [];

  message: string; //= "hello ANGULAR23";

  constructor(
    private _router: Router,
    private _http: Http,
    private _service: LandingService,
    private _globalSettings: GlobalSettings,
    private _favouriteService: FavouriteService,
    private el: ElementRef,
    private renderer: Renderer
  ) {
    //this.chatLists.push(JSON.parse(localStorage.getItem("chats")));
    let chts = JSON.parse(localStorage.getItem("chats"));
    console.log(chts);
    if (chts === null) {
      this.chatLists.push({
        machine: true,
        value: "Hi! "+ localStorage.getItem("employeeName") +" I can help you with AIANR related queries.",
        created_at: Date.now()
      });
    } else {
      this.chatLists = chts;
    }
    localStorage.setItem("chats", JSON.stringify(this.chatLists));

    //this.getReactions();
  }

  ngOnInit() {
    this.getFavourites();
    this._globalSettings.username = localStorage.getItem("employeeName");
    this.chatLists = JSON.parse(localStorage.getItem("chats"));
    this.userImg = "U";
    this.machineImg = "M";

    this.getReactions();
  }
  scrollToBottom(): void {
    this.myscoll.nativeElement.scrollTop = this.myscoll.nativeElement.scrollHeight;
  }
  receivedMessage($event) {
    console.log($event);
    this.searchreq = $event;
    // this.searchBot();
  }

  searchBot() {
    if (this.searchreq != null) {
      this.chatLists.push({
        user: true,
        value: this.searchreq,
        created_at: Date.now(),
        favourite: false
      });
      this._service.getsearchResponse(this.searchreq).subscribe(
        response => {
          let res = response.result.data;
          let session = response.result.data.session;

          this.chatLists.push({
            machine: true,
            value: res.response,
            created_at: Date.now(),
            question: this.searchreq,
            reaction: ""
          });
          this.searchreq = "";
          console.log("-------------------------------");
          console.log(session);
          console.log(response);
          localStorage.setItem("chats", JSON.stringify(this.chatLists));
          localStorage.setItem("sessions", JSON.stringify(session));

          localStorage.setItem("conversation_id", res.conversation_id);
          localStorage.setItem("conversation_status", res.conversation_status);

          localStorage.setItem("qa_flag", res.qa_flag);
          localStorage.setItem("qa_nerformat", res.qa_nerformat);
          localStorage.setItem("qa_id", res.qa_id);
          this.scrollToBottom();
        },
        err => {
          console.log("error msg");
          //this.donationlistprovider.showErrorToast(err);
        }
      );
    } else {
      //this.chatLists.push({'user':true,"value":this.searchreq,"created_at":Date.now()});
      this.chatLists.push({
        machine: true,
        value: "Please enter your question",
        created_at: Date.now()
      });
      localStorage.setItem("chats", JSON.stringify(this.chatLists));
    }
  }

  favtoAsk(question) {
    this.searchreq = question;
    this.searchBot();
    this.showDialog = false;
  }

  reaction(flag, question) {
    let oldItem = this.chatLists.find(x => x.question == question);
    let index = this.chatLists.indexOf(oldItem);
    oldItem.reaction = flag;
    this.chatLists[index] = oldItem;

    console.log("this.reactionLists");
    console.log(question);
    console.log(this.chatLists);
    localStorage.setItem("chats", JSON.stringify(this.chatLists));

    this._service.sendReactions(flag, question).subscribe(
      response => {
        let res = response.result.data;
        console.log("currentUser");
      },
      err => {
        console.log("error msg");
        //this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  updateFavourites(question) {
    console.log(question);
    let updateItem = this.chatLists.find(x => x.value == question);
    console.log("updatedItem");
    console.log(updateItem);
    console.log(updateItem.favourite);

    let flag;

    if (updateItem.favourite == true) {
      console.log("POP OPERATION");
      updateItem.favourite = false;
      flag = false;
      let index = this.favouriteLists.indexOf(question);
      this.favouriteLists.splice(index, 1);
    } else if (updateItem.favourite == false) {
      console.log("PUSH OPERATION");
      updateItem.favourite = true;
      flag = true;
      this.favouriteLists.push({ question: question });
    }
    localStorage.setItem("favourites", JSON.stringify(this.favouriteLists));
    let newItem = updateItem;
    this.updateFavItem(updateItem, newItem);

    this._favouriteService.updateFavourites(question, flag).subscribe(
      response => {
        let res = response.result.data;
      },
      err => {
        console.log("error msg");
        //this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  //  addFavourites(question){
  //   console.log(question);
  //   this.favouriteLists.push({'question':question});
  //   localStorage.setItem("favourites",JSON.stringify(this.favouriteLists));
  //  }

  updateFavItem(updateItem, newItem) {
    let index = this.chatLists.indexOf(updateItem);
    this.chatLists[index] = newItem;

    console.log("this.chatLists");
    console.log(this.chatLists);
    localStorage.setItem("chats", JSON.stringify(this.chatLists));
  }

  getFavourites() {
    this._favouriteService.getFavourites().subscribe(
      response => {
        let res = response.result.data.info;
        this.favouriteLists = res;
        localStorage.setItem("favourites", JSON.stringify(res));

        console.log("currentUser");
      },
      err => {
        console.log("error msg");
        //this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  getReactions() {
    this._favouriteService.getReactions().subscribe(
      response => {
        let res = response.result.data.info;
        this.reactionLists = res;
        localStorage.setItem("reactions", JSON.stringify(res));
      },
      err => {
        console.log("error msg");
        //this.donationlistprovider.showErrorToast(err);
      }
    );
  }
}
