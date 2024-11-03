import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoltesComponent } from './Components/recoltes/recoltes.component';
import { AjouterRecolteComponent } from './Components/recoltes/ajouter-recolte/ajouter-recolte.component';

const routes: Routes = [
  {
    path: '',
    component: RecoltesComponent,
  },
  {
    path: 'ajoutRecolte',
    component: AjouterRecolteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoltesRoutingModule { }
