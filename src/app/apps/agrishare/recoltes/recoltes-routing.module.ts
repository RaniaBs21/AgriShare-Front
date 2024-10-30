import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecoltesComponent} from "./Components/recoltes/recoltes.component";




const routes: Routes = [
  {
    path: '',
    component: RecoltesComponent,
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
export class RecoltesRoutingModule { }
