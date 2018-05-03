import { Location } from '@angular/common';
import { TaskLogsService } from './../_service/task-logs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-logs',
  templateUrl: './task-logs.component.html',
  styleUrls: ['./task-logs.component.css'],
  providers: [TaskLogsService]
})
export class TaskLogsComponent implements OnInit {

  items: any = [];

  p = 1;
  collection: any[];

  constructor(private _service: TaskLogsService, private _location: Location) { }

  ngOnInit() {

    this.init();


  }

  init() {
    this._service.get().subscribe(response => {
      const res = response.result;
      if (res.statusCode === 200) {
        this.items = res.info.hits.hits;
        this.collection = this.items;
      }
      if (res.statusCode === 204) {
        console.log(res.successText);
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

goBackCall() {
  this._location.back();
}


}
