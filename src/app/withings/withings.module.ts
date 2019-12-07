import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithingsPageRoutingModule } from './withings-routing.module';

import { WithingsPage } from './withings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithingsPageRoutingModule
  ],
  declarations: [WithingsPage]
})
export class WithingsPageModule {}
