import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartenariatComponent} from "./Components/partenariat/partenariat.component";




const routes: Routes = [
  {
    path: '',
    component: PartenariatComponent,
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
export class PartenariatRoutingModule { }
