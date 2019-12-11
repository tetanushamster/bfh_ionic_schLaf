import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choice-login',
    pathMatch: 'full'
  },
  {
    path: 'choice-login',
    loadChildren: () => import('./choice-login/choice-login.module').then( m => m.ChoiceLoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'protocol',
    loadChildren: () => import('./protocol/protocol.module').then( m => m.ProtocolPageModule)
  },
  {
    path: 'window',
    loadChildren: () => import('./window/window.module').then( m => m.WindowPageModule)
  },

   {
    path: 'records',
    loadChildren: () => import('./records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'withings',
    loadChildren: () => import('./withings/withings.module').then( m => m.WithingsPageModule)
  }];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
