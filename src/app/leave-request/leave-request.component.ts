import { LeaveRequest } from './../_model/leave-request';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { RequestService } from '../_service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
  providers: [RequestService]
})
export class LeaveRequestComponent implements OnInit {

  @ViewChild('createModal') public createModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  @ViewChild('viewModal') public viewModal: ModalDirective;


  items: any = [];
  p = 1;
  model: LeaveRequest[];
  id: any;
  requestFlag = 'receive';

  constructor(private _service: RequestService, private _router: Router) {

   }

  ngOnInit() {
    this.init(this.requestFlag);

    if (typeof this.model === 'undefined') {
      this.model = [];
    }
    console.log(this.model);
    console.log(this.model.length);

  }


  init(requestFlag) {

      this._service.get(requestFlag).subscribe(response => {
        const res = response.result;

        if (res.statusCode === 200) {
          this.items = res.info.hits.hits;
        }
        if (res.statusCode === 204) {
          console.log(res.successText);
          this.items = [];
        }
    },
  err => {
      console.log('error msg');
      // this.donationlistprovider.showErrorToast(err);
  });
  }

  pageChanged($event) {

    console.log($event);
    this.p = $event;
  }



  createModalFunc(form) {
    form.resetForm();
    this.createModal.show();
   }

    edit(data, id) {
      this.editModal.show();
      console.log(data);
      console.log(this.model);
      this.model = Object.assign({}, data);
      this.id = id;
      console.log(this.model);
    }

    update(form, requestFlag) {
      console.log(this.id);
      this.requestFlag = requestFlag;

      if (form.valid) {
      this._service.update(this.model, this.id).subscribe(
        (res) => {
             const response = res['result']['info']['msg'];
             this.init(this.requestFlag);
             this.editModal.hide();
        },
      (err) => {
          console.log('err msg');

      });
    }
    }

    view(item) {
      console.log(item);
      this.viewModal.show();
      this.model = Object.assign({}, item);

    }

}
