import { Router } from "@angular/router";
import { ServiceblogService } from "../../../../blog/blog-service.service";
import { FormationService } from '../../Services/formation.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export enum TypeFormation {
  GUIDE = 'Guide',
  PRESENTIEL = 'Présentiel',
  WEBINAIRE = 'Webinaire'
}
export enum CategorieFormation {
  AGRICULTURE_BIO = 'Agriculture Bio',
  GESTION_COOPERATIVE = 'Gestion de Coopérative',
  MECANISATION = 'Mécanisation',
  IRRIGATION = 'Irrigation',
  COMMERCIALISATION = 'Commercialisation',
  INNOVATION = 'Innovation'
}

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: any[] = [];
  formation: any = {
    id: null, // Ajout de l'ID initialement à null
    titre: '',
    description: '',
    date: '',
    type: '',
    categorie: ''
  };
  typeOptions = Object.keys(TypeFormation);
  categorieOptions = Object.keys(CategorieFormation);

  showFormEdit = false;
  showForm = false;

  constructor(
    public service: ServiceblogService,
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.formationService.getAllFormations().subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.formations = data;
        } else {
          console.error('Les données récupérées ne sont pas un tableau');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des formations', error);
      }
    );
  }

  participerFormation(formationId: number) {
    console.log(`Participer à la formation avec l'ID: ${formationId}`);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  toggleFormEdit(formationId: number): void {
    const selectedFormation = this.formations.find(f => f.id === formationId);
    if (selectedFormation) {
      this.formation = { ...selectedFormation }; // Charger les données de la formation dans le formulaire
      this.showFormEdit = !this.showFormEdit; // Inverser l'état d'affichage
      this.showForm = false; // Assurer que le formulaire d'ajout est masqué
    }
  }

  ajouterFormation() {
    this.formationService.addFormation(this.formation).subscribe(
      (newFormation) => {
        this.formations.push(newFormation);
        this.showForm = false;
        this.formation = { id: null, titre: '', description: '', date: '', type: '', categorie: '' }; // Réinitialisation complète
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la formation', error);
      }
    );
  }

  loadFormationToEdit(formationId: number) {
    const formationToEdit = this.formations.find(f => f.id === formationId);
    if (formationToEdit) {
      this.formation = { ...formationToEdit };  // Copie les données de la formation
      this.showFormEdit = true;  // Affiche le formulaire d'édition
    }
  }

  modifierFormation() {
    if (this.formation.id) {
      this.formationService.updateFormation(this.formation.id, this.formation).subscribe(
        (response: string) => { // Modification pour recevoir une réponse de type string
          console.log(response); // Message de succès ou d'erreur renvoyé par le serveur
          const index = this.formations.findIndex(f => f.id === this.formation.id);
          if (index !== -1) {
            this.formations[index] = { ...this.formation }; // Mise à jour de la formation modifiée
          }
          this.showFormEdit = false;
        },
        (error) => {
          console.error('Erreur lors de la modification de la formation', error);
        }
      );
    }
  }

  deleteFormation(formationId: number): void {
    this.formationService.deleteFormation(formationId).subscribe(
      response => {
        this.formations = this.formations.filter(f => f.id !== formationId);
      },
      error => {
        console.error('Erreur lors de la suppression de la formation', error);
      }
    );
  }

  isFormValid(): boolean {
    return this.formation.titre && this.formation.description && this.formation.date && this.formation.type && this.formation.categorie;
  }

  cancelAjout(){
    this.showForm = false;
  }
  
}
