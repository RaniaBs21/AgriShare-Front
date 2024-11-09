import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partenariat } from '../Model/Partenariat';

@Injectable({
  providedIn: 'root'
})
export class PartenariatService {

  private apiUrl = `http://localhost:8091/partenariat`; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Ajouter un partenariat
  addPartenariat(data: FormData): Observable<Partenariat> {
    return this.http.post<Partenariat>(this.apiUrl, data);
  }

  // Récupérer tous les partenariats
  getAllPartenariats(): Observable<Partenariat[]> {
    return this.http.get<Partenariat[]>(this.apiUrl);
  }

  // Mettre à jour un partenariat
  updatePartenariat(id: number, data: FormData): Observable<Partenariat> {
    return this.http.put<Partenariat>(`${this.apiUrl}/${id}`, data);
  }

  // Supprimer un partenariat
  deletePartenariat(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Trouver un partenariat par ID ou email
  findPartenariatByIdOrEmail(id: number, email: string): Observable<Partenariat | null> {
    return this.http.get<Partenariat>(`${this.apiUrl}/${id}/${email}`);
  }
}
