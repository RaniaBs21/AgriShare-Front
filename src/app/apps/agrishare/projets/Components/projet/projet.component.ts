import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {ProjetService} from "../../Services/projet.service";
import {ProjetModel} from "../../Models/ProjetModel";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
   projets: ProjetModel[]=[];
  constructor(public projetService:ProjetService,private router: Router) {

  }
  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(){
    this.projetService.getProjet().subscribe((data) => {
      this.projets = data;
      console.log(this.projets); // Vérifiez ce qui est chargé
    });
  }
  onDeleteProjet(id: string): void {
    this.projetService.deleteProjet(id).subscribe(
      () => {
        // Supprimer le projet de la liste localement
        this.projets = this.projets.filter(projet => projet.id !== id);
      },
      (error) => {
        console.error('Error deleting project:', error);
      }
    );
  }

}
