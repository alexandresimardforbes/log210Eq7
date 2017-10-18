import { Injectable } from '@angular/core';
import { User, Role } from './User';
import * as _ from 'lodash';


@Injectable()
export class UsersService {

  private users: Array<User>;

  constructor() 
  {
    this.users = new Array();
    this.users.push( new User ('@mdo', 'jesus', 'mark.otto.1@etsmtl.net', 'Mark', 'Otto', 5) );
    this.users.push( new User ('@fat', 'jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.director) );
    this.users.push( new User ('@twitter', 'jesus', 'Larry.thebird.1@etsmtl.net', 'Larry', 'the Bird', 7) );
    this.users.push( new User ('@mdo', 'jesus', 'mark.otto.1@etsmtl.net', 'Mark', 'Otto', 1) );
    this.users.push( new User ('@fat', 'jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 3) );
    this.users.push( new User ('@twitter', 'jesus', 'Larry.thebird.1@etsmtl.net', 'Larry', 'the Bird', 4) );
  }


  public getUsers(): Array<User>
  {
    return _.cloneDeep(this.users);
  }

  public getUser(id: number): User
  {
    if (id === -1) return User.createEmpty();
    return _.cloneDeep(this.users.find(e => e.id == id));
  }

  public setUser(user: User)
  {
    this.users[this.users.findIndex(e => e.id == user.id)] = _.cloneDeep(user);
  }

  public createUser(user: User)
  {
    this.users.push(_.cloneDeep(user));
  }

}