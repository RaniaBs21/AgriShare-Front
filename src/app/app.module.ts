import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// noinspection TypeScriptCheckImport
import { NbDialogModule } from '@nebular/theme';
import {AppsRoutingModule} from "./apps/apps-routing.module";
//import {ProjetComponent} from "./apps/agrishare/projet/Components/projet/projet.component";
import {RecoltesComponent} from "./apps/agrishare/recoltes/Components/recoltes/recoltes.component";
import {FormationComponent} from "./apps/agrishare/formation/Components/formation/formation.component";
import {RessourcesComponent} from "./apps/agrishare/ressources/Components/ressources/ressources.component";
import {PartenariatComponent} from "./apps/agrishare/partenariat/Components/partenariat/partenariat.component";
import {ReclamationComponent} from "./apps/agrishare/reclamation/Components/relamation/reclamation.component";
import {BannerContentComponent} from "./apps/shared/banner-content/banner-content.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppsRoutingModule,
   // ProjetComponent,
    RecoltesComponent,
    FormationComponent,
    RessourcesComponent,
    PartenariatComponent,
    ReclamationComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
