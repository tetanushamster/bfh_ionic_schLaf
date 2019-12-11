import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WindowPage } from './window.page';

const routes: Routes = [
  {
    path: '',
    component: WindowPage
  },  {
    path: 'que1',
    loadChildren: () => import('./que1/que1.module').then( m => m.Que1PageModule)
  },
  {
    path: 'que2',
    loadChildren: () => import('./que2/que2.module').then( m => m.Que2PageModule)
  },
  {
    path: 'que3',
    loadChildren: () => import('./que3/que3.module').then( m => m.Que3PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WindowPageRoutingModule {}
