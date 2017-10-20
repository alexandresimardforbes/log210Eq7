import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { User, Role } from './User';
import { AuthHttp } from 'angular2-jwt';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  private myHeader = new Headers();
  private user: User = new User ('@fat', 'jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.coordonator);
  
  constructor(private authHttp: AuthHttp, private usersService: UsersService){
    this.myHeader.append('Content-Type', 'application/json');
  }

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
    this.authHttp.post('localhost:3000/authentification/authenticate', JSON.stringify({ email: user.email, password: user.password }) ,{headers: this.myHeader})
    .subscribe((response: Response) => {
      // login successful if there's a jwt token in the response
      let token = response.json() && response.json().token;
      let userid = response.json().userid;
      this.usersService.getUser(userid).subscribe(u => this.user = user);
      if (token) {
        localStorage.setItem('token', token);
          // return true to indicate successful login
        return true;
      } else {
          // return false to indicate failed login
          return false;
      }
  });
  }
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
  public getUser()
  {
    return this.user;
  }

  public logout() 
  {
    localStorage.removeItem('token');
  }
}