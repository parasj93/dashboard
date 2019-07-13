import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {LoginRegistrationRoutingModule} from './login-registration-routing.module';
import {EventsComponent} from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    EventsComponent,
    SpecialEventsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    LoginRegistrationRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class LoginRegistrationModule {}
