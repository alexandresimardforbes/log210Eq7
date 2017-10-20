import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { User, Role } from '../User';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(protected userService: UsersService, private router: Router, private login: AuthService ) { }


  ngOnInit() {
  }

  protected onUserClicked(user: User)
  {
    this.router.navigate(['/user', user.id]);
  }

  protected onCreateUser()
  {
    this.router.navigate(['/user', -1]);
  }

  protected canCreate() 
  {
    return this.login.getUser().role <= Role.coordonator;
  }
}
