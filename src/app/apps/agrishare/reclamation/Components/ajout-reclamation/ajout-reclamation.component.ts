import { Component } from '@angular/core';
import { ReclamationService, Reclamation } from 'src/app/apps/agrishare/reclamation/Services/reclamation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Ajoutez cet import

@Component({
  selector: 'app-ajout-reclamation',
  standalone: true,
  imports: [FormsModule],  // Ajoutez FormsModule ici
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent {
  newReclamation: Reclamation = {
    idReclamation: 0,
    description: '',
    dateSoumission: '',
    idMembre: 1
  };

  constructor(
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  addReclamation(): void {
    this.reclamationService.addReclamation(this.newReclamation).subscribe({
      next: (newReclamation) => {
        console.log('Réclamation ajoutée avec succès', newReclamation);
        this.router.navigate(['/reclamation']); // Modifié ici pour correspondre à votre route
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réclamation', err);
      }
    });
  }
}