
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RessourcesComponent} from "./Components/ressources/ressources.component";
import {AddRessourceComponent} from "./Components/ressources/add-ressource/add-ressource.component";
import {AddEquipementComponent} from "./Components/ressources/add-equipement/add-equipement.component";
import {UpdateEquipementComponent} from "./Components/ressources/update-equipement/update-equipement.component";
import {UpdateRessourceComponent} from "./Components/ressources/update-ressource/update-ressource.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";




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
  } ,{
    path: 'updateEquipement/:id',
    component: UpdateEquipementComponent
  } ,{
    path: 'updateRessource/:id',
    component: UpdateRessourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,BrowserModule],
  exports: [RouterModule]

})
export class RessourcesRoutingModule { }
