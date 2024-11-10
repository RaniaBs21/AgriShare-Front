import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjetModel} from "../Models/ProjetModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  readonly API_URL = 'http://localhost:8096/projet';

  constructor(private httpClient: HttpClient,) { }

  ajouterProjet(projet: ProjetModel): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(`${this.API_URL}/add`, projet);
  }
  getProjet(): Observable<ProjetModel[]> {
    return this.httpClient.get<ProjetModel[]>(`${this.API_URL}/all`);
  }
  deleteProjet(id: string) {
    return this.httpClient.delete<void>(`${this.API_URL}/delete/${id}`);
  }
}
