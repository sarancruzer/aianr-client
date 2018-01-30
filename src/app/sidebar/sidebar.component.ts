import { CommonService } from './../_service/common.service';
import { GlobalSettings } from './../_class/global-settings';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef , Renderer, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [CommonService]
})
export class SidebarComponent implements OnInit {

  message = 'Hello angular';

  @Output() messageEvent = new EventEmitter<string>();

  private leaves = [];
  private otSchedules = [];
  private empBenefits = [];
  private reports = [];

  innerHeight: any;
  innerWidth: any;

  constructor (private _router: Router, private _globalSettings: GlobalSettings, private el: ElementRef, private renderer: Renderer, private _commonService: CommonService) { 
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
  }

    ngOnInit() {
      this._globalSettings.username = localStorage.getItem('employeeName');
      this._globalSettings.email = localStorage.getItem('email');

      this.loadQuestions();
    }


    loadQuestions() {

      this.leaves.push('who is on leave today?');
      this.leaves.push('How many employees are on leave today ?');
      this.leaves.push('Today leave list');
      this.leaves.push('today leave status');
      this.leaves.push('How many kinds of leave does our organization provide');
      this.leaves.push('How many types of leave are available');
      this.leaves.push('leave types');
      this.leaves.push('please provide leave types');
      this.leaves.push('What is the casual leave policy of company?');
      this.leaves.push('How many days casual leave available?');
      this.leaves.push('How many casual leaves can be taken in a year?');
      this.leaves.push('Please provide my remaining leave details ?');
      this.leaves.push('How many leaves are remaining for me ?');
      this.leaves.push('What is the Maternity leave policy leave in the company');
      this.leaves.push('How many days of maternity leave?');
      this.leaves.push('How many months you will provide maternity leave?');
      this.leaves.push('Explain Maternity leave policy of company ?');
      this.leaves.push('What is the Paternity leave policy leave in the company ?');
      this.leaves.push('How many days of paternity leave?');
      this.leaves.push('Explain Paternity leave policy of company');
      this.leaves.push('How many  sick leave available for me?');
      this.leaves.push('How many sick leave left for me ?');
      this.leaves.push('What is the privilege leave policy of company?,');
      this.leaves.push('How many days privilege leave available?');
      this.leaves.push('What is the trainee leave policy of company?,');
      this.leaves.push('How many days trainee leave available?');
      this.leaves.push('What is the condolence leave policy leave of company ?');
      this.leaves.push('How many days of condolence leave available ?');
      this.leaves.push('Explain condolence leave policy of company ?');
      this.leaves.push('Who is my reporting manager ?');
      this.leaves.push('reporting details');
      this.leaves.push('How many holidays are there in this financial year ?');
      this.leaves.push('Please provide company holiday list');
      this.leaves.push('Holiday list of this financial year ');

      this.otSchedules.push('What is my shift details?');
      this.otSchedules.push('What is my working hours?');
      this.otSchedules.push('Available shift details');
      this.otSchedules.push('What is my office timing ?');
      this.otSchedules.push('What is the commencement time of lunch break,');
      this.otSchedules.push('Please provide the lunch break details,');
      this.otSchedules.push('please provide the lunch time,');
      this.otSchedules.push('lunch break');
      this.otSchedules.push('How many permission can be taken in a month ?');
      this.otSchedules.push('late permission per month,');
      this.otSchedules.push('maximum permission available for employees,');
      this.otSchedules.push('How many permission are available ?');
      this.otSchedules.push('How many hours is the permission considered ?');

      this.empBenefits.push('How do we apply for home loans or car loans?');
      this.empBenefits.push('How I can apply for loan ?');
      this.empBenefits.push('How do we apply for house rent allowance HRA?');
      this.empBenefits.push('How I can get house rent allowance ?');
      // this.empBenefits.push("What are the insurance benefits for employees ?");
      this.empBenefits.push('How I can apply for provident fund transfer ?');
      this.empBenefits.push('How do we apply for provident fund transfer ?');
      this.empBenefits.push('Do provident fund transfer is possible ?');
      this.empBenefits.push('Whom do we contact for tax related issues?');
      this.empBenefits.push('How I can solve tax related issues ?');
      this.empBenefits.push('Whom I need to contact for claims and reimbursement?');
      this.empBenefits.push('How do we apply for claims and reimbursement ?,');
      this.empBenefits.push('What is the policy to hire employees and selection process');
      this.empBenefits.push('What is the interview process');



      this.loadReports();
    }

    loadReports() {
      //this.reports.push({'report_name': 'leave approval pending status', 'link': ''});
      this.reports.push({'report_name': 'holiday list', 'link': ''});
      this.reports.push({'report_name': 'attendance report', 'link': ''});
      this.reports.push({'report_name': 'Compoff report', 'link': ''});
      this.reports.push({'report_name': 'Over time report', 'link': ''});
      // this.reports.push({'report_name': 'Available leave ', 'link': ''});
    }



    sendMessage(msg) {
      console.log(msg);
      this.messageEvent.emit(msg);
    }


    logout() {
      localStorage.removeItem('employeeName');
      localStorage.removeItem('email');
      localStorage.removeItem('employeeNumber');
      localStorage.removeItem('authentication');
      localStorage.removeItem('sessions');

      this._router.navigate(['/login']);
    }


    menuToggle(event: any) {

      // console.log(event);
      const input = this.el.nativeElement.querySelector('.menu-li');

      console.log(input);
      console.log(input.children[0].classList);
      console.log(input.children[0].classList.contains('toggled'));


      if (input.children[0].classList.contains('toggled')) {
        console.log('TRUE');
        // input.children[0].classList.contains('toggled')
        this.renderer.setElementClass(input.children[0], 'toggled', false);
      }else {
        console.log('FALSE');
        this.renderer.setElementClass(input.children[0], 'toggled', true);
      }

   }

  



}
