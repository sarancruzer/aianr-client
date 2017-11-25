import { Router } from '@angular/router';
import { Component, OnInit,ElementRef ,Renderer} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router,private el: ElementRef,private renderer: Renderer) { }
  
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


  //   check(event){
  //     console.log("toggle action");
  //     let uii = event.target.classList;
  //     console.log(event);
  //     console.log(event.target);
  //     console.log(event.target.classList);      
  //     event.target.classList.toggle('toggled'); // To toggle
  //   }

  //   menuToggle(event:any) {
  //     console.log(event.target.classList.contains("opened"));
  //     event.target.classList.toggle('toggled'); // To toggle
  //     if(event.target.classList.contains("opened")){
  //       console.log("true");
  //       //this.renderer.setElementClass(event.target,"opened",false);
  //     }else{
  //       console.log("false");
  //      // this.renderer.setElementClass(event.target,"opened",true);
  //     }

      
  // }
}
