import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DifeventosComponent } from './difeventos/difeventos.component';
import { Difeventos2Component } from './difeventos2/difeventos2.component';
import { Difeventos3Component } from './difeventos3/difeventos3.component';
import { DetalleEventoComponent } from './detalles-evento/detalles-evento.component'; // Asegúrate de importar este componente si lo tienes

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
    path: 'difeventos',
    component: DifeventosComponent
  },
  {
    path: 'difeventos2',
    component: Difeventos2Component
  },
  {
    path: 'difeventos3',
    component: Difeventos3Component
  },
  {
    path: 'detalle-evento/:id',  // Asegúrate de que esta ruta exista
    component: DetalleEventoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

