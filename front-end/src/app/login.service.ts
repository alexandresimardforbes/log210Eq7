import { Injectable } from '@angular/core';
import { User, Role } from './User';

@Injectable()
export class LoginService {
  private authenticated: boolean = true;
  private user: User = new User ('@fat', 'jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.coordonator);

  constructor() { }

  public login(user: User) 
  {
    this.authenticated = true;
  }

  public logout() 
  {
    this.authenticated = false;
  }

  public isAuthenticated()
  {
    return this.authenticated;
  }

  public getUser()
  {
    return this.user;
  }



}