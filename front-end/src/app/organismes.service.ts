import { Injectable } from '@angular/core';
import { OrganismeReferent } from './organisme-referent';
import * as _ from 'lodash';

@Injectable()
export class OrganismesService {

  private orgs: Array<OrganismeReferent> = new Array();
  
    constructor() {
      let o = new OrganismeReferent();
      o.id = "555"
      o.nom = "Molesting Inc";
      o.siteWeb = "MolestingInc.cum";
      o.courriel = "MolestingInc@dansyeule.cum";
      this.orgs.push(o);
     }
  
  
    public getAll()
    {
      return this.orgs;
    }

    public getById(id)
    {
      if (id === "-1") return new OrganismeReferent();
      return this.orgs.find((o) => o.id === id );
    }
  
    public create(o: OrganismeReferent)
    {
      o.id = (Math.random()*1000000).toString();
      this.orgs.push(_.cloneDeep(o));
    }
  
    public update(o: OrganismeReferent)
    {
      this.orgs[this.orgs.findIndex(e => e.id == o.id)] = _.cloneDeep(o);
    }
}
