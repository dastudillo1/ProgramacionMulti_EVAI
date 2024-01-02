// navscan-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavscanPage } from './navscan.page';

const routes: Routes = [
  {
    path: '',
    component: NavscanPage,
    children: [
      {
        path: 'scan',
        loadChildren: () => import('../scan/scan.module').then(m => m.ScanPageModule)
      },
      {
        path:'historial',
        children:[
          {
            path:'',
            loadChildren:()=>
              import('../historial-scan/historial-scan.module').then(m=>m.HistorialScanPageModule)
          }/*,
          {
            path:'mapa/:geo',
            loadChildren:()=>
              import('../mapa/mapa.module').then(m=>m.MapaPageModule)
          }*/
        ]
      },
      // Redirigir a 'scan' por defecto
      {
        path: '',
        redirectTo: 'scan',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavscanPageRoutingModule {}