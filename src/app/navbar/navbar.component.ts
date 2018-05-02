import { element } from 'protractor';
import { ViewChild } from '@angular/core';
import { TaskService } from './../_service/task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../_service/favourite.service';

import { Task } from './../_model/task';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

import swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [FavouriteService, TaskService]
})
export class NavbarComponent implements OnInit {

  @ViewChild('logoutSwal') private logoutSwal: SwalComponent;

  reactionLists: any = [];
  reportLists: any = [];

  model = new Task();
  report: any;

  constructor(private _router: Router, private _favouriteService: FavouriteService, private _service: TaskService) {
    this.getReactions();

    this.model.report_id = null;
    this.model.report_name = '';
    this.model.email = false;
    this.model.report = false;
    this.model.daily = false;
    this.model.delay = '';
    this.model.monthly = false;
    this.model.days = '';
    this.model.weekly = false;
    this.model.weekdays = '';
    this.model.receipients = '';

    this.reportLists = [
      {'id': 1, 'name': 'reportOne'},
      {'id': 2, 'name': 'reportTwo'},
      {'id': 3, 'name': 'reportThree'},
      {'id': 4, 'name': 'reportFour'},
      {'id': 5, 'name': 'reportFive'},
    ];

    this.model.report_id = '';



  }

  ngOnInit() {


  }

  changeReport(event: Event) {
    const index = event.target['options'].selectedIndex;
    const selectElementText = event.target['options'][index].text;
    console.log(selectElementText);
    this.model.report_name = selectElementText;
  }

  logoutFunc() {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure want to logout!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      buttonsStyling: true,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.logout();
      }
    });

  }

  logout() {
    localStorage.removeItem('employeeName');
    localStorage.removeItem('email');
    localStorage.removeItem('employeeNumber');
    localStorage.removeItem('authentication');
    localStorage.removeItem('sessions');

    this._router.navigate(['/login']);
  }


  // getReactions() {
  //   const reactList = JSON.parse(localStorage.getItem('reactions'));
  //   this.reactionLists = reactList.hits.hits;
  //   console.log('this.reactionLists');
  //   console.log(this.reactionLists);

  //  }

   getReactions() {
    this._favouriteService.getReactions().subscribe(
      response => {
        const res = response.result.info;
        this.reactionLists = res.hits.hits;
        localStorage.setItem('reactions', JSON.stringify(this.reactionLists));
      },
      err => {
        console.log('error msg');
        // this.donationlistprovider.showErrorToast(err);
      }
    );
  }

   counter(i: number) {
    return new Array(i);
  }


  submitTask(form, event: Event) {
    console.log(event);
    console.log(this.model);

    if (form.valid) {
      this._service.add(this.model).subscribe(
        (res) => {
              const response = res['result']['info'];
              console.log(response);
        },
      (err) => {
        console.log(err);
        console.log('error msg' + err);
      });
    }
  }





}
