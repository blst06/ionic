import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./rotas/transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'recarga',
    loadChildren: () => import('./rotas/transporte/recarga/recarga.module').then( m => m.RecargaPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./rotas/transporte/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./rotas/transporte/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./rotas/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./rotas/profile/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'itaucard-details',
    loadChildren: () => import('./pages/itaucard-details/itaucard-details.module').then( m => m.ItaucardDetailsPageModule)
  },
  {
    path: 'nubank.details',
    loadChildren: () => import('./pages/nubank.details/nubank.details.module').then( m => m.NubankDetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
