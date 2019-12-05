import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchlafhygenePage } from './schlafhygene.page';

const routes: Routes = [
  {
    path: '',
    component: SchlafhygenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchlafhygenePageRoutingModule {}
