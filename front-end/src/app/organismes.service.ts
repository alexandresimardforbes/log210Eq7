import { Injectable } from '@angular/core';
import { OrganismeReferent } from './organisme-referent';
import { Config } from './config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class OrganismesService {

  private orgs: Array<OrganismeReferent> = new Array();
  private myHeader = new Headers();
  private bool: boolean = false;
  
  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }
  
  
    public getAll()
    {
      return this.authHttp.get(Config.apiPath + '/organisme_referents', {headers: this.myHeader})
      .map((response: Response) => response.json());
    }

    public getById(id)
    {
      return this.authHttp.get(Config.apiPath + `/organisme_referents/${id}`, {headers: this.myHeader}).map((response: Response) => response.json());      
    }
  
    public getDisable(){
      this.bool = !this.bool;
      return this.bool;
    }

    public create(o: OrganismeReferent)
    {
      let header = _.cloneDeep(this.myHeader);
      header.append('Session-user-id', localStorage.getItem('userid').toString());
      _.unset(o, 'id');
      return this.authHttp.post(Config.apiPath + `/organisme_referents/`,{organisme_referent: o}, {headers: header}).map((response: Response) => response.json());
    }
  
    public update(o: OrganismeReferent)
    {
      let header = _.cloneDeep(this.myHeader);
      header.append('Session-user-id', localStorage.getItem('userid').toString());
      return this.authHttp.patch(Config.apiPath + `/organisme_referents/` + o.id, {organisme_referent: o}, {headers: header}).map((response: Response) => response.json());
    }
}
