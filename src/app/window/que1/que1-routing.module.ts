import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Que1Page } from './que1.page';

const routes: Routes = [
  {
    path: '',
    component: Que1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Que1PageRoutingModule {}
