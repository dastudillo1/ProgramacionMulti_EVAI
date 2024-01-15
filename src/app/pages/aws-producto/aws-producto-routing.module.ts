import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwsProductoPage } from './aws-producto.page';

const routes: Routes = [
  {
    path: '',
    component: AwsProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwsProductoPageRoutingModule {}
