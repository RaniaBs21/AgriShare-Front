import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjetComponent} from "./Components/projet/projet.component";




const routes: Routes = [
  {
    path: '',
    component: ProjetComponent,
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
export class ProjetRoutingModule { }
