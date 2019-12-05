import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchlafhygenePageRoutingModule } from './schlafhygene-routing.module';

import { SchlafhygenePage } from './schlafhygene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchlafhygenePageRoutingModule
  ],
  declarations: [SchlafhygenePage]
})
export class SchlafhygenePageModule {}
