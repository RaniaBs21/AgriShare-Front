import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoltesComponent } from './Components/recoltes/recoltes.component';
import { AjouterRecolteComponent } from './Components/recoltes/ajouter-recolte/ajouter-recolte.component';
import {ModificationRecolteComponent} from "./Components/recoltes/modification-recolte/modification-recolte.component";

const routes: Routes = [
  {
    path: '',
    component: RecoltesComponent,
  },
  {
    path: 'ajoutRecolte',
    component: AjouterRecolteComponent
  },
  {
    path: 'modifier/:id',
    component: ModificationRecolteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoltesRoutingModule { }
