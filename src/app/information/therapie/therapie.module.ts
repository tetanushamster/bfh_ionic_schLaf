import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TherapiePageRoutingModule } from './therapie-routing.module';

import { TherapiePage } from './therapie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TherapiePageRoutingModule
  ],
  declarations: [TherapiePage]
})
export class TherapiePageModule {}
