import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RecoltesRoutingModule} from "./recoltes-routing.module";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RecoltesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class RecoltesModule {}
