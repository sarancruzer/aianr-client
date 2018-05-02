import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ReactionService } from './../_service/reaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css'],
  providers: [ ReactionService ]
})
export class ReactionComponent implements OnInit {

  @ViewChild('viewModal') public viewModal: ModalDirective;

  items: any = [];
  id: any;
  selectedRow: Number;
  model: any = [];

  constructor(private _service: ReactionService, private _router: Router, private _location: Location) {

   }

  ngOnInit() {
    this.init();
  }


init() {
      this._service.get().subscribe(response => {
        const res = response.result;

        console.log('res');
        console.log(res);

        if (res.statusCode === 200) {
          this.items = res.info.hits.hits;

        }
        if (res.statusCode === 204) {
          console.log(res.successText);
        }
        console.log(this.items);
    },
  err => {
      console.log('error msg');
      // this.donationlistprovider.showErrorToast(err);
  });
  }

  goBackCall() {
    this._location.back();
  }

  reactionDetail(data, index) {
    console.log('reaction details');

    console.log(data);
    this.selectedRow = index;

    this.viewModal.show();

    this.model = data._source;

  }


}

