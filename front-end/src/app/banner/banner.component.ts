import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  protected onLogout()
  {
    this.authService.logout();
  }

}
