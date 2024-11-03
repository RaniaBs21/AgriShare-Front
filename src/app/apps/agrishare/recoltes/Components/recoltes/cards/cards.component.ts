import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {recolte} from "../../../models/recolte.model";
import {RecolteService} from "../../../Services/recolte.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  recoltes: recolte[] = [];
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
        this.recoltes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des recoltes', error);
      }
    );

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
