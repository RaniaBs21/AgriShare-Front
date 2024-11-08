import { Router } from "@angular/router";
import {ServiceblogService} from "../../../../blog/blog-service.service";
import { FormationService } from '../../Services/formation.service';
import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
export class FormationComponent  implements OnInit  {
  formations: any[] = [];
  formation: any = {
    titre: '',
    description: '',
    date: '',
    type: '',
    categorie: ''
  };

  showForm = false;
  constructor(
  public service:ServiceblogService,
  private formationService: FormationService,
  private router: Router,
  ) {
    this.service.showEdit=false;
  }

  ngOnInit() {
    // Récupérer toutes les formations lors de l'initialisation du composant
    this.formationService.getAllFormations().subscribe(
      (data) => {
        console.log('Données récupérées :', data); // Afficher les données reçues
        if (Array.isArray(data)) {
          this.formations = data; // Assigner les formations récupérées si c'est un tableau
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
    // Logique pour participer à la formation, par exemple, une redirection ou une inscription
    console.log(`Participer à la formation avec l'ID: ${formationId}`);
    // Vous pouvez ici appeler un service pour gérer l'inscription à la formation
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
  ajouterFormation() {
    this.formationService.addFormation(this.formation).subscribe(
      (newFormation) => {
        this.formations.push(newFormation);
        this.showForm = false; // Cache le formulaire après l'ajout
        this.formation = {}; // Réinitialise le formulaire
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la formation', error);
      }
    ); 



  }



  

}
