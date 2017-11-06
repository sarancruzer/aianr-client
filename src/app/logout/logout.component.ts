import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("firstname");
    localStorage.removeItem("designation");
    localStorage.removeItem("reporting_manager");
    localStorage.removeItem("location");
    localStorage.removeItem("authentication");
    localStorage.removeItem("chats");

    this._router.navigate(['/login']); 
  }



}
