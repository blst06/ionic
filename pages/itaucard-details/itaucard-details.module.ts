import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItaucardDetailsPageRoutingModule } from './itaucard-details-routing.module';

import { ItaucardDetailsPage } from './itaucard-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItaucardDetailsPageRoutingModule
  ],
  declarations: [ItaucardDetailsPage]
})
export class ItaucardDetailsPageModule {}
