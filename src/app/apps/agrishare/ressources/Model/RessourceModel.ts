 export class RessourceModel {
    id?: string;
    nom?: string;
    type?: TypeRessource;
    quantite?: number; // assuming quantity is a numeric value
    unite?: Unite;
    disponibilite?:boolean;



 }
export enum TypeRessource {
     SEED = 'SEED',
    FERTILIZER = 'FERTILIZER',
    PESTICIDE = 'PESTICIDE',
    FEED = 'FEED',
    OTHER = 'OTHER',
}

export enum Unite {
    PIECE = 'PIECE',
    KG = 'KG',
    LITRE = 'LITRE',
    METRE = 'METRE'  // Add other units as needed
}
