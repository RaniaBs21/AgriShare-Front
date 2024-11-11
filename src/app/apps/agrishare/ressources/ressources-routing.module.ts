import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RessourcesComponent} from "./Components/ressources/ressources.component";




const routes: Routes = [
  {
    path: '',
    component: RessourcesComponent},
  /*{
    path: 'ajoutRessource',
    component: AddRessourceComponent
  } ,{
    path: 'ajoutEquipement',
    component: AddEquipementComponent
  } ,{
    path: 'updateEquipement/:id',
    component: UpdateEquipementComponent
  } ,{
    path: 'updateRessource/:id',
    component: UpdateRessourceComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
