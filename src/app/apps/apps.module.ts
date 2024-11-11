import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ProjetComponent} from "./agrishare/projets/Components/projet/projet.component";
import {BrowserModule} from "@angular/platform-browser";
import {RessourcesComponent} from "./agrishare/ressources/Components/ressources/ressources.component";
import {
  AddRessourceComponent
} from "./agrishare/ressources/Components/ressources/add-ressource/add-ressource.component";
import {
  UpdateEquipementComponent
} from "./agrishare/ressources/Components/ressources/update-equipement/update-equipement.component";
import {
  UpdateRessourceComponent
} from "./agrishare/ressources/Components/ressources/update-ressource/update-ressource.component";
@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    BannerNavigationComponent, // Assurez-vous que cette ligne est bien présente
    FooterComponent,
    ProjetComponent,
    RessourcesComponent,
    AddRessourceComponent,
    UpdateEquipementComponent,
    UpdateRessourceComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers: [],
})
export class AppsModule {}
