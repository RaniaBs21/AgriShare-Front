import { Component, OnInit } from '@angular/core';
import { RecolteService } from "../../Services/recolte.service";
import { recolte } from "../../models/recolte.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recoltes',
  templateUrl: './recoltes.component.html',
  styleUrls: ['./recoltes.component.css']
})
export class RecoltesComponent implements OnInit {
  recoltes: recolte[] = [];
  filteredRecoltes: recolte[] = []; // Ajoutez cette ligne
  typesCulture: string[] = [];
  selectedTypeCulture: string = '';

  constructor(private recolteService: RecolteService, private router: Router) { }

  ngOnInit(): void {
    this.recolteService.listerRecoltes().subscribe(
      (recoltes: recolte[]) => {
        this.recoltes = recoltes;
        this.filteredRecoltes = recoltes; // Initialisation avec toutes les récoltes
      },
      error => {
        console.error('Erreur lors de la récupération des récoltes', error);
      }
    );
    this.getTypesCulture();  // Ajoutez cette ligne pour récupérer les types de culture
  }

  getTypesCulture(): void {
    this.recolteService.getTypesCulture().subscribe(
      (data: string[]) => {
        this.typesCulture = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des types de culture', error);
      }
    );
  }
  getRecoltes(): void {
    this.recolteService.listerRecoltes().subscribe(
      (data: recolte[]) => {
        console.log('Données récupérées:', data);
        this.recoltes = data;
        this.filteredRecoltes = [...data]; // Mettre à jour la liste filtrée
      },
      (error) => {
        console.error('Erreur lors de la récupération des recoltes', error);
      }
    );
  }


  onFilterChange(): void {
    console.log('selectedTypeCulture:', this.selectedTypeCulture); // Vérifiez la valeur sélectionnée
    if (this.selectedTypeCulture) {
      this.recolteService.listerRecoltesParTypeCulture(this.selectedTypeCulture).subscribe(
        (recoltes: recolte[]) => {
          console.log('Récoltes filtrées:', recoltes); // Affichez les récoltes filtrées
          this.filteredRecoltes = recoltes;
        },
        error => {
          console.error('Erreur de filtrage', error);
        }
      );
    } else {
      // Si aucun type de culture n'est sélectionné, afficher toutes les récoltes
      this.filteredRecoltes = this.recoltes;
    }
  }

  naviguerVersAjoutRecolte() {
    this.router.navigate(['recoltes/ajoutRecolte']);
  }
}
