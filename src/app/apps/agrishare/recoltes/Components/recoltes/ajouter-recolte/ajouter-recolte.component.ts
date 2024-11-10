import { Component } from '@angular/core';
import {recolte} from "../../../Models/recolte.model";
import {RecoltesService} from "../../../Services/recoltes.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ajouter-recolte',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private recolteService: RecoltesService , private router: Router) {}


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
