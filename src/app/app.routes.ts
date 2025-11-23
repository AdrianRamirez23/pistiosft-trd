import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login';
import { DashboardComponent } from './views/dashboard/dashboard';
import { ConsentComponent } from './views/consent/consent';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consent', component: ConsentComponent }
];