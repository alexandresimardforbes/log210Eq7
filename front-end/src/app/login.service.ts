import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable()
export class LoginService {
  private authenticated: boolean = false;

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

}