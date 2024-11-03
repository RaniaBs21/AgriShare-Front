import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {FullComponent} from "./layout/full/full.component";
import {RecoltesComponent} from "./agrishare/recoltes/Components/recoltes/recoltes.component";
import {FormationComponent} from "./agrishare/formation/Components/formation/formation.component";
import {RessourcesComponent} from "./agrishare/ressources/Components/ressources/ressources.component";
import {PartenariatComponent} from "./agrishare/partenariat/Components/partenariat/partenariat.component";
import {ReclamationComponent} from "./agrishare/reclamation/Components/relamation/reclamation.component";
import {ProjetComponent} from "./agrishare/projets/Components/projet/projet.component";






const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [


      { path: '',
        component: AboutComponent
      },
      { path: 'projets',
        component: ProjetComponent
      },
      { path: 'recoltes',
        component: RecoltesComponent
      },
      { path: 'formation',
        component: FormationComponent
      },
      { path: 'ressources',
        component: RessourcesComponent
      },
      { path: 'partenariat',
        component: PartenariatComponent
      },
      { path: 'reclamation',
        component: ReclamationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
