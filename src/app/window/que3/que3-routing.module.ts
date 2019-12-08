import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Que3Page } from './que3.page';

const routes: Routes = [
  {
    path: '',
    component: Que3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Que3PageRoutingModule {}
