import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Que3PageRoutingModule } from './que3-routing.module';

import { Que3Page } from './que3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Que3PageRoutingModule
  ],
  declarations: [Que3Page]
})
export class Que3PageModule {}
