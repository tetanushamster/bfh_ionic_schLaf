import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchlafkrankheitPageRoutingModule } from './schlafkrankheit-routing.module';

import { SchlafkrankheitPage } from './schlafkrankheit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchlafkrankheitPageRoutingModule
  ],
  declarations: [SchlafkrankheitPage]
})
export class SchlafkrankheitPageModule {}
