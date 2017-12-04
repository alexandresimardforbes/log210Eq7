import { Injectable } from '@angular/core';
import { Organisme } from '../public/organisme';
import { Config } from '../config/config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Response } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class OrganismeService {
  private myHeader = new Headers();

  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }


  public getAll()
  {
    return this.authHttp.get(Config.apiPath + '/organismes', {headers: this.myHeader})
      .map((response: Response) => response.json());
  }

  public getById(id)
  {
    return this.authHttp.get(Config.apiPath + `/organismes/${id}`, {headers: this.myHeader}).map((response: Response) => response.json());
  }

  public create(o: Organisme)
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.post(Config.apiPath + `/organismes/`,{organisme: o}, {headers: header}).map((response: Response) => response.json());
  }

  public update(o: Organisme)
  {
    let header = _.cloneDeep(this.myHeader);
    let id = o.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.patch(Config.apiPath + `/organismes/` + id, {organisme: o}, {headers: header}).map((response: Response) => response.json());
  }
}
