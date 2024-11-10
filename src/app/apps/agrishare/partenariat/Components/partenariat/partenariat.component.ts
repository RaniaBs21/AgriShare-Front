import {Component, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {CommonModule} from "@angular/common";
import {Partenariat} from "../../Models/Partenariat";
import {PartenariatService} from "../../Services/partenariat.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-partenariat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partenariat.component.html',
  styleUrl: './partenariat.component.css'
})
export class PartenariatComponent implements OnInit  {
  partenariats: Partenariat[] = []; // Tableau de partenariats
  loading: boolean = false; // Variable pour indiquer si les données sont en cours de chargement

  constructor(private partenariatService: PartenariatService) {}

  ngOnInit(): void {
    this.getAllPartenariats(); // Appeler la méthode pour récupérer les partenariats au démarrage
  }

  // Méthode pour récupérer tous les partenariats
  private getAllPartenariats(): void {
    this.loading = true; // Activer le chargement pendant la récupération des données
    this.partenariatService.getAllPartenariats().subscribe(
      (response: Partenariat[]) => {
        this.partenariats = response; // Assignation des partenariats à la variable
        this.loading = false; // Désactivation du chargement après récupération
      },
      (error: HttpErrorResponse) => {
        alert('Erreur lors de la récupération des partenariats: ' + error.message);
        this.loading = false; // Désactivation du chargement en cas d'erreur
      }
    );
  }
}
