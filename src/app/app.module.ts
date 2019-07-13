import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
//import {SidebarComponent} from './sidebar/sidebar.component';
//import {DashboardComponent} from './dashboard/dashboard.component';

import {TokenInterceptorService} from './interceptor/token-interceptor.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../app/material/material.module';
import {LoginRegistrationModule} from '../app/login-registration/login-registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginRegistrationModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
