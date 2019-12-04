import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TherapiePage } from './therapie.page';

const routes: Routes = [
  {
    path: '',
    component: TherapiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TherapiePageRoutingModule {}
