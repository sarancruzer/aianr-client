import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("employeeName");
    localStorage.removeItem("email");
    localStorage.removeItem("employeeNumber");
    localStorage.removeItem("authentication");
    localStorage.removeItem("sessions");

    this._router.navigate(['/login']); 
  }

}
