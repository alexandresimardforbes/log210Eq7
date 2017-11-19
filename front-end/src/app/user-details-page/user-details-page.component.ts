import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
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
    protected login: AuthService) { }

  ngOnInit() {
    if (+this.route.snapshot.paramMap.get('id') === -1)
    {
      this.user = User.createEmpty();
    }
    else this.userService.getUser(+this.route.snapshot.paramMap.get('id')).subscribe(u => this.user = u);
  }

  onSubmit()
  {
    if(+this.route.snapshot.paramMap.get('id') === -1) this.userService.createUser(this.user).subscribe();
    this.userService.setUser(this.user);
  }

  onReset()
  {
    this.userService.getUser(+this.route.snapshot.paramMap.get('id')).subscribe(u => this.user = u);
  }

  canModify()
  {
    return this.login.getUser().user_type < this.user.user_type;
  }

}
