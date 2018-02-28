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

      this.leaves.push('Who is on leave today?');
      this.leaves.push('How many employees are on leave today ?');
      this.leaves.push('Today leave list');
      
      this.leaves.push('How many kinds of leave does our organization provide ?');
      
      
      this.leaves.push('How many days casual leave available?');
      
      
      this.leaves.push('Please provide my remaining leave details ?');
      
      this.leaves.push('How many leaves are remaining for me in this financial year ?');
      
      this.leaves.push('What is the Maternity leave policy of the company');
      

      this.leaves.push('What is the Paternity leave poilicy of the company ?');
      
      this.leaves.push('How many sick leave available ?');
      
      this.leaves.push('How many days privilege leave available?');
      
      this.leaves.push('How many days trainee leave available?');
      

      this.leaves.push('How many days of condolence leave available ?');
      
      this.leaves.push('Who is my reporting manager ?');
      
      this.leaves.push('Holiday list of this financial year ');
      

      this.otSchedules.push('What is my shift details?');
      this.otSchedules.push('What is my working hours?');
      this.otSchedules.push('What is my office timing ?');
      
      this.otSchedules.push('What is the commencement time of lunch break,');
      
      
      this.otSchedules.push('How many permission can be taken in a month ?');
      this.otSchedules.push('How many permission are available ?');
      

      this.empBenefits.push('How do we apply for home loans or car loans?');
      this.empBenefits.push('How I can apply for loan ?');
      
      
      this.empBenefits.push('How I can apply for provident fund transfer ?');

      this.empBenefits.push('How I can solve tax related issues ?');
      
      
      this.empBenefits.push('How do we apply for house rent allowance ?');

      
      this.empBenefits.push('How do we apply for claims and reimbursement ?,');
      
      this.empBenefits.push('What is the policy to hire employees and selection process');
      
      


      this.loadReports();
    }

    loadReports() {
      //this.reports.push({'report_name': 'leave approval pending status', 'link': ''});
      this.reports.push({'report_name': 'Holiday list', 'link': ''});
      this.reports.push({'report_name': 'Attendance report', 'link': ''});
      this.reports.push({'report_name': 'Leave type', 'link': ''});
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
