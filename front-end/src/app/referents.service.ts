import { Injectable } from '@angular/core';
import { Referent } from './referent';
import * as _ from 'lodash';

@Injectable()
export class ReferentsService {
  private referents: Array<Referent> = new Array();

  constructor() {
    let r = new Referent();
    r.nom = "Guy";
    r.id = "666"
    r.prenom = "Jean";
    r.titre = "Peteux de Cenne";
    r.courriel = "PetCenne@dansyeule.com";
    this.referents.push(r);
   }


  public getAll()
  {
    return this.referents;
  }

  public getById(id)
  {
    if (id === "-1") return new Referent();
    return this.referents.find((o) => o.id === id );
  }

  public create(r: Referent)
  {
    r.id = (Math.random()*1000000).toString();
    this.referents.push(_.cloneDeep(r));
  }

  public update(r: Referent)
  {
    this.referents[this.referents.findIndex(e => e.id == r.id)] = _.cloneDeep(r);
  }
}
