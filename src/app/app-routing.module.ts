import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { PassToPagesGuard } from './_guard/pass-to-pages.guard';
import { AuthGuard } from './_guard/auth.guard';
import { PrivilegeGuard } from './_guard/privilege.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [PassToPagesGuard] },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [PrivilegeGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
