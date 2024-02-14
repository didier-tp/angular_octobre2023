import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BasicComponent } from './basic/basic.component';
import { LoginComponent } from './login/login.component';
import { ConversionComponent } from './conversion/conversion.component';
import { DemoComponent } from './demo/demo.component';
import { TvaComponent } from './basic/tva/tva.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { authGardGuard } from './common/guard/auth-gard.guard';

const routes: Routes = [
  { path: "ngr-welcome" , component : WelcomeComponent},
  { path: '', redirectTo: '/ngr-welcome', pathMatch: 'full'},
  { path: "ngr-basic" , component : BasicComponent ,
      children : [
        { path: "tva" , component : TvaComponent},
        { path: "calculatrice/:mode" , component : CalculatriceComponent},
        { path: '', redirectTo: 'tva', pathMatch: 'prefix'}
      ]
  },
  { path: "ngr-login" , component : LoginComponent},
  { path: "ngr-conversion" , component : ConversionComponent , canActivate:[authGardGuard]},
  { path: "ngr-demo" , component : DemoComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
