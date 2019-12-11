import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'login',
=======
    redirectTo: 'choice-login',
>>>>>>> origin/master
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
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
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'protocol',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./protocol/protocol.module').then( m => m.ProtocolPageModule)
  },
  {
    path: 'window',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./window/window.module').then( m => m.WindowPageModule)
  },   {
    path: 'records',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./records/records.module').then( m => m.RecordsPageModule)
  },
  {
    path: 'information',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
<<<<<<< HEAD
    path: 'questions',
    //canActivate: [AuthGuard],
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
 

];
=======
    path: 'withings',
    loadChildren: () => import('./withings/withings.module').then( m => m.WithingsPageModule)
  }];
>>>>>>> origin/master

  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
