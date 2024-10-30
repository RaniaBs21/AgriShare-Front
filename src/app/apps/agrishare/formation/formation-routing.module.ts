import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationComponent} from "./Components/formation/formation.component";




const routes: Routes = [
  {
    path: '',
    component: FormationComponent,
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
export class FormationRoutingModule { }
