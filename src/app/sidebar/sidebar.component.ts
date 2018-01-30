import { GlobalSettings } from './../_class/global-settings';
import { Router } from '@angular/router';
import { Component, OnInit,ElementRef ,Renderer} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  innerHeight: any;
  innerWidth: any;
 
  constructor(private _router:Router,private _globalSettings:GlobalSettings,private el: ElementRef,private renderer: Renderer) {
    this.innerHeight = (window.screen.height) + "px";
    this.innerWidth = (window.screen.width) + "px";
   }
  
    ngOnInit() {
      this._globalSettings.username = localStorage.getItem("employeeName");      
      this._globalSettings.email = localStorage.getItem("email");      
    }

    
    logout(){
      localStorage.removeItem("employeeName");
      localStorage.removeItem("email");
      localStorage.removeItem("employeeNumber");
      localStorage.removeItem("authentication");
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

    
    //Collapse or Expand Menu
  //   $('.menu-toggle').on('click', function (e) {
  //     var $this = $(this);
  //     var $content = $this.next();

  //     if ($($this.parents('ul')[0]).hasClass('list')) {
  //         var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

  //         $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
  //             if ($(val).is(':visible')) {
  //                 $(val).prev().toggleClass('toggled');
  //                 $(val).slideUp();
  //             }
  //         });
  //     }

  //     $this.toggleClass('toggled');
  //     $content.slideToggle(320);
  // });

    
    menuToggle(event:any) {
     
      // console.log(event);
      let input = this.el.nativeElement.querySelector('.menu-li')

      console.log(input);
      console.log(input.children[0].classList);
      console.log(input.children[0].classList.contains('toggled'));
      
      
      if(input.children[0].classList.contains('toggled')){
        console.log("TRUE");
        //input.children[0].classList.contains('toggled')
        this.renderer.setElementClass(input.children[0],"toggled",false);
      }else{
        console.log("FALSE");
        this.renderer.setElementClass(input.children[0],"toggled",true);
      }  

      //console.log(input.parentNode);
        
        //this.renderer.setElementClass(event.target,"opened",false);
      
      // event.target.classList.toggle('toggled'); // To toggle
      // if(event.target.classList.contains("opened")){
      //   console.log("true");
      //   //this.renderer.setElementClass(event.target,"opened",false);
      // }else{
      //   console.log("false");
      //  // this.renderer.setElementClass(event.target,"opened",true);
      // }      
   }

  

}
