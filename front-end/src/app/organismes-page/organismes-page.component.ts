import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismeService } from '../services/organisme.service';
import { AuthService } from '../services/auth.service';
import { Organisme } from '../public/organisme';
import {Role} from "../public/user";

@Component({
  selector: 'app-organismes-page',
  templateUrl: './organismes-page.component.html',
  styleUrls: ['./organismes-page.component.css']
})
export class OrganismesPageComponent implements OnInit {

  public orgs: Array<Organisme>;


  constructor(protected orgService: OrganismeService, private login: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.orgService.getAll().subscribe(r => this.orgs = r);
  }

  protected onOrgClicked(org: Organisme)
  {
    this.router.navigate(['/organismes', org.id]);
  }

  protected onCreate()
  {
    this.router.navigate(['/organismes', -1]);
  }

  protected canCreate()
  {
    return this.login.getUser().user_type == Role.director;
  }
}
