import { RequestTask } from './../_model/request-task';

import { RequestService } from './../_service/request.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {

  @ViewChild('createModal') public createModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  @ViewChild('viewModal') public viewModal: ModalDirective;


  items: any = [];
  model: RequestTask[];

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

    update(form) {
      console.log(this.id);

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
