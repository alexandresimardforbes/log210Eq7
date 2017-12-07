import { Injectable } from '@angular/core';
import { User, Role } from '../public/user';
import * as _ from 'lodash';
import { AuthHttp } from 'angular2-jwt';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersService {
  private myHeader = new Headers();
  private users: Array<User>;

  constructor(private authHttp: AuthHttp)
  {
    this.myHeader.append('Content-Type', 'application/json');
    this.users = new Array();
    this.users.push( new User ('jesus', 'mark.otto.1@etsmtl.net', 'Mark', 'Otto', 5) );
    this.users.push( new User ('jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.director) );
    this.users.push( new User ('jesus', 'Larry.thebird.1@etsmtl.net', 'Larry', 'the Bird', 7) );
    this.users.push( new User ('jesus', 'mark.otto.1@etsmtl.net', 'Mark', 'Otto', 1) );
    this.users.push( new User ('jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 3) );
    this.users.push( new User ('jesus', 'Larry.thebird.1@etsmtl.net', 'Larry', 'the Bird', 4) );
  }


  public getUsers(): Observable<Array<any>> {
    return this.authHttp.get(Config.apiPath + '/users', {headers: this.myHeader})
    .map((response: Response) => response.json());
  }

  public getUser(id: number): Observable<any>
  {
    return this.authHttp.get(Config.apiPath + `/users/${id}`, {headers: this.myHeader}).map((response: Response) => response.json());
    //return _.cloneDeep(this.users.find(e => e.id == id));
  }

  public setUser(user: User): Observable<any>
  {
    let header = _.cloneDeep(this.myHeader);
    let id = user.id;
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(user, 'id');
    return this.authHttp.patch(Config.apiPath + `/users/${id}`, {user: user}, {headers: header}).map((response: Response) => response.json());
  }

  public createUser(user: User):  Observable<any>
  {
    let header = _.cloneDeep(this.myHeader);
    header.append('Session-user-id', localStorage.getItem('userid').toString());
    _.unset(user, 'id');
    return this.authHttp.post(Config.apiPath + `/users/`,{user: user}, {headers: header}).map((response: Response) => response.json());
    //this.users.push(_.cloneDeep(user));
  }

}
