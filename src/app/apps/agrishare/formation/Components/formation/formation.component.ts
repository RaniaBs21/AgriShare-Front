import { Router } from "@angular/router";
import {ServiceblogService} from "../../../../blog/blog-service.service";
import { FormationService } from '../../Services/formation.service';
import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent  implements OnInit  {
  formations: any[] = [];
  formation: any | null = null;
  
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

}
