import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'logeado',
    loadChildren: () => import('./logeado/logeado.module').then( m => m.LogeadoPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/navscan/navscan.module').then( m => m.NavscanPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'aws',
    loadChildren: () => import('./pages/aws/aws.module').then( m => m.AwsPageModule)
  },
  {
    path: 'aws-producto',
    loadChildren: () => import('./pages/aws-producto/aws-producto.module').then( m => m.AwsProductoPageModule)
  },
  {
    path: 'aws-envio',
    loadChildren: () => import('./pages/aws-envio/aws-envio.module').then( m => m.AwsEnvioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
