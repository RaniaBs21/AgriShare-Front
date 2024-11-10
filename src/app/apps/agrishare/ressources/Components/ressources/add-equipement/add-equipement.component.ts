import { Component } from '@angular/core';
import {RessourcesService} from "../../../Services/ressources.service";
import {Router} from "@angular/router";
import {RessourceModel} from "../../../Model/RessourceModel";
import {EquipmentModel, TypeEquipement} from "../../../Model/EquipementModel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-equipement',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './add-equipement.component.html',
  styleUrl: './add-equipement.component.css'
})
export class AddEquipementComponent {
  equipement: EquipmentModel = {};
  typeOptions = Object.values(TypeEquipement);

  constructor(private ressourceService: RessourcesService, private router: Router) {
  }

  ajouterEquipement() {
    const confirmation = confirm('Êtes-vous sûr de vouloir ajouter cet equipement ?');
    if (confirmation) {
      this.ressourceService.addEquipment(this.equipement).subscribe(() => {
        alert('Equipement ajoutée avec succès !');
        this.router.navigateByUrl("/ressources");
      });
    }
  }
}
