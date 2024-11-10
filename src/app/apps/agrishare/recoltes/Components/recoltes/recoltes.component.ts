import {Component, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {recolte} from "../../Models/recolte.model";
import {RecoltesService} from "../../Services/recoltes.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CardsComponent} from "./cards/cards.component";

@Component({
  selector: 'app-recoltes',
  standalone: true,
  imports: [CommonModule, FormsModule, CardsComponent],
  templateUrl: './recoltes.component.html',
  styleUrl: './recoltes.component.css'
})
export class RecoltesComponent  implements OnInit {
  recoltes: recolte[] = [];
  filteredRecoltes: recolte[] = [];
  typesCulture: string[] = [];
  selectedTypeCulture: string = '';
  totalQuantite: number | null = null;

  constructor(private recolteService: RecoltesService, private router: Router) {
  }

  ngOnInit(): void {
    this.recolteService.listerRecoltes().subscribe(
      (recoltes: recolte[]) => {
        this.recoltes = recoltes;
        this.filteredRecoltes = recoltes;
      },
      error => {
        console.error('Erreur lors de la récupération des récoltes', error);
      }
    );
    this.getTypesCulture();
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
        this.filteredRecoltes = [...data];
      },
      (error) => {
        console.error('Erreur lors de la récupération des recoltes', error);
      }
    );
  }


  // onFilterChange(): void {
  //   console.log('selectedTypeCulture:', this.selectedTypeCulture); // Vérifiez la valeur sélectionnée
  //   if (this.selectedTypeCulture) {
  //     this.recolteService.listerRecoltesParTypeCulture(this.selectedTypeCulture).subscribe(
  //       (recoltes: recolte[]) => {
  //         console.log('Récoltes filtrées:', recoltes); // Affichez les récoltes filtrées
  //         this.filteredRecoltes = recoltes;
  //       },
  //       error => {
  //         console.error('Erreur de filtrage', error);
  //       }
  //     );
  //   } else {
  //     // Si aucun type de culture n'est sélectionné, afficher toutes les récoltes
  //     this.filteredRecoltes = this.recoltes;
  //   }
  // }

  onFilterChange(): void {
    console.log('selectedTypeCulture:', this.selectedTypeCulture);
    if (this.selectedTypeCulture) {
      this.recolteService.listerRecoltesParTypeCulture(this.selectedTypeCulture).subscribe(
        (recoltes: recolte[]) => {
          console.log('Récoltes filtrées:', recoltes);
          this.filteredRecoltes = recoltes;

          this.recolteService.obtenirQuantiteTotaleParTypeCulture(this.selectedTypeCulture).subscribe(
            (sum: number) => {
              this.totalQuantite = sum;
            },
            error => {
              console.error('Erreur lors de la récupération de la somme des quantités', error);
              this.totalQuantite = null;
            }
          );
        },
        error => {
          console.error('Erreur de filtrage', error);
          this.filteredRecoltes = [];
          this.totalQuantite = null;
        }
      );
    } else {
      this.filteredRecoltes = this.recoltes;
      this.totalQuantite = null;
    }
  }

  naviguerVersAjoutRecolte() {
    this.router.navigate(['recoltes/ajoutRecolte']);
  }


}
