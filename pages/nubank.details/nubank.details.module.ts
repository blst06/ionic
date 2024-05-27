import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NubankDetailsPageRoutingModule } from './nubank.details-routing.module';

import { NubankDetailsPage } from './nubank.details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NubankDetailsPageRoutingModule
  ],
  declarations: [NubankDetailsPage]
})
export class NubankDetailsPageModule {}
