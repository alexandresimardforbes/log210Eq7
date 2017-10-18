import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import { UsersService } from '../users.service';
import { User, Role } from '../User';


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  protected user: User;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected userService: UsersService,
    protected login: LoginService) { }

  ngOnInit() {
    this.user = this.userService.getUser(+this.route.snapshot.paramMap.get('id'));
  }

  onSubmit()
  {
    if(+this.route.snapshot.paramMap.get('id') === -1) this.userService.createUser(this.user);
    this.userService.setUser(this.user);
  }

  onReset()
  {
    this.user = this.userService.getUser(+this.route.snapshot.paramMap.get('id'));
  }

  canModify()
  {
    return this.login.getUser().role < this.user.role;
  }

}
