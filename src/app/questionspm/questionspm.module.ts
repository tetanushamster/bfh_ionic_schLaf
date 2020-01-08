import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionspmPageRoutingModule } from './questionspm-routing.module';

import { QuestionspmPage } from './questionspm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionspmPageRoutingModule
  ],
  declarations: [QuestionspmPage]
})
export class QuestionspmPageModule {}
