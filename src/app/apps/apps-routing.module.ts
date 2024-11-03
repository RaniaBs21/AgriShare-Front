import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component';
import { AboutComponent } from './about/about.component';
import { ProjetComponent } from './agrishare/projet/Components/projet/projet.component';
import { RecoltesComponent } from './agrishare/recoltes/Components/recoltes/recoltes.component';
import { FormationComponent } from './agrishare/formation/Components/formation/formation.component';
import { RessourcesComponent } from './agrishare/ressources/Components/ressources/ressources.component';
import { PartenariatComponent } from './agrishare/partenariat/Components/partenariat/partenariat.component';
import { ReclamationComponent } from './agrishare/reclamation/Components/relamation/reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: AboutComponent },
      { path: 'project', component: ProjetComponent },
      { path: 'recoltes', loadChildren: () => import('./agrishare/recoltes/recoltes.module').then(m => m.RecoltesModule) },
      { path: 'formation', component: FormationComponent },
      { path: 'ressources', component: RessourcesComponent },
      { path: 'partenariat', component: PartenariatComponent },
      { path: 'reclamation', component: ReclamationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
