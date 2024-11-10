import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', 
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) 
      },
      { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '**', redirectTo: '/apps' } // Redirection pour les chemins non définis
    ]
  },

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
