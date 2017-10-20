import {Telephone} from './telephone';

export class Referent {
    public id: string = '';
    public nom: string = '';
    public prenom: string = '';
    public titre: string = '';
    public telephones: Telephone = new Telephone();
    public fax: string = '';
    public courriel: string = '';
    public rapport: TypeRapport = TypeRapport.courriel;
}

export enum TypeRapport {
    fax,
    courriel,
    papier
}