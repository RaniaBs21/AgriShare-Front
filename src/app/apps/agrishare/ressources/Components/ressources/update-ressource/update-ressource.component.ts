import {Component, OnInit} from '@angular/core';
import {RessourceModel, TypeRessource, Unite} from "../../../Models/RessourceModel";
import {ActivatedRoute, Router} from "@angular/router";
import {RessourcesService} from "../../../Services/ressources.service";

@Component({
  selector: 'app-update-ressource',
  templateUrl: './update-ressource.component.html',
  styleUrls: ['./update-ressource.component.css']
})
export class UpdateRessourceComponent implements OnInit {
  ressource: RessourceModel = new RessourceModel();
  typeOptions = Object.values(TypeRessource);
  uniteOptions = Object.values(Unite);

  constructor(
    private route: ActivatedRoute,
    private ressourceService: RessourcesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getRessourceById(id);
    }
  }

  getRessourceById(id: string): void {
    this.ressourceService.getRessourceById(id).subscribe(
      (data: RessourceModel) => {
        this.ressource = data;
      },
      (error) => {
        console.error('Error fetching the resource', error);
      }
    );
  }

  updateRessource(): void {
    if (this.ressource.id) {
      this.ressourceService.updateRessource(this.ressource.id, this.ressource).subscribe(
        (data) => {
          console.log('Resource updated successfully', data);
          this.router.navigate(['/ressources']);
        },
        (error) => {
          console.error('Error while updating the resource', error);
        }
      );
    } else {
      console.error('Resource ID is missing');
    }
  }
}
