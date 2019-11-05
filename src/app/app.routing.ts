import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
   {path: '', component: AdminLayoutComponent , canActivate: [AuthGuardService] , children: [
      {path: 'dash', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule', canActivate: [AuthGuardService]}]},
   { path: 'login', component: LoginComponent,  pathMatch: 'full'  },
   { path: 'logout', component: LogoutComponent}
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
