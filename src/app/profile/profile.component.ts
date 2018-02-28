import { Component, OnInit } from '@angular/core';
import { GlobalSettings } from '../_class/global-settings';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reactionCount:any;
  favouriteCount:any;
  
  constructor( private _globalSettings: GlobalSettings) { }

  ngOnInit() {

    this.reactionCount =  localStorage.getItem("reactions").length;
    this.favouriteCount = localStorage.getItem("favourites").length;

    this._globalSettings.username = localStorage.getItem("employeeName");
    this._globalSettings.employeeNumber = localStorage.getItem("employeeNumber");
  }

}
