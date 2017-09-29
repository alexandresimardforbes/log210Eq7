import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../User';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(protected userService: UsersService, private router: Router ) { }


  ngOnInit() {
  }

  protected onUserClicked(user: User)
  {
    this.router.navigate(['/user', user.id]);
  }
}
