import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarCartaoPage } from './adicionar-cartao.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarCartaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarCartaoPageRoutingModule {}
