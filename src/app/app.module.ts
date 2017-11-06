import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import {TimeAgoPipe} from 'time-ago-pipe';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'logout', component: LogoutComponent }        
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    LogoutComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
