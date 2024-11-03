import { Component } from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {ProjetService} from "../../Services/projet.service";
import {ProjetModel} from "../../Models/ProjetModel";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {
   projets: ProjetModel[]=[];
  constructor(public projetService:ProjetService) {

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
}
