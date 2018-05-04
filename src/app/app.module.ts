import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';

import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DialogComponent } from './dialog/dialog.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent } from './report/report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TruncatePipe } from './_pipe/truncate.pipe';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';
import { TaskLogsComponent } from './task-logs/task-logs.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { TagInputModule } from 'ngx-chips';
import { CustomJsonPipe } from './_pipe/custom-json.pipe';

import { ICheckModule } from 'angular4-icheck';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';

import { ReactionComponent } from './reaction/reaction.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



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
    FullLayoutComponent,
    SimpleLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    DialogComponent,
    AboutComponent,
    ReportComponent,
    DashboardComponent,
    FavouriteComponent,
    TruncatePipe,
    ProfileComponent,
    TaskComponent,
    TaskLogsComponent,
    CustomJsonPipe,
    ReactionComponent,
    LeaveRequestComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    TagInputModule,
    ICheckModule.forRoot(),
    LoadingBarHttpModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    NgxPaginationModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
