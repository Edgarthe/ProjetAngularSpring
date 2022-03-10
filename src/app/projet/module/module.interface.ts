import { Personne } from "../personne/personne.interface";

export interface Module {
    id?: number;
    libelle: string;
    dateDebut: string;
    dateFin: string;
    formateur:Personne; 
  }