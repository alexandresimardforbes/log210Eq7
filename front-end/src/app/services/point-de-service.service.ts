import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, Response } from '@angular/http';
import * as _ from 'lodash';
import {PointDeService} from "../public/point-de-service";

@Injectable()
export class PointDeServiceService {
  private myHeader = new Headers();
  private path = '/point_services/';


  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }


  public getAll(org: number)
  {
    return this.authHttp.get(Config.apiPath + this.path, {headers: this.myHeader})
      .map((response: Response) => _.filter(response.json(), (o) => o.organisme_id === org));
  }

  public getById(id)
  {
    return this.authHttp.get(Config.apiPath + this.path + id, {headers: this.myHeader}).map((response: Response) => response.json());
  }

  public create(o: PointDeService)
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.post(Config.apiPath + this.path,{point_service: o}, {headers: header}).map((response: Response) => response.json());
  }

  public update(o: PointDeService)
  {
    let header = _.cloneDeep(this.myHeader);
    let id = o.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(o, 'id');
    return this.authHttp.patch(Config.apiPath + this.path + id, {point_service: o}, {headers: header}).map((response: Response) => response.json());
  }
}
