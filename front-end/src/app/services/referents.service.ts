import { Injectable } from '@angular/core';
import { Referent } from '../public/referent';
import { Config } from '../config/config';
import { AuthHttp } from 'angular2-jwt';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class ReferentsService {
  private referents: Array<Referent> = new Array();
  private myHeader = new Headers();

  constructor(private authHttp: AuthHttp) {
    this.myHeader.append('Content-Type', 'application/json');
  }


  public getAll() :  Observable<any>
  {
    return this.authHttp.get(Config.apiPath + '/referents', {headers: this.myHeader})
    .map((response: Response) => response.json());
  }

  public getById(id) :  Observable<any>
  {
    return this.authHttp.get(Config.apiPath + `/referents/${id}`, {headers: this.myHeader}).map((response: Response) => response.json());
  }

  public create(ref: Referent) :  Observable<any>
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(ref, 'id');
    return this.authHttp.post(Config.apiPath + `/referents/`,{referent: ref}, {headers: header}).map((response: Response) => response.json());
  }

  public update(ref: Referent) :  Observable<any>
  {
    let header = _.cloneDeep(this.myHeader);
    let id = ref.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(ref, 'id');
    return this.authHttp.patch(Config.apiPath + `/referents/` + id, {referent: ref}, {headers: header}).map((response: Response) => response.json());
  }
}
