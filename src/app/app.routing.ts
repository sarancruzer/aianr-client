import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {path: '',redirectTo: 'login',pathMatch: 'full'},
    {path: '',component: FullLayoutComponent,data: {title: 'DASHBOARD'},
        children: [
          {path: 'landing',component: LandingComponent,data: {title: 'Langinding Page'}}          
      ]
    },
    {path: 'login',component: LoginComponent,data: {title: 'Login Page'}},
    {path: 'logout',component: LogoutComponent,data: {title: 'Log out'}},
    {path: 'about', component: AboutComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]    
})
export class AppRoutingModule { }
