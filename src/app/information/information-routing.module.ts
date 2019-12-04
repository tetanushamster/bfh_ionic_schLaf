import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationPage } from './information.page';

const routes: Routes = [
  {
    path: '',
    component: InformationPage
  },  {
    path: 'therapie',
    loadChildren: () => import('./therapie/therapie.module').then( m => m.TherapiePageModule)
  },
  {
    path: 'schlafkrankheit',
    loadChildren: () => import('./schlafkrankheit/schlafkrankheit.module').then( m => m.SchlafkrankheitPageModule)
  },
  {
    path: 'schlafhygene',
    loadChildren: () => import('./schlafhygene/schlafhygene.module').then( m => m.SchlafhygenePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationPageRoutingModule {}
