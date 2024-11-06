import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {recolte} from "../models/recolte.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecolteService {
  private apiUrl = 'http://localhost:8094/api/recoltes';

  constructor(private http: HttpClient) { }

  ajouterRecolte(recolte: recolte): Observable<recolte> {
    return this.http.post<recolte>(this.apiUrl, recolte);
  }

  modifierRecolte(id: string, recolte:recolte): Observable<recolte> {
    return this.http.put<recolte>(`${this.apiUrl}/${id}`, recolte);
  }

  supprimerRecolte(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTypesCulture(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/types-culture`);
  }
  listerRecoltesParTypeCulture(typeCulture: string): Observable<recolte[]> {
    return this.http.get<recolte[]>(`${this.apiUrl}/types-culture/${typeCulture}`);
  }

  listerRecoltesParCooperative(cooperativeId: string): Observable<recolte[]> {
    return this.http.get<recolte[]>(`${this.apiUrl}/cooperative/${cooperativeId}`);
  }

  listerRecoltes(): Observable<recolte[]> {
    return this.http.get<recolte[]>(`${this.apiUrl}/AllRecoltes`);
  }

  obtenirRecolteParId(id: string): Observable<recolte> {
    return this.http.get<recolte>(`${this.apiUrl}/${id}`);
  }


}
