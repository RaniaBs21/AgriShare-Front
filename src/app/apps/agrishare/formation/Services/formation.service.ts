import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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



}
