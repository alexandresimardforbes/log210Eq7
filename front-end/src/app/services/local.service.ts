import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Response } from '@angular/http';
import * as _ from 'lodash';
import {Local} from "../public/local";

@Injectable()
export class LocalService {
  private myHeader = new Headers();
  private path = '/locaux/';


  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }


  public getAll(org: number, pds: number)
  {
    return this.authHttp.get(Config.apiPath + this.path + org + '/' + pds, {headers: this.myHeader})
      .map((response: Response) => response.json());
  }

  public getById(id, org: number, pds: number)
  {
    return this.authHttp.get(Config.apiPath + this.path + org + '/' + pds + '/' + id, {headers: this.myHeader}).map((response: Response) => response.json());
  }

  public create(o: Local, org: number, pds: number)
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.post(Config.apiPath + this.path + org + '/' + pds,{local: o}, {headers: header}).map((response: Response) => response.json());
  }

  public update(o: Local, org: number, pds: number)
  {
    let header = _.cloneDeep(this.myHeader);
    let id = o.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.patch(Config.apiPath + this.path + org + '/' + pds + '/' + id, {local: o}, {headers: header}).map((response: Response) => response.json());
  }
}
