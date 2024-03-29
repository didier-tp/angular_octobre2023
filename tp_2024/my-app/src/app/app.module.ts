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
import { TogglePanelComponent } from './common/component/toggle-panel/toggle-panel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import { ConversionComponent } from './conversion/conversion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';
import { RegletteComponent } from './demo/reglette/reglette.component';
import { SeuilComponent } from './demo/seuil/seuil.component';
import { ListProdComponent } from './demo/list-prod/list-prod.component';
import { ZzComponent } from './demo/zz/zz.component';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';

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
    VeryBasicFilterPipe,
    TogglePanelComponent,
    ConversionComponent,
    DemoComponent,
    RegletteComponent,
    SeuilComponent,
    ListProdComponent,
    ZzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: ErrorHandler,
      useClass: MyCustomErrorHandler
    },
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
