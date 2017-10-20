import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { User, Role } from './User';

@Injectable()
export class AuthService {
  private user: User = new User ('@fat', 'jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.coordonator);
  
  public getToken(): string {
    return localStorage.getItem('token');
  }
  
  
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }


  public login(user: User) 
  {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
  }

  public getUser()
  {
    return this.user;
  }

  public logout() 
  {
    localStorage.removeItem('token');
  }
}