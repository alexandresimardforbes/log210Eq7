import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Local} from "../public/local";
import {LocalService} from "../services/local.service";
import { AuthService } from '../services/auth.service';
import {Role} from "../public/user";

@Component({
  selector: 'app-local-page',
  templateUrl: './local-page.component.html',
  styleUrls: ['./local-page.component.css']
})
export class LocalPageComponent implements OnInit {

  public locaux: Array<Local>;
  protected org: number;
  protected pds: number;


  constructor(protected localService: LocalService, private login: AuthService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.org = +this.route.snapshot.paramMap.get('id');
    this.pds = +this.route.snapshot.paramMap.get('pds');

    this.localService.getAll(this.org, this.pds).subscribe(r => this.locaux = r);
  }

  protected onlocalClicked(l: Local)
  {
    this.router.navigate(['organismes', this.org ,'pointDeServices', this.pds, 'locaux', l]);
  }

  protected onCreate()
  {
    this.router.navigate(['organismes', this.org ,'pointDeServices', this.pds, 'locaux', -1]);
  }

  protected canCreate()
  {
    return this.login.getUser().user_type == Role.director;
  }
}
