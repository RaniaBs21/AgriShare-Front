// src/app/ajouter-recolte/ajouter-recolte.component.ts

import { Component } from '@angular/core';
import {RecolteService} from "../../../Services/recolte.service";
import {recolte} from "../../../models/recolte.model";
import {Router} from "@angular/router";
declare var bootstrap: any;

@Component({
  selector: 'app-ajouter-recolte',
  templateUrl: './ajouter-recolte.component.html',
})
export class AjouterRecolteComponent {
  recolte: recolte = {
    id: '',
    typeCulture: '',
    quantite: 0,
    saison: '',
    dateRecolte: new Date()
  };
  typeCultureOptions: string[] = [];

  constructor(private recolteService: RecolteService , private router: Router) {}


  ngOnInit(): void {
    this.recolteService.getTypesCulture().subscribe(
      (data: string[]) => {
        this.typeCultureOptions = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des types de culture', error);
      }
    );
  }
  ajouterRecolte() {
    const confirmation = confirm('Êtes-vous sûr de vouloir ajouter cette récolte ?');
    if (confirmation) {
      this.recolteService.ajouterRecolte(this.recolte).subscribe(() => {
        alert('Récolte ajoutée avec succès !');
        this.router.navigate(['/recoltes']); // Redirection vers la liste des récoltes
      });
    }
  }

}
