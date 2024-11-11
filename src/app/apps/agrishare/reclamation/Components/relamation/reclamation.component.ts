import {Component, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {CommonModule} from "@angular/common";
import {NavigationEnd, Router, RouterModule} from "@angular/router";
import {Reclamation, ReclamationService} from "../../Services/reclamation.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-reclamation',
  standalone: true,
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
  imports: [
    CommonModule,
    RouterModule  // Ajoutez RouterModule ici
  ],

})
export class ReclamationComponent implements OnInit {

  // Liste des réclamations
  reclamations: Reclamation[] = [];

  // Réclamation à ajouter
  // newReclamation: Reclamation = {
  //   idReclamation: 0,
  //   description: '',
  //   dateSoumission: '',
  //   idMembre: 1 // idMembre statique
  // };

  // Variable pour afficher/masquer le formulaire
  // isFormVisible: boolean = false;

  constructor(
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    // Surveiller les événements de navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('URL actuelle:', event.url);
    });

  }

  ngOnInit(): void {
    this.getAllReclamations(); // Appeler la méthode pour récupérer les réclamations
    console.log('Route actuelle:', this.router.url);

  }

  // Méthode pour obtenir toutes les réclamations
  getAllReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe({
      next: (reclamations) => {
        console.log('Réclamations récupérées:', reclamations); // Ajoutez un log pour vérifier les données
        this.reclamations = reclamations;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des réclamations', err);
      }
    });
  }


  navigateToAddReclamation() {
    console.log('Tentative de navigation vers addReclamation');
    this.router.navigate(['addReclamation'])
      .then(() => console.log('Navigation réussie vers /addReclamation'))
      .catch(err => console.error('Erreur de navigation:', err));
  }



  // Méthode pour supprimer une réclamation
  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe({
      next: () => {
        this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation !== id); // Filtrer la réclamation supprimée
        console.log('Réclamation supprimée avec succès');
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de la réclamation', err);
      }
    });
  }

  // Méthode pour récupérer une réclamation par ID
  getReclamationById(id: number): void {
    this.reclamationService.getReclamationById(id).subscribe({
      next: (reclamation) => {
        console.log('Réclamation trouvée', reclamation);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de la réclamation', err);
      }
    });
  }
}
