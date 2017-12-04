import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { User, Role } from '../public/user';


@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  protected user: User;
  protected loggedUser: User = User.createEmpty();
  protected org: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected userService: UsersService,
    protected login: AuthService) { }

  ngOnInit() {
    this.user = User.createEmpty();
    this.loggedUser = this.login.getUser();
    this.org = +this.route.snapshot.paramMap.get('org');
    if (+this.route.snapshot.paramMap.get('id') > -1)
    {
      this.userService.getUser(+this.route.snapshot.paramMap.get('id')).subscribe(u => {this.user = u; console.log(u)});
    }
  }

  onSubmit()
  {
    console.log(this.user);
    if(+this.route.snapshot.paramMap.get('id') === -1) this.userService.createUser(this.user).subscribe();
    this.userService.setUser(this.user);
  }

  onReset()
  {
    this.userService.getUser(+this.route.snapshot.paramMap.get('id')).subscribe(u => this.user = u);
  }

  onRadioClick(e){
    this.user.user_type = e;
  }

  hasNoRightsToCreate(roleLevel: number){
    let bool = (this.loggedUser.user_type > roleLevel || this.loggedUser.user_type > this.user.user_type );
    return bool;
  }

  protected onBack()
  {
    this.router.navigate(['/users', this.org]);
  }

}
