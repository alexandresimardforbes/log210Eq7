import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { User, Role } from '../public/user';
import * as _ from 'lodash';
import {OrganismeService} from "../services/organisme.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  protected users: Array<User> = new Array();
  protected org: number;

  constructor(protected userService: UsersService, private router: Router, private login: AuthService,private route: ActivatedRoute, private orgService: OrganismeService ) { }


  ngOnInit() {
    this.org = +this.route.snapshot.paramMap.get('org');
    if(this.org == -1){
      this.userService.getUsers().subscribe((users) => this.users = users);
    }
    else{
      this.orgService.getById(this.org).subscribe((org) => this.users = org.users);
      //TODO: Only get the users related to that organisation.
      //this.userService.getUsers().subscribe((users) => this.users = users);
    }

  }

  protected onUserClicked(user: User)
  {
    this.router.navigate(['/user', user.id, this.org]);
  }

  protected onCreateUser()
  {
    this.router.navigate(['/user', -1, this.org]);
  }

  protected canCreate()
  {
    return this.login.getUser().user_type <= Role.coordonator;
  }
}
