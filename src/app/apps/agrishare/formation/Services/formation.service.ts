import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  private url: string  = 'http://localhost:8082/formations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<any> {
    return this.http.get(this.url);
}

addFormation(formation: Formation): Observable<Formation> {
  return this.http.post<Formation>(this.url, formation, this.httpOptions);
}

  // Méthode pour supprimer une formation
  deleteFormation(id: number): Observable<string> {
    return this.http.delete<string>(`${this.url}/${id}`, { responseType: 'text' as 'json' }).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression de la formation', error);
        throw error;
      })
    );
  }

  updateFormation(id: number, formation: Formation): Observable<string> {
    return this.http.put<string>(`${this.url}/${id}`, formation, {
      headers: this.httpOptions.headers,
      responseType: 'text' as 'json'
    });
  }
  
  

  

}
