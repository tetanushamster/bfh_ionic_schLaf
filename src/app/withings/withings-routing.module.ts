import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithingsPage } from './withings.page';

const routes: Routes = [
  {
    path: '',
    component: WithingsPage
  },
  {
    path: 'identity',
    loadChildren: () => import('./identity/identity.module').then( m => m.IdentityPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithingsPageRoutingModule {}
