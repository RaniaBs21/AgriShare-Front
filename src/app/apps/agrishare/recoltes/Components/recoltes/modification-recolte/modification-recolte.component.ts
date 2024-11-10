import {Component, Input, OnInit} from '@angular/core';
import {recolte} from "../../../models/recolte.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RecolteService} from "../../../Services/recolte.service";

@Component({
  selector: 'app-modification-recolte',
  templateUrl: './modification-recolte.component.html',
  styleUrl: './modification-recolte.component.css'
})
export class ModificationRecolteComponent implements OnInit {
  @Input() typeCulture: string = '';
  @Input() saison: string = '';
  @Input() quantite: number = 0;
  @Input() dateRecolte: Date = new Date();
  @Input() recolte: recolte = new recolte();

  typeCultureOptions: string[] = [];



  constructor(
    private route: ActivatedRoute,
    private recolteService: RecolteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recolteId = this.route.snapshot.paramMap.get('id');
    if (recolteId) {
      this.recolteService.obtenirRecolteParId(recolteId).subscribe((data) => {
        this.recolte = data;
      });
    }

    this.recolteService.getTypesCulture().subscribe((data) => {
      this.typeCultureOptions = data;

    });
  }


  onUpdate(): void {
    if (confirm('Êtes-vous sûr de vouloir modifier cette récolte ?')) {
      this.recolteService.modifierRecolte(this.recolte.id, this.recolte).subscribe(
        () => {
          alert('Récolte mise à jour avec succès');
          this.router.navigate(['/recoltes']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la récolte :', error);
          alert('Échec de la mise à jour de la récolte');
        }
      );
    }
  }
}
