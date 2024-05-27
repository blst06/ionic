import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoModelsPageRoutingModule } from './cartao-models-routing.module';

import { CartaoModelsPage } from './cartao-models.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoModelsPageRoutingModule
  ],
  declarations: [CartaoModelsPage]
})
export class CartaoModelsPageModule {}
