import {Component, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {RessourcesService} from "../../Services/ressources.service";
import {Router} from "@angular/router";
import {EquipmentModel} from "../../Models/EquipmentModel";
import {RessourceModel} from "../../Models/RessourceModel";

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrl: './ressources.component.css'
})
export class RessourcesComponent implements OnInit {

  constructor(public service: ServiceblogService,
              private resourceService: RessourcesService, private router: Router) {

  }

  equipments!: EquipmentModel[];
  resources!: RessourceModel[];
  showIcons = false;
  showModal: boolean = false;
  selectedRessource!: RessourceModel;

  toggleIcons() {
    this.showIcons = !this.showIcons;
  }

  openModal(ressource: RessourceModel): void {
    this.selectedRessource = {...ressource}; // Create a copy to avoid direct mutations
    this.showModal = true;
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

  UpdateEquipement(id: string | undefined) {
    this.router.navigate([`/ressources/updateEquipement/${id}`]);
  }

  updateRessource(id: string | undefined) {
    this.router.navigate([`/ressources/updateRessource/${id}`]);
  }

  loadEquipments() {
    this.resourceService.getEquipments().subscribe((data) => {
      console.log("Données reçues :", data); // Affiche les données dans la console
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


  //protected readonly UpdateRessourceComponent = UpdateRessourceComponent;
}
