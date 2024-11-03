import { Component } from '@angular/core';
import {ProjetModel} from "../../Models/ProjetModel";
import {ProjetService} from "../../Services/projet.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjetsComponent {
  projets: ProjetModel[] = [];

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(): void {
    this.projetService.getProjet().subscribe(
      (data) => {
        console.log('Projets récupérés:', data); // Ajoutez cette ligne
        this.projets = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des projets:', error);
      }
    );
  }

}
