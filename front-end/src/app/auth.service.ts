import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { User, Role } from './User';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Config } from './config';

@Injectable()
export class AuthService {
  private myHeader = new Headers();
  private user: User = new User ('jesus', 'Jacob.Thornton.1@etsmtl.net', 'Jacob', 'Thornton', 6, Role.coordonator);
  constructor(private authHttp: AuthHttp, private http: Http, private usersService: UsersService){
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
    this.http.post(Config.apiPath + '/authenticate', JSON.stringify({ email: user.email, password: user.password }) ,{headers: this.myHeader})
    .subscribe((response: Response) => {
      // login successful if there's a jwt token in the response
      let token = response.json() && response.json().auth_token;
      let userid = response.json().userid;
      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userid', userid);
        this.usersService.getUser(userid).subscribe(u => this.user = user);
        // return true to indicate successful login
        return true;
      } else {
          // return false to indicate failed login
          return false;
      }
  });
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
