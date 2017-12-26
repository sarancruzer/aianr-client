import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../_service/favourite.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[FavouriteService]
})
export class NavbarComponent implements OnInit {

  reactionLists = [];
  constructor(private _router:Router,private _favouriteService:FavouriteService) { }

  ngOnInit() {
    this.getReactions();
  }

  logout(){
    localStorage.removeItem("employeeName");
    localStorage.removeItem("email");
    localStorage.removeItem("employeeNumber");
    localStorage.removeItem("authentication");
    localStorage.removeItem("sessions");

    this._router.navigate(['/login']); 
  }


  getReactions(){
    this._favouriteService.getReactions().subscribe(response => {
      let res = response.result.data.info;
      this.reactionLists = res;
      localStorage.setItem("reactions",JSON.stringify(res));
      
      console.log("currentUser");
      },
    err =>{
    console.log("error msg");
    //this.donationlistprovider.showErrorToast(err);
    })
   }

}
