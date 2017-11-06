import { Component, OnInit } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from "../_service/login.service"
import { GlobalSettings } from "../_class/global-settings";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;
  lSuccess:any;
  lError:any;
  private user_details = [];
  
  constructor(
    private _router: Router,
    private _http: Http,
    private _loginService:LoginService,
    private _globalSettings:GlobalSettings
    
    
  ) { }

  ngOnInit() {
    this.email = "bala@nlp.com";
    this.password = "123456";

  }

  authenticate(){
    this._loginService.getAuthenticate(this.email,this.password).subscribe(response => {
        let res = response.result;
    
       if(res.statusCode == 200){
        this.lSuccess = res.successText;
        
        localStorage.setItem("userId",res.data[0]);
        localStorage.setItem("email",res.data[1]);
        localStorage.setItem("firstname",res.data[3]);
        localStorage.setItem("designation",res.data[5]);
        localStorage.setItem("reporting_manager",res.data[6]);
        localStorage.setItem("location",res.data[7]);
        localStorage.setItem("authentication",JSON.stringify(true));
        setTimeout(() => {
          this._router.navigate(['/landing']); 
        }, 2000);

        this._globalSettings.username = localStorage.getItem("firstname");
        this._globalSettings.authenticated = JSON.parse(localStorage.getItem("authentication"));
        
       }else{
        console.log(res.successText);
        this.lError = res.successText;
       }
   },
 err =>{
  console.log("error msg");
  //this.donationlistprovider.showErrorToast(err);
})
}

}
