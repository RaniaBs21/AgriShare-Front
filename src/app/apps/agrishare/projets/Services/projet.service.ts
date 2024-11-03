import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjetModel} from "../Models/ProjetModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  readonly API_URL = 'http://localhost:8093';

  constructor(private httpClient: HttpClient) { }

  addProjet(projet: ProjetModel): Observable<ProjetModel[]> {
    return this.httpClient.post<ProjetModel[]>(`${this.API_URL}/projet/add`, projet);
  }
  getProjet(): Observable<ProjetModel[]> {
    return this.httpClient.get<ProjetModel[]>(`${this.API_URL}/projet/all`);
  }
  getProjetById(id: string): Observable<ProjetModel> {
    const url = `${this.API_URL}/projet/${id}`;
    return this.httpClient.get<ProjetModel>(url);
  }
  updateProjet ( id: string, projet: ProjetModel): Observable<ProjetModel> {
    const url = `${this.API_URL}/projet/update/${id}`;
    return this.httpClient.put<ProjetModel>( url, projet );
  }
  deleteProjet(id: string) {
    return this.httpClient.delete<void>(`${this.API_URL}/projet/delete/${id}`);
  }
}
