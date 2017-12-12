import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSettings } from "./_class/global-settings";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GlobalSettings]
})
export class AppComponent implements OnInit {
  
  constructor(private _router: Router,private _globalSettings:GlobalSettings){
  //  this._router.navigate(['/login']); 
  this._globalSettings.authenticated = JSON.parse(localStorage.getItem("authentication"));
  this._globalSettings.username = localStorage.getItem("firstname");
  }   

  ngOnInit() {
    console.log("this._globalSettings.authenticated");
    console.log(this._globalSettings.authenticated);
    if(!this._globalSettings.authenticated){
        this._router.navigate(['/landing']); 
    }

  }
}
