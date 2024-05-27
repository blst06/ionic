import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NubankDetailsPage } from './nubank.details.page';

const routes: Routes = [
  {
    path: '',
    component: NubankDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NubankDetailsPageRoutingModule {}
