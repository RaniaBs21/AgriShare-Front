import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Partenariat} from "../Models/Partenariat";

@Injectable({
  providedIn: 'root'
})
export class PartenariatService {

  readonly API_URL = 'http://localhost:8096/partenariat';

  constructor(private httpClient: HttpClient) { }


  // Ajouter un partenariat
  addPartenariat(data: FormData): Observable<Partenariat> {
    return this.httpClient.post<Partenariat>(this.API_URL, data);
  }

  // Récupérer tous les partenariats
  getAllPartenariats(): Observable<Partenariat[]> {
    return this.httpClient.get<Partenariat[]>(this.API_URL);
  }

  // Mettre à jour un partenariat
  updatePartenariat(id: number, data: FormData): Observable<Partenariat> {
    return this.httpClient.put<Partenariat>(`${this.API_URL}/${id}`, data);
  }

  // Supprimer un partenariat
  deletePartenariat(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  // Trouver un partenariat par ID ou email
  findPartenariatByIdOrEmail(id: number, email: string): Observable<Partenariat | null> {
    return this.httpClient.get<Partenariat>(`${this.API_URL}/${id}/${email}`);
  }
}
