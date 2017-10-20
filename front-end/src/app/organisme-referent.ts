import {Adresse} from './adresse'
import {Telephone} from './telephone';

export class OrganismeReferent {
    public id: string = '';
    public nom: string = '';
    public adresse: Adresse = new Adresse();
    public telephones: Telephone = new Telephone();
    public courriel: string = '';
    public siteWeb: string = '';
}
