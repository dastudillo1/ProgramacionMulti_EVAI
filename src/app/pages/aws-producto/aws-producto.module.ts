import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwsProductoPageRoutingModule } from './aws-producto-routing.module';

import { AwsProductoPage } from './aws-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwsProductoPageRoutingModule
  ],
  declarations: [AwsProductoPage]
})
export class AwsProductoPageModule {}
