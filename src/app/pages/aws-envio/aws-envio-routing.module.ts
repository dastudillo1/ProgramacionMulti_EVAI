import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsEnvioPage } from './aws-envio.page';

const routes: Routes = [
  {
    path: '',
    component: AwsEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwsEnvioPageRoutingModule {}
