import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ModificationRecolteComponent
} from "./apps/agrishare/recoltes/Components/recoltes/modification-recolte/modification-recolte.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  { path: '**', redirectTo: '' } ,
  { path: 'recoltes/modifier/:id', component: ModificationRecolteComponent },
// Redirige vers la page d'accueil pour les routes non définies
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
