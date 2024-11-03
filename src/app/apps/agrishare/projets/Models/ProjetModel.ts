export enum Statut {
  EN_COURS = 'EN_COURS',
  TERMINE = 'TERMINE',
}

export class ProjetModel {
  id?: string;
  nom?: string;
  description?: string;
  dateDebut?: Date;  // Utilisez Date pour le type correspondant à LocalDate
  dateFin?: Date;    // Idem pour la date de fin
  etapes?: string[];  // Liste des étapes du projet
  statut?: Statut;    // Statut du projet
  cooperativeId?: string;


}
