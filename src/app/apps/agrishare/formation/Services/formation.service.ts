import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { catchError } from 'rxjs/operators';

export interface Formation {
  id: number;
  titre: string;
  description: string;
  date: string;
  type: string;
  categorie: string;
}
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private API_URL = 'http://localhost:8096/formation';

   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
   };

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.API_URL, formation, this.httpOptions);
  }

  // Méthode pour supprimer une formation
  deleteFormation(id: number): Observable<string> {
    return this.http.delete<string>(`${this.API_URL}/${id}`, { responseType: 'text' as 'json' }).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression de la formation', error);
        throw error;
      })
    );
  }

  updateFormation(id: number, formation: Formation): Observable<string> {
    return this.http.put<string>(`${this.API_URL}/${id}`, formation, {
      headers: this.httpOptions.headers,
      responseType: 'text' as 'json'
    });
  }



}
