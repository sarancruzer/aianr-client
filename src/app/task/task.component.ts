import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../_service/task.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Task } from '../_model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  @ViewChild('createModal') public createModal:ModalDirective;
  @ViewChild('editModal') public editModal:ModalDirective;
  @ViewChild('deleteModal') public deleteModal:ModalDirective;
  

  items : any = [];
  model = new Task();
  id :any;
  reportLists :any = [];

  dailyFlag:any;
  monthlyFlag:any;
  yearlyFlag:any;
  
  constructor(private _service:TaskService) {
    this.setModelValues();
   }

  ngOnInit() {
    this.init();
    this.getMasterData();
  }

  setModelValues(){
    this.model.report_id = null;
    this.model.report_name = "";
    this.model.email = false;
    this.model.report = false;
    this.model.daily = false;
    this.model.delay = "";
    this.model.monthly = false;
    this.model.days = "";    
    this.model.weekly = false;
    this.model.weekdays = "";
    this.model.receipients = "";

    // this.reportLists = [
    //   {"id":1,"name":"reportOne"},
    //   {"id":2,"name":"reportTwo"},
    //   {"id":3,"name":"reportThree"},
    //   {"id":4,"name":"reportFour"},
    //   {"id":5,"name":"reportFive"},
    // ];

    this.model.report_id = "";

  }

  getMasterData(){
    this._service.getAllReports().subscribe(response => {
      let res = response.result;
      if(res.statusCode == 200){
        this.reportLists = res.info.hits.hits;
      }
      if(res.statusCode == 204){
        console.log(res.successText);
      }        
  },
err =>{
    console.log("error msg");
    //this.donationlistprovider.showErrorToast(err);
})
}


  init() {
      this._service.get().subscribe(response => {
        let res = response.result;
        if(res.statusCode == 200){
          this.items = res.info.hits.hits;
        }
        if(res.statusCode == 204){
          console.log(res.successText);
        }        
    },
  err =>{
      console.log("error msg");
      //this.donationlistprovider.showErrorToast(err);
  })
  }

  createModalFunc(form){
    form.resetForm();  
    this.createModal.show(); 
   }
   
  
    create(form){
  
      if(form.valid){
        this._service.add(this.model).subscribe(     
          (res) => {
              this.init();
              this.createModal.hide();
              form.resetForm(); 
              
          },
        (err) => { 
            console.log("err msg");
        }) 
      
     }
    }
  
    edit(data,id){
      this.editModal.show();
      this.model = data;
      this.id = id;

      console.log(this.model);
      console.log(this.id);
    }
  
    update(form){
      console.log(this.id);

      if(form.valid){
      this._service.update(this.model,this.id).subscribe(     
        (res) => {
             let response = res['result']['info']['msg'];
             this.init();             
             this.editModal.hide();
             
        },
      (err) => { 
          console.log("err msg");
          
      }) 
    }
  
    }
  
    deleteModalFunc(id){
      this.deleteModal.show();
      this.id = id;    
    }
  
    delete(){
      this._service.delete(this.id).subscribe(     
        (res) => {
            console.log(res);
             let reponse = res['result']['info']['msg'];
            this.init();
             this.deleteModal.hide();
        },
      (err) => { 
          console.log("err msg");          
      }) 
    }


    counter(i: number) {
      return new Array(i);
    }

    changeReport(event: Event){
      let index = event.target['options'].selectedIndex
      let selectElementText = event.target['options'][index].text;
      console.log(selectElementText); 
      this.model.report_name = selectElementText;            
    }

   


   

}
