import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Response } from '@angular/http';
import * as _ from 'lodash';
import {PointDeService} from "../public/point-de-service";

@Injectable()
export class PointDeServiceService {
  private myHeader = new Headers();
  private path = '/point_de_services/';


  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }


  public getAll(org: number)
  {
    return this.authHttp.get(Config.apiPath + this.path + org, {headers: this.myHeader})
      .map((response: Response) => response.json());
  }

  public getById(id, org: number)
  {
    return this.authHttp.get(Config.apiPath + this.path + org + '/' + id, {headers: this.myHeader}).map((response: Response) => response.json());
  }

  public create(o: PointDeService, org: number)
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.post(Config.apiPath + this.path + org,{point_de_service: o}, {headers: header}).map((response: Response) => response.json());
  }

  public update(o: PointDeService, org: number)
  {
    let header = _.cloneDeep(this.myHeader);
    let id = o.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.patch(Config.apiPath + this.path + org + '/' + id, {point_de_service: o}, {headers: header}).map((response: Response) => response.json());
  }
}
