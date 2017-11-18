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
        let res = response.result.data;
        let session = response.result.data.session;
        let statusCode = response.result.statusCode;
        let successText = response.result.successText;

    
       if(statusCode == 200){
        this.lSuccess = successText;
        
        localStorage.setItem("userId",res.response[0]);
        localStorage.setItem("email",res.response[1]);
        localStorage.setItem("firstname",res.response[3]);
        localStorage.setItem("designation",res.response[5]);
        localStorage.setItem("reporting_manager",res.response[6]);
        localStorage.setItem("location",res.response[7]);
        localStorage.setItem("authentication",JSON.stringify(true));
        localStorage.setItem("sessions",JSON.stringify(session));
        setTimeout(() => {
          this._router.navigate(['/landing']); 
        }, 2000);

        this._globalSettings.username = localStorage.getItem("firstname");
        this._globalSettings.authenticated = JSON.parse(localStorage.getItem("authentication"));
        
       }else{
        console.log(successText);
        this.lError = successText;
       }
   },
 err =>{
  console.log("error msg");
  //this.donationlistprovider.showErrorToast(err);
})
}

}
