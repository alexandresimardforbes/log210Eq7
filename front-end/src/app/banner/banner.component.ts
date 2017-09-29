import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  protected onLogout()
  {
    this.loginService.logout();
  }

}
