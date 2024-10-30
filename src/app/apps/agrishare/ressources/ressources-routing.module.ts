import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RessourcesComponent} from "./Components/ressources/ressources.component";




const routes: Routes = [
  {
    path: '',
    component: RessourcesComponent,
    children: [

      /*{ path: '',
        component: BlogComponent
      },*/


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule { }
