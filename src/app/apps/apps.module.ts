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
import {
  AddRessourceComponent
} from "./agrishare/ressources/Components/ressources/add-ressource/add-ressource.component";
import {RessourcesComponent} from "./agrishare/ressources/Components/ressources/ressources.component";
import {BrowserModule} from "@angular/platform-browser";
import {BannerContentComponent} from "./shared/banner-content/banner-content.component";
import {CustomModalComponent} from "./agrishare/ressources/Components/ressources/custom-modal/custom-modal.component";
import {UpdateEquipementComponent
} from "./agrishare/ressources/Components/ressources/update-equipement/update-equipement.component";

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
    RessourcesComponent,
    AddRessourceComponent,
    CustomModalComponent,
    UpdateEquipementComponent,
    BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceblogService],

})
export class AppsModule {}
