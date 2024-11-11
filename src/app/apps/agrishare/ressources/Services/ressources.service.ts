import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RessourceModel} from "../Models/RessourceModel";
import {Observable} from "rxjs";
import {EquipmentModel} from "../Models/EquipmentModel";

@Injectable({
  providedIn: 'root'
})

export class RessourcesService {


  readonly API_URL = 'http://localhost:8096/ressources';
  constructor(private httpClient: HttpClient
  ) { }

  addRessource(ressource: RessourceModel): Observable<RessourceModel[]> {
    return this.httpClient.post<RessourceModel[]>(`${this.API_URL}/addRessource`, ressource);
  }
  getRessources(): Observable<RessourceModel[]> {
    return this.httpClient.get<RessourceModel[]>(`${this.API_URL}/getRessources`);
  }
  getRessourceById(id:string): Observable<RessourceModel> {
    return this.httpClient.get<RessourceModel>(`${this.API_URL}/getRessource/${id}`);
  }
  updateRessource ( id: string, ressouce: RessourceModel): Observable<RessourceModel> {
    const url = `${this.API_URL}/updateRessource/${id}`;
    return this.httpClient.put<RessourceModel>( url, ressouce );
  }
  deleteRessources(id: string) {
    return this.httpClient.delete<void>(`${this.API_URL}/deleteRessource/${id}`);
  }

  //Equipement
  addEquipment(equipement: EquipmentModel): Observable<EquipmentModel[]> {
    return this.httpClient.post<EquipmentModel[]>(`${this.API_URL}/addEquipements`, equipement);
  }
  getEquipments(): Observable<EquipmentModel[]> {
    return this.httpClient.get<EquipmentModel[]>(`${this.API_URL}/getEquipement`);
  }
  getEquipementById(id:string): Observable<EquipmentModel> {
    return this.httpClient.get<EquipmentModel>(`${this.API_URL}/getEquipement/${id}`);
  }
  updateEquipement ( id: string| undefined, equipement: EquipmentModel): Observable<EquipmentModel> {
    const url = `${this.API_URL}/updateEquipement/${id}`;
    return this.httpClient.put<EquipmentModel>( url, equipement );
  }
  deleteEquipement(id: string) {
    return this.httpClient.delete<void>(`${this.API_URL}/deleteEquipement/${id}`);
  }

}
