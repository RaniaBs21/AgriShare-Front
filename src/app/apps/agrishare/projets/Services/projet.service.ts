import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjetModel} from "../Models/ProjetModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  readonly API_URL = 'http://localhost:8093';

  constructor(private httpClient: HttpClient,) { }

  getProjet(): Observable<ProjetModel[]> {
    return this.httpClient.get<ProjetModel[]>(`${this.API_URL}/projet/all`);
  }

}
