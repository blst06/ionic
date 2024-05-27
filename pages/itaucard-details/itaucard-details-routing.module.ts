import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItaucardDetailsPage } from './itaucard-details.page';

const routes: Routes = [
  {
    path: '',
    component: ItaucardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItaucardDetailsPageRoutingModule {}
