export class EquipmentModel {
  id?: string;
  nomEquipement?: string;
  type?: TypeEquipement;
  purchaseDate?: Date;


  constructor(id: string, nomEquipement: string, type: TypeEquipement, purchaseDate: Date) {
    this.id = id;
    this.nomEquipement = nomEquipement;
    this.type = type;
    this.purchaseDate = purchaseDate;
  }
}
export enum TypeEquipement {
  TRACTOR = 'TRACTOR',
  PLOW = 'PLOW',
  IRRIGATION_SYSTEM = 'IRRIGATION_SYSTEM,',
  FERTILIZER_SPREAD = 'FERTILIZER_SPREAD',
  HARVESTER = 'HARVESTER',
  SEEDER = 'SEEDER',
  GREENHOUSE = 'GREENHOUSE'


}
