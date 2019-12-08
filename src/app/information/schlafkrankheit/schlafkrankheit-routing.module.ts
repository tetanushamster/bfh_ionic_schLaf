import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchlafkrankheitPage } from './schlafkrankheit.page';

const routes: Routes = [
  {
    path: '',
    component: SchlafkrankheitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchlafkrankheitPageRoutingModule {}
