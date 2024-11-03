import {Component, OnInit} from '@angular/core';
import {ServiceblogService} from "../../../../blog/blog-service.service";
import {recolte} from "../../models/recolte.model";
import {RecolteService} from "../../Services/recolte.service";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";
declare var bootstrap: any;

@Component({
  selector: 'app-recoltes',
  templateUrl: './recoltes.component.html',
  styleUrls: ['./recoltes.component.css']
})
export class RecoltesComponent implements OnInit{

  recoltes: recolte[] = [];

  constructor(private recolteService: RecolteService ,private router: Router) { }

  ngOnInit(): void {
    this.getRecoltes();
  }

  getRecoltes(): void {
    this.recolteService.listerRecoltes().subscribe(
      (data: recolte[]) => {
        this.recoltes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des recoltes', error);
      }
    );
  }


  naviguerVersAjoutRecolte() {
    this.router.navigate(['recoltes/ajoutRecolte']);
  }
}
