import { Component,  OnInit } from '@angular/core';
import { Http , Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../_service/login.service';
import { GlobalSettings } from '../_class/global-settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  lSuccess: any;
  lError: any;
  private user_details = [];

  constructor(
    private _router: Router,
    private _http: Http,
    private _loginService: LoginService,
    private _globalSettings: GlobalSettings

  ) {
      document.body.style.backgroundImage = 'url("../../assets/images/background.jpg")';
   }

  ngOnInit() {
    // this.clearLocalStorage();
    this.email = 'ManikandanC@quadrupleindia.com';
    this.password = '123456';

  }

  clearLocalStorage() {
    localStorage.removeItem('employeeName');
    localStorage.removeItem('email');
    localStorage.removeItem('employeeNumber');
    localStorage.removeItem('sessions');
    localStorage.removeItem('chats');
  }

  authenticate() {


    this._loginService.getAuthenticate(this.email, this.password).subscribe(response => {
        const res = response.result.data;
        const session = response.result.data.session;
        const currentUser = response.result.data.currentUser;
        const statusCode = response.result.statusCode;
        const successText = response.result.successText;
        const favourites = response.result.data.favourites;

        console.log('currentUser');
        console.log(currentUser);
        console.log(session);


       if (statusCode === 200) {
        this.lSuccess = successText;

        localStorage.setItem('employeeName', currentUser.employeename);
        localStorage.setItem('email', currentUser.officemailid);
        localStorage.setItem('employeeNumber', currentUser.employeenumber);
        localStorage.setItem('authentication', JSON.stringify(true));
        localStorage.setItem('sessions', JSON.stringify(session));

        localStorage.setItem('conversation_id', '');
        localStorage.setItem('conversation_status', '');
        localStorage.setItem('qa_flag', '1');
        localStorage.setItem('qa_nerformat', '');
        localStorage.setItem('qa_id', '');
        localStorage.setItem('qa_count', '0');


        // setTimeout(() => {
        //   this._router.navigate(['/landing']);
        // },  2000);

        this._globalSettings.username = localStorage.getItem('employeeName');
        this._globalSettings.authenticated = JSON.parse(localStorage.getItem('authentication'));
        this._router.navigate(['/landing']);


       }else {
        console.log(successText);
        this.lError = successText;
       }
   },
 err => {
  console.log('error msg');
  // this.donationlistprovider.showErrorToast(err);
});
}

}
