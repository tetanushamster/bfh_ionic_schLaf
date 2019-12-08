import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Que1PageRoutingModule } from './que1-routing.module';

import { Que1Page } from './que1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Que1PageRoutingModule
  ],
  declarations: [Que1Page]
})
export class Que1PageModule {}
