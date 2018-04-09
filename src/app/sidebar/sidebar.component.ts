import { CommonService } from './../_service/common.service';
import { GlobalSettings } from './../_class/global-settings';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Renderer, EventEmitter, Input, Output } from '@angular/core';
import { _menuList } from '../_shared/menuList';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [CommonService]
})
export class SidebarComponent implements OnInit {

  message = 'Hello angular';
  menu: any;
  @Output() messageEvent = new EventEmitter<string>();

  private leaves = [];
  private otSchedules = [];
  private empBenefits = [];
  private reports = [];

  innerHeight: any;
  innerWidth: any;

  constructor(private _router: Router, private _globalSettings: GlobalSettings, private el: ElementRef, private renderer: Renderer, private _commonService: CommonService) {
    this.innerHeight = (window.screen.height) + 'px';
    this.innerWidth = (window.screen.width) + 'px';
    this.menu = _menuList;
    console.log(this.menu);
  }

  ngOnInit() {
    this._globalSettings.username = localStorage.getItem('employeeName');
    this._globalSettings.email = localStorage.getItem('email');

    // this.loadQuestions();
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
    } else {
      console.log('FALSE');
      this.renderer.setElementClass(input.children[0], 'toggled', true);
    }

  }





}
