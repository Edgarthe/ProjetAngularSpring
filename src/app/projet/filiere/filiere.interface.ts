import { Module} from"../module/module.interface";
import { Personne } from "../personne/personne.interface";

export interface Filiere{
    id?: number;
    libelle: string;
    modules: Module[];
    stagiaire: Personne[];
}