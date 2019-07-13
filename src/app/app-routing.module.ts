import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './login-registration/login-registration.module#LoginRegistrationModule',
  },
  
  {
    path: 'material',
    loadChildren: './material/material.module#MaterialModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
