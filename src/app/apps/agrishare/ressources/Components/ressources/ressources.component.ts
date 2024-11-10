import {Component, Input, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {RessourcesService} from "../../Services/ressources.service";
import {EquipmentModel} from "../../Model/EquipementModel";
import {RessourceModel} from "../../Model/RessourceModel";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
import {NbDialogService} from "@nebular/theme";
import {UpdateEquipementComponent} from "./update-equipement/update-equipement.component";

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrl: './ressources.component.css'
})
export class RessourcesComponent implements OnInit{

  constructor(public service:ServiceblogService,
              private resourceService: RessourcesService,private router: Router) {

  }
  equipments! : EquipmentModel[];
  resources!: RessourceModel[];
  showIcons = false;
  toggleIcons() {
    this.showIcons = !this.showIcons;
  }
  ngOnInit(): void {
    this.loadEquipments();
    this.loadResources();
  }
  onAddEquipment() {
    this.router.navigate(['ressources/ajoutEquipement']);
  }
  onAddRessource() {
    this.router.navigate(['ressources/ajoutRessource']);
  }





  loadEquipments() {
    this.resourceService.getEquipments().subscribe((data) => {
      this.equipments = data;
    });
  }
  loadResources() {
    this.resourceService.getRessources().subscribe((data) => {
      console.log(data); // Ajoutez cette ligne pour voir les données dans la console
      this.resources = data;
    });
  }

  deleteEquipment(id: string | undefined): void {
    if (!id) {
      console.error("L'ID de la ressource est indéfini.");
      return;
    }
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet équipement ?");

    if (confirmation) {
      // Si l'utilisateur confirme, procéder à la suppression
      this.resourceService.deleteEquipement(id).subscribe(() => {
        this.loadEquipments(); // Recharger la liste des équipements après suppression
        console.log(`Équipement avec l'ID ${id} supprimé.`);
      }, error => {
        console.error("Erreur lors de la suppression de l'équipement : ", error);
      });
    } else {
      console.log("Suppression annulée.");
    }
  }
 deleteRessource(id: string | undefined): void {
    if (!id) {
      console.error("L'ID de la ressource est indéfini.");
      return;
    }
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette ressource ?");

    if (confirmation) {
      // Si l'utilisateur confirme, procéder à la suppression
      this.resourceService.deleteRessources(id).subscribe(() => {
        this.loadResources(); // Recharger la liste des équipements après suppression
        console.log(`Ressource avec l'ID ${id} supprimé.`);
      }, error => {
        console.error("Erreur lors de la suppression de ressource : ", error);
      });
    } else {
      console.log("Suppression annulée.");
    }
  }



}
