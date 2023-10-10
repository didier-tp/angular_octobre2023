import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { TvaComponent } from './basic/tva/tva.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { ZzComponent } from './demo/zz/zz.component';
import { MynumberPipe } from './mynumber.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    TvaComponent,
    CalculatriceComponent,
    DemoComponent,
    SeuilComponent,
    ListProdComponent,
    RegletteComponent,
    ZzComponent,
    MynumberPipe,
    WelcomeComponent,
    LoginComponent,
    ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule , ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
