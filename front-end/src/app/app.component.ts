import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginService } from './login.service';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService, UsersService]
})
export class AppComponent {
  title = 'app';

  constructor(protected loginService: LoginService)
  {

  }
}
