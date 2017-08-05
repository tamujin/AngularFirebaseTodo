import { DashboardComponent } from './app/dashboard/dashboard.component';
import { LoginComponent } from './app/login/login.component';

import { AuthenticationGuard } from './app/services/authenticationGuard.service';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    // {path: 'gallery',  component: GalleryComponent , canActivate: [ AuthenticationGuard ]},
    // {path: 'upload',  component: UploadComponent , canActivate: [ AuthenticationGuard ]},
    // {path: 'image/:id',  component: ImageDetailComponent , canActivate: [ AuthenticationGuard]},
    {path: 'dashboard',  component: DashboardComponent , canActivate: [ AuthenticationGuard ]},
    { path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'login',  component: LoginComponent }

];



