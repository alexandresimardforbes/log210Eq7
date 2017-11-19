import {Adresse} from './adresse'
import {Telephone} from './telephone';

export class OrganismeReferent {
    public id: string = '';    
    public nom_organisme_ref: string = '';
    public telephone: string = '';
    public telecopie: string = '';
    public courriel: string = '';
    public site_web: string = '';
    public disable: boolean = false;
    public no_civique: string = '';
    public rue: string = '';
    public ville: string = '';
    public province: string = '';
    public etat: string = '';
    public code_postal: string = '';

}
