import { LeaveRequestComponent } from './leave-request/leave-request.component';

import { TaskLogsComponent } from './task-logs/task-logs.component';
import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { Routes,  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { AboutComponent } from './about/about.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';
import { ReactionComponent } from './reaction/reaction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: FullLayoutComponent, data: {title: 'DASHBOARD'},
        children: [
          {path: 'landing', component: LandingComponent, data: {title: 'Langinding Page'}},
          {path: 'about', component: AboutComponent, data: {title: 'Langinding Page'}},
          {path: 'report', component: ReportComponent, data: {title: 'Langinding Page'}},
          {path: 'dashboard', component: DashboardComponent, data: {title: 'Langinding Page'}},
          {path: 'favourite', component: FavouriteComponent, data: {title: 'Langinding Page'}},
          {path: 'profile', component: ProfileComponent, data: {title: 'Profile Page'}},
          {path: 'task', component: TaskComponent, data: {title: 'Task Page'}},
          {path: 'taskLogs', component: TaskLogsComponent, data: {title: 'Task Logs Page'}},
          {path: 'leaveRequest', component: LeaveRequestComponent, data: {title: 'Request Process'}},
          {path: 'reaction', component: ReactionComponent, data: {title: 'Reaction Page'}},
      ]
    },
    {path: 'login', component: LoginComponent, data: {title: 'Login Page'}},
    {path: 'logout', component: LogoutComponent, data: {title: 'Log out'}},
    {path: 'about',  component: AboutComponent },
    {path: '**',  component: PageNotFoundComponent }

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
