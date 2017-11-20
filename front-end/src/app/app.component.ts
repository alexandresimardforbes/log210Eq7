import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AuthService } from './services/auth.service';
import { UsersPageComponent } from './users-page/users-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent {
  title = 'app';

  constructor(protected authService: AuthService)
  {

  }
}
