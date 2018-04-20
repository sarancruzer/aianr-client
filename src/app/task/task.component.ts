import { Observable } from 'rxjs/Observable';
import { IEmail } from './../_interface/email.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../_service/task.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Task } from '../_model/task';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  @ViewChild('createModal') public createModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;


  items: any = [];
  model = new Task();
  id: any;
  reportLists: any = [];

  dailyFlag: any;
  monthlyFlag: any;
  yearlyFlag: any;



  email: IEmail[];
  email$: Observable<IEmail[]>;

  hobbies: string[];
  hobbies$: Observable<string[]>;

   autocompleteItemsAsObjects = [
    {value: 'Item1', id: 0, extra: 0},
    {value: 'item2', id: 2, extra: 1},
    {value: 'item3', id: 3, extra: 1},
    {value: 'item4', id: 4, extra: 1},
    {value: 'Item5', id: 5, extra: 0},
    {value: 'item6', id: 6, extra: 1},
    {value: 'item7', id: 7, extra: 1},
    {value: 'item8', id: 8, extra: 1},
    'item3'
];

  constructor(private _service: TaskService, private _router: Router) {
    this.setModelValues();
   }

  ngOnInit() {
    this.init();
    this.getMasterData();

    if (localStorage.getItem('emailAddress') === null) {
      this.getAllEmailAddress();
    }else {
      this.autocompleteItemsAsObjects = JSON.parse(localStorage.getItem('emailAddress'));
    }


  }

  setModelValues() {
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
    this.model.receipients = [];

    this.model.report_id = '';

  }

  getMasterData() {
    this._service.getAllReports().subscribe(response => {
      const res = response.result;
      if (res.statusCode === 200) {
        this.reportLists = res.info.hits.hits;
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


// public requestAutocompleteItems = (text: string): Observable<Response> => {
//   const url = `https://api.github.com/search/repositories?q=${text}`;
//   return this.http
//       .get(url)
//       .pipe(map(data => data.json().items.map(item => item.full_name)));
// };


getAllEmailAddress() {

this._service.getAllEmailAddress().subscribe(res => {
  const response = res;

  console.log('response');
  console.log(response);

  this.autocompleteItemsAsObjects = response.result.info;

  console.log(JSON.stringify(this.autocompleteItemsAsObjects));

  localStorage.setItem('emailAddress', JSON.stringify(this.autocompleteItemsAsObjects));


});
}

gotoHistory() {

  this._router.navigate(['/taskLogs']);

}

  init() {
      this._service.get().subscribe(response => {
        const res = response.result;
        if (res.statusCode === 200) {
          this.items = res.info.hits.hits;
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



  createModalFunc(form) {
    form.resetForm();
    this.createModal.show();
   }


    create(form) {

      if (form.valid) {
        this._service.add(this.model).subscribe(
          (res) => {
              this.init();
              this.createModal.hide();
              form.resetForm();

          },
        (err) => {
            console.log('err msg');
        });

     }
    }

    edit(data, id) {
      this.editModal.show();
      console.log(data);
      console.log(this.model);
      this.model = Object.assign({}, data);

      console.log(this.model);
      console.log(IsJsonString(this.model.receipients));
      if (IsJsonString(this.model.receipients)) {
        this.model.receipients = JSON.parse(data.receipients);
      }else {
        this.model = data;
      }

      this.id = id;
      console.log(this.model);
      console.log(this.id);
    }

    update(form) {
      console.log(this.id);

      if (form.valid) {
      this._service.update(this.model, this.id).subscribe(
        (res) => {
             const response = res['result']['info']['msg'];
             this.init();
             this.editModal.hide();

        },
      (err) => {
          console.log('err msg');

      });
    }

    }

    deleteModalFunc(id) {
      this.deleteModal.show();
      this.id = id;
    }

    delete() {
      this._service.delete(this.id).subscribe(
        (res) => {
            console.log(res);
             const reponse = res['result']['info']['msg'];
            this.init();
             this.deleteModal.hide();
        },
      (err) => {
          console.log('err msg');
      });
    }


    counter(i: number) {
      return new Array(i);
    }

    changeReport(event: Event) {
      const index = event.target['options'].selectedIndex;
      const selectElementText = event.target['options'][index].text;
      console.log(selectElementText);
      this.model.report_name = selectElementText;
    }






}

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}
