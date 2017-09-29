import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../User';


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
    protected userService: UsersService) { }

  ngOnInit() {
    this.user = this.userService.getUser(+this.route.snapshot.paramMap.get('id'));
  }

  onSubmit()
  {
    this.userService.setUser(this.user);
  }

  onReset()
  {
    this.user = this.userService.getUser(+this.route.snapshot.paramMap.get('id'));
  }

}
