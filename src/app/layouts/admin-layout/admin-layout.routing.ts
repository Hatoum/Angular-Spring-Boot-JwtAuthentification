import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { AjoutOuvrierComponent } from 'app/ajout-ouvrier/ajout-ouvrier.component';
import { AjoutClientComponent } from 'app/ajout-client/ajout-client.component';
import { AuthGuardService } from 'app/service/auth-guard.service';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent , canActivate: [AuthGuardService]},
    { path: 'user',           component: UserComponent , canActivate: [AuthGuardService]},
    { path: 'table',          component: TablesComponent, canActivate: [AuthGuardService] },
    { path: 'ajououvrier',      component: AjoutOuvrierComponent, canActivate: [AuthGuardService]},
    { path: 'ajouclient',      component: AjoutClientComponent, canActivate: [AuthGuardService]},

];
