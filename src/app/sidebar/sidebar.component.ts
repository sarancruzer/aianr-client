import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router) { }
  
    ngOnInit() {
      
    }
    
    logout(){
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("firstname");
      localStorage.removeItem("designation");
      localStorage.removeItem("reporting_manager");
      localStorage.removeItem("location");
      localStorage.removeItem("authentication");
      localStorage.removeItem("chats");
      localStorage.removeItem("sessions");
  
      this._router.navigate(['/login']); 
    }

}
