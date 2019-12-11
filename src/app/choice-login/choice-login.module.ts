import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoiceLoginPageRoutingModule } from './choice-login-routing.module';

import { ChoiceLoginPage } from './choice-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoiceLoginPageRoutingModule
  ],
  declarations: [ChoiceLoginPage]
})
export class ChoiceLoginPageModule {}
