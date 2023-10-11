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
import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ConversionComponent } from './conversion/conversion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DeviseComponent } from './devise/devise.component';
import { DeviseComponent2 } from './devise2/devise2.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

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
    ReactiveLoginComponent,
    TogglePanelComponent,
    ConversionComponent,
    DeviseComponent,
    DeviseComponent2,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule , ReactiveFormsModule, BrowserAnimationsModule,
    MatTabsModule , HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
