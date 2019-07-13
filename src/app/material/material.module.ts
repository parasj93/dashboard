import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
} from '@angular/material';

import {MaterialRoutingModule} from './material-routing.module';
import {ButtonComponent} from './button/button.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [ButtonComponent, IndexComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
  ],
})
export class MaterialModule {}
