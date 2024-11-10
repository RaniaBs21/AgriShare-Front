import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RessourcesRoutingModule} from "./ressources-routing.module";
import {AddRessourceComponent} from "./Components/ressources/add-ressource/add-ressource.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppsModule} from "../../apps.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RessourcesRoutingModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppsModule
  ],
  providers: [],
})
export class RessourcesModule {}
