import { Component, OnInit, Input, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { LandingService } from '../_service/landing.service';

import { GlobalSettings } from '../_class/global-settings';
import { FavouriteService } from '../_service/favourite.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonService } from '../_service/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.scss'],
  providers: [LandingService, FavouriteService]
})
export class LandingComponent implements OnInit {
  @ViewChild('scrollMe') private myscoll: ElementRef;

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

  message: string; // = 'hello ANGULAR23';
  random: number;

  currentItem: any;

  constructor(
    private _router: Router,
    private _http: Http,
    private _service: LandingService,
    private _globalSettings: GlobalSettings,
    private _favouriteService: FavouriteService,
    private el: ElementRef,
    private renderer: Renderer
  ) {
    // this.chatLists.push(JSON.parse(localStorage.getItem('chats')));
    const chts = JSON.parse(localStorage.getItem('chats'));
    console.log(chts);
    if (chts === null) {
      this.chatLists.push({
        machine: true,
        value: 'Hi ' + localStorage.getItem('employeeName') + ' I can help you with HR related queries.',
        created_at: Date.now()
      });
    } else {
      this.chatLists = chts;
    }
    localStorage.setItem('chats', JSON.stringify(this.chatLists));

    // this.getReactions();
  }

  ngOnInit() {
    this.getFavourites();
    this._globalSettings.username = localStorage.getItem('employeeName');
    this.chatLists = JSON.parse(localStorage.getItem('chats'));
    this.userImg = 'U';
    this.machineImg = 'M';

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

  getRandomNumber() {
    return Math.floor(Math.random() * (999999 - 100000)) + 100000;
  }

  searchBot() {
    if (this.searchreq.trim() != null) {

      const i =  this.chatLists.findIndex(x => x.value === this.searchreq);

      this.chatLists.push({user: true, value: this.searchreq, created_at: Date.now(), favourite: false});




      this._service.getsearchResponse(this.searchreq).subscribe(
        response => {
          const res = response.result.data;
          const session = response.result.data.session;

          this.chatLists.push({machine: true, value: res.response, created_at: Date.now(), question: this.searchreq, reaction: '', rand_number: this.getRandomNumber() });
          this.searchreq = '';
          console.log('-------------------------------');
          console.log(session);
          console.log(response);
          localStorage.setItem('chats', JSON.stringify(this.chatLists));
          localStorage.setItem('sessions', JSON.stringify(session));

          localStorage.setItem('conversation_id', res.conversation_id);
          localStorage.setItem('conversation_status', res.conversation_status);

          localStorage.setItem('qa_flag', res.qa_flag);
          localStorage.setItem('qa_nerformat', res.qa_nerformat);
          localStorage.setItem('qa_id', res.qa_id);
          localStorage.setItem('ask_list', res.ask_list);
          this.scrollToBottom();

          this.updateFavouritesByChats(this.searchreq, i);



        },
        err => {
          console.log('error msg');
          // this.donationlistprovider.showErrorToast(err);
        }
      );
    } else {
      // this.chatLists.push({'user':true,'value':this.searchreq,'created_at':Date.now()});
      this.chatLists.push({machine: true, value: 'Please enter your question', created_at: Date.now() });
      localStorage.setItem('chats', JSON.stringify(this.chatLists));
    }
  }

  favtoAsk(question) {
    this.searchreq = question;
    this.searchBot();
    this.showDialog = false;
  }

  reaction(flag, data) {
    const oldItem = this.chatLists.find(x => x.rand_number === data.rand_number);
    const index = this.chatLists.indexOf(oldItem);
    oldItem.reaction = flag;
    this.chatLists[index] = oldItem;

    console.log('this.reactionLists');
    console.log(data);
    console.log(this.chatLists);
    localStorage.setItem('chats', JSON.stringify(this.chatLists));
    console.log(data.question);
    this._service.sendReactions(flag, data.question).subscribe(
      response => {
        const res = response.result.data;
        console.log('currentUser');
      },
      err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  updateFavourites(question, index) {
    console.log(index);
    console.log(question);

    console.log(this.chatLists[index].favourite);

    let flag;

    if (this.chatLists[index].favourite === true) {
      flag = false;
      this.chatLists.forEach( element => {
        if (element.value.toLowerCase() === question.toLowerCase()) {
           console.log('COND TRUE');
            element.favourite = false;
        }
      });

      this.favouriteLists.forEach( (item, ind) => {
        console.log(item);
        if (item.question.toLowerCase() === question.toLowerCase()) {
            console.log('FAV TRUE');
            this.favouriteLists.splice(ind, 1);
        }
      });
    }else if (this.chatLists[index].favourite === false) {
      flag = true;
      this.chatLists.forEach( element => {
        if (element.value.toLowerCase() === question.toLowerCase()) {
          console.log('COND FALSE');
            element.favourite = true;
        }
      });
      this.favouriteLists.forEach( (item, ind) => {
        console.log(item);
        if (item.question.toLowerCase() === question.toLowerCase()) {
            console.log('FAV TRUE');
            this.favouriteLists.splice(ind, 1);
        }
      });
      console.log(this.favouriteLists);
      this.favouriteLists.push({ question: question });
    }

    console.log(this.chatLists);
    console.log('FAV LISTS');
    console.log(this.favouriteLists);

    localStorage.setItem('favourites', JSON.stringify(this.favouriteLists));

    this._favouriteService.updateFavourites(question, flag).subscribe(
      response => {
        const res = response.result.data;
      },
      err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  updateFavouritesByChats(question, i) {

    console.log('chat index ' + i);

    if (i > -1) {
      if (this.chatLists[i].favourite === true) {
        this.chatLists.forEach( element => {
          if (element.value.toLowerCase() === question.toLowerCase()) {
             console.log('FAV COND TRUE');
              element.favourite = true;
          }
        });
      }
    }
  }

  getFavourites() {
    this._favouriteService.getFavourites().subscribe(
      response => {
        const res = response.result;
        const fav = res.data.info;
        if (res.statusCode === 200) {
          fav.forEach(element => {
            this.favouriteLists.push({'question': element.question});
          });
          // this.favouriteLists = res.data.info;
          localStorage.setItem('favourites', JSON.stringify(this.favouriteLists));
        }

        if (res.statusCode === 204) {
          this.favouriteLists = [];
          localStorage.setItem('favourites', JSON.stringify(res));
        }

        console.log('currentUser');
      },
      err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
      }
    );
  }

  getReactions() {
    this._favouriteService.getReactions().subscribe(
      response => {
        const res = response.result.data.info;
        this.reactionLists = res;
        localStorage.setItem('reactions', JSON.stringify(res));
      },
      err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
      }
    );
  }
}
