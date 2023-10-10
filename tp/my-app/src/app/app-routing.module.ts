import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

//WelcomeComponent créé via
//ng g component welcome

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginV2', component: ReactiveLoginComponent },
  { path: 'basic', component: BasicComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
