import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamationComponent} from "./Components/relamation/reclamation.component";




const routes: Routes = [
  {
    path: '',
    component: ReclamationComponent,
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
export class ReclamationRoutingModule { }
