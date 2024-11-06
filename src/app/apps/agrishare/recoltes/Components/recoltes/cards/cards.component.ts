import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {recolte} from "../../../models/recolte.model";
import {RecolteService} from "../../../Services/recolte.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  @Input() filteredRecoltes: recolte[] = [];

  recoltes: recolte[] = [];
  typesCulture: string[] = [];
  selectedTypeCulture: string = '';
  showIcons: boolean = false;
  constructor(private recolteService: RecolteService) { }

  ngOnInit(): void {
    this.getRecoltes();
  }
  toggleIcons(): void {
    this.showIcons = !this.showIcons;
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

  supprimerRecolte(id: string | undefined): void {
    if (!id) {
      console.error("L'ID de la récolte est indéfini.");
      return;
    }
    if (confirm("Voulez-vous vraiment supprimer cette récolte ?")) {
      this.recolteService.supprimerRecolte(id).subscribe(
        () => {
          alert('Récolte supprimée avec succès !');
          this.getRecoltes(); // Rafraîchir la liste
        },
        (error) => {
          console.error('Erreur lors de la suppression de la récolte', error);
        }
      );
    }
  }


  // relayOn = [
  //   {
  //     icon: 'sl-icon-target text-info-gradiant',
  //     field: 'Retargeting Market',
  //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
  //   },
  //   {
  //     icon: 'sl-icon-mouse text-info-gradiant',
  //     field: 'Fruitful Results',
  //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
  //   },
  //   {
  //     icon: 'sl-icon-earphones-alt text-info-gradiant',
  //     field: 'Instant Solutions',
  //     fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
  //   }
  // ];
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}
