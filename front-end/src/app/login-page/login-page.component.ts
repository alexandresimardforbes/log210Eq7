import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService) 
  {
    this.user = User.createEmpty();
  }


  ngOnInit() {
  }

  
  submitted = false;
  
  onSubmit() { 
    this.submitted = true;
    console.log(this.user)
    this.loginService.login(this.user);
  }

}