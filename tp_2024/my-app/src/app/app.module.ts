import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { MynumberPipe } from './common/pipe/mynumber.pipe';
import { VeryBasicFilterPipe } from './common/pipe/very-basic-filter.pipe';
import { MyCustomErrorHandler } from './common/handler/my-custom-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    TvaComponent,
    WelcomeComponent,
    LoginComponent,
    MynumberPipe,
    VeryBasicFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: ErrorHandler,
      useClass: MyCustomErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
