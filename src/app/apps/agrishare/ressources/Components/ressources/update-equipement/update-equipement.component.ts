import { Component, OnInit } from '@angular/core';
import { RessourcesService } from '../../../Services/ressources.service';
import { RessourceModel } from '../../../Model/RessourceModel';
import {EquipmentModel, TypeEquipement} from "../../../Model/EquipementModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-update-equipement',
    templateUrl: './update-equipement.component.html',
    styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent {
    equipment: EquipmentModel = new EquipmentModel('', '', TypeEquipement.TRACTOR, new Date());
    typeOptions = Object.values(TypeEquipement);

    constructor(
        private route: ActivatedRoute,
        private equipmentService: RessourcesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.getEquipmentById(id);
        }
    }

    getEquipmentById(id: string): void {
        this.equipmentService.getEquipementById(id).subscribe(
            (data: EquipmentModel) => {
                this.equipment = data;
            },
            (error) => {
                console.error('Error fetching the equipment', error);
            }
        );
    }

    updateEquipment(): void {
        if (this.equipment.id) {
            this.equipmentService.updateEquipement(this.equipment.id, this.equipment).subscribe(
                (data) => {
                    console.log('Equipment updated successfully', data);
                    this.router.navigate(['/equipments']);
                },
                (error) => {
                    console.error('Error while updating the equipment', error);
                }
            );
        } else {
            console.error('Equipment ID is missing');
        }
    }
}

