import {Telephone} from './telephone';

export class Referent {
    public id: number = -1;
    public first_name: string = "";
    public last_name: string = "";
    public title: string = "";
    public phone_b: string = "";
    public phone_c: string = "";
    public fax: string = "";
    public email: string = "";
    public preference_fax: boolean  = false;
    public preference_courriel: boolean  = false;
    public preference_papier: boolean  = true;
    public disable: boolean = false;
    public organisme_referent_id: string  = "";

}

export enum TypeRapport {
    fax,
    courriel,
    papier
}