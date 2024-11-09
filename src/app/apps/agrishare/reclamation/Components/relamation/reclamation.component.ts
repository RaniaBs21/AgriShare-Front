import { Component, OnInit } from '@angular/core';
import { ReclamationService, Reclamation } from "src/app/apps/agrishare/reclamation/Services/reclamation.service";  // Importez le service
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reclamation',
  standalone: true,
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
  imports: [CommonModule],
  
})
export class ReclamationComponent implements OnInit {

  // Liste des réclamations
  reclamations: Reclamation[] = [];

  // Réclamation à ajouter
  newReclamation: Reclamation = {
    idReclamation: 0,
    description: '',
    dateSoumission: '',
    idMembre: 1 // idMembre statique
  };

  // Variable pour afficher/masquer le formulaire
  isFormVisible: boolean = false;

  constructor(
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllReclamations(); // Appeler la méthode pour récupérer les réclamations
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



   // Méthode pour ajouter une réclamation
   addReclamation(): void {
    this.reclamationService.addReclamation(this.newReclamation).subscribe({
      next: (newReclamation) => {
        this.reclamations.push(newReclamation);
        this.newReclamation = { idReclamation: 0, description: '', dateSoumission: '', idMembre: 1 }; // Réinitialiser
        this.isFormVisible = false;  // Masquer le formulaire après soumission
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réclamation', err);
      }
    });
  }

   // Fonction pour afficher ou masquer le formulaire
   toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
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
