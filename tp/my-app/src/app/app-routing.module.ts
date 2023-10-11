import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BasicComponent } from './basic/basic.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { DemoComponent } from './demo/demo.component';
import { ConversionComponent } from './conversion/conversion.component';
import { DeviseComponent } from './devise/devise.component';

import { TvaComponent } from './basic/tva/tva.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { CanActivateAdminRouteGuard } from './common/guard/can-activate-admin-route-guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { DeviseComponent2 } from './devise2/devise2.component';

//WelcomeComponent créé via
//ng g component welcome

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginV2', component: ReactiveLoginComponent },
  { path: 'basic', component: BasicComponent ,
  children: [
   { path: 'tva', component: TvaComponent },
   { path: 'calculatrice/:mode', component: CalculatriceComponent },
   { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
   ]
  },
  { path : "not-authorized" , component : NotAuthorizedComponent },
  { path: 'conversion', component: ConversionComponent },
  { path: 'devise2', component: DeviseComponent2 },
  { path: 'devise', component: DeviseComponent ,
           canActivate : [CanActivateAdminRouteGuard] },
  { path: 'demo', component: DemoComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
