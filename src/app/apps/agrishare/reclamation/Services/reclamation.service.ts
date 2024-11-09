import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définition de l'entité Reclamation
export interface Reclamation {
  idReclamation: number;
  description: string | null;
  dateSoumission: string | null;
  idMembre: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'http://localhost:8092/reclamation'; // URL de votre API backend (port du microservice réclamation)

  constructor(private http: HttpClient) {}

  // Obtenir toutes les réclamations
  getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.apiUrl}/getAllReclamation`);
  }

  // Obtenir une réclamation par son ID
  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/getReclamationById/${id}`);
  }

  // Ajouter une nouvelle réclamation avec idMembre statique
  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    // Assignation de idMembre à 1 (valeur statique)
    reclamation.idMembre = 1;

    // Appel à l'API backend pour ajouter la réclamation
    return this.http.post<Reclamation>(`${this.apiUrl}/addReclamation`, reclamation);
  }

  // Mettre à jour une réclamation
  updateReclamation(id: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.apiUrl}/updateReclamation/${id}`, reclamation);
  }

  // Supprimer une réclamation
  deleteReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteReclamation/${id}`);
  }


}
