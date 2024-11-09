import { NgModule } from '@angular/core';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PartenariatRoutingModule} from "./partenariat-routing.module";
import { PartenariatComponent } from './Components/partenariat/partenariat.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PartenariatComponent,
  ],
  imports: [
    CommonModule,
    PartenariatRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
})
export class PartenariatModule {}
