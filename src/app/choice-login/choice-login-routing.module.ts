import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoiceLoginPage } from './choice-login.page';

const routes: Routes = [
  {
    path: '',
    component: ChoiceLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoiceLoginPageRoutingModule {}
