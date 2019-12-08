import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Que2Page } from './que2.page';

const routes: Routes = [
  {
    path: '',
    component: Que2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Que2PageRoutingModule {}
