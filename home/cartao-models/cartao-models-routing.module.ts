import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoModelsPage } from './cartao-models.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoModelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoModelsPageRoutingModule {}
