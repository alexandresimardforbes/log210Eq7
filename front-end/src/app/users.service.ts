import { Injectable } from '@angular/core';
import { User, Role } from './User';
import * as _ from 'lodash';
import { AuthHttp } from 'angular2-jwt';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from './config';
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


  public getUsers(): Observable<Array<User>> {
    return this.authHttp.get(Config.apiPath + '/users', {headers: this.myHeader})
    .map((response: Response) => response.json());
  }

  public getUser(id: number): Observable<User>
  {
    return this.authHttp.get(Config.apiPath + `/users/${id}`, {headers: this.myHeader}).map((response: Response) => response.json());
    //return _.cloneDeep(this.users.find(e => e.id == id));
  }

  public setUser(user: User)
  {
    this.users[this.users.findIndex(e => e.id == user.id)] = _.cloneDeep(user);
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