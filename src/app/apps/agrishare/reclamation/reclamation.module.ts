import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReclamationRoutingModule} from "./reclamation-routing.module";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class ReclamationModule {}
