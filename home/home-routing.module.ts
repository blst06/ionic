import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'adicionar-cartao',
    loadChildren: () => import('./adicionar-cartao/adicionar-cartao.module').then( m => m.AdicionarCartaoPageModule)
  },
  {
    path: 'cartao-models',
    loadChildren: () => import('./cartao-models/cartao-models.module').then( m => m.CartaoModelsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
