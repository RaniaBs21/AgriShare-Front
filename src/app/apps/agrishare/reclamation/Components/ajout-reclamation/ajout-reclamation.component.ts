import { Component } from '@angular/core';
import { ReclamationService, Reclamation } from 'src/app/apps/agrishare/reclamation/Services/reclamation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajout-reclamation',
  standalone: true,
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css'],
  imports: [FormsModule, CommonModule]
})
export class AjoutReclamationComponent {
  newReclamation: Reclamation = {
    idReclamation: 0,
    description: '',
    dateSoumission: new Date().toISOString().split('T')[0], // Format YYYY-MM-DD
    idMembre: 1
  };

  isSubmitting = false;
  showSuccess = false;
  errorMessage: string | null = null;

  constructor(
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  addReclamation(): void {
    if (!this.newReclamation.description) {
      this.errorMessage = "La description de la réclamation est obligatoire.";
      return;
    }

    this.isSubmitting = true;
    this.reclamationService.addReclamation(this.newReclamation).subscribe({
      next: (response) => {
        console.log('Réclamation ajoutée avec succès', response);
        this.showSuccess = true;
        this.isSubmitting = false;
        this.router.navigate(['/reclamation']);
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout de la réclamation", error);
        this.errorMessage = error.error?.message || "Une erreur est survenue lors de l'ajout de la réclamation.";
        this.isSubmitting = false;
      }
    });
  }
}