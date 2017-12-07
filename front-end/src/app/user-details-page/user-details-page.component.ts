import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import {User, Role, Diploma} from '../public/user';


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
      this.userService.getUser(+this.route.snapshot.paramMap.get('id')).subscribe(u => {
        u.diplomas_attributes = u.diplomas;
        delete u.diplomas;
        this.user = u;
      });
    }
  }

  onSubmit()
  {
    console.log(this.user);
    if(+this.route.snapshot.paramMap.get('id') === -1) {
      if( this.org > -1 ) this.user.organisme_id = this.org;
      this.userService.createUser(this.user).subscribe();
    }
    else {
      this.userService.setUser(this.user).subscribe(u => {
        u.diplomas_attributes = u.diplomas;
        delete u.diplomas;
        this.user = u;
      });
    }
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

  protected onAddDiploma(diplomaName, diplomaDate){
    let newDiploma = new Diploma();
    newDiploma.name = diplomaName.value;
    newDiploma.date = diplomaDate.value;
    if(newDiploma.name.length && newDiploma.date.length)
      this.user.diplomas_attributes.push(newDiploma);
    diplomaDate.value = '';
    diplomaName.value = '';
  }

  protected onDeleteDiploma(i: number){
    this.user.diplomas_attributes.splice(i, 1);
  }

  protected onBack()
  {
    this.router.navigate(['/users', this.org]);
  }

}
