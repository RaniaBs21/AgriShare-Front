
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RessourcesComponent} from "./Components/ressources/ressources.component";
import {AddRessourceComponent} from "./Components/ressources/add-ressource/add-ressource.component";
import {AddEquipementComponent} from "./Components/ressources/add-equipement/add-equipement.component";




const routes: Routes = [
  {
    path: '',
    component: RessourcesComponent},
  {
    path: 'ajoutRessource',
    component: AddRessourceComponent
  } ,{
    path: 'ajoutEquipement',
    component: AddEquipementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
