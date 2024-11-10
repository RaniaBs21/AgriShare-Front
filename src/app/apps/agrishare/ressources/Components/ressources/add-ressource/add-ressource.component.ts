import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RessourceModel, TypeRessource, Unite} from "../../../Model/RessourceModel";
import {RessourcesService} from "../../../Services/ressources.service";
import {Router} from "@angular/router";
import {EquipmentModel} from "../../../Model/EquipementModel";

@Component({
  selector: 'app-add-ressource',
  templateUrl: './add-ressource.component.html',
  styleUrls: ['./add-ressource.component.css']
})
export class AddRessourceComponent  {
  ressource: RessourceModel = {};
  typeOptions = Object.values(TypeRessource);
  uniteOptions = Object.values(Unite);
  constructor(private ressourceService: RessourcesService, private router: Router) {
  }

  ajouterRessource() {
    const confirmation = confirm('Êtes-vous sûr de vouloir ajouter cette ressource ?');
    if (confirmation) {
      this.ressourceService.addRessource(this.ressource).subscribe(() => {
        alert('Ressource ajoutée avec succès !');
        this.router.navigateByUrl("/ressources");
      });
    }
  }
}
