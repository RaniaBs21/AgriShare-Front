export class Partenariat {
  id?: number;  // The id is optional, as it may not be present when creating a new partenariat
  email: string;
  nom: string;
  prenom: string;
  numeroTelephone: string;
  image?: string | ArrayBuffer;  // The image can either be a Base64 string or an ArrayBuffer (binary data)

  // You can add a constructor if you need to easily instantiate this class
  constructor(
    email: string,
    nom: string,
    prenom: string,
    numeroTelephone: string,
    image?: string | ArrayBuffer // Optional image parameter
  ) {
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.numeroTelephone = numeroTelephone;
    this.image = image;
  }
}
