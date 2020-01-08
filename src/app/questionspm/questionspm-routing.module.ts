import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionspmPage } from './questionspm.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionspmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionspmPageRoutingModule {}
