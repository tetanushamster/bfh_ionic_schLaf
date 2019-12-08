import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Que2PageRoutingModule } from './que2-routing.module';

import { Que2Page } from './que2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Que2PageRoutingModule
  ],
  declarations: [Que2Page]
})
export class Que2PageModule {}
