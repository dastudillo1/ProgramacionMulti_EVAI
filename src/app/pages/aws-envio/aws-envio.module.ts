import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwsEnvioPageRoutingModule } from './aws-envio-routing.module';

import { AwsEnvioPage } from './aws-envio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwsEnvioPageRoutingModule
  ],
  declarations: [AwsEnvioPage]
})
export class AwsEnvioPageModule {}
