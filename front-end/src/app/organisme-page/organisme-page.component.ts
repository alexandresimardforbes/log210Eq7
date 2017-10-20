import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismesService } from '../organismes.service';
import { AuthService } from '../auth.service';
import { OrganismeReferent } from '../organisme-referent';

@Component({
  selector: 'app-organisme-page',
  templateUrl: './organisme-page.component.html',
  styleUrls: ['./organisme-page.component.css']
})
export class OrganismePageComponent implements OnInit {

  constructor(protected orgService: OrganismesService, private router: Router) { }

  ngOnInit() {
  }

  protected onOrgClicked(org: OrganismeReferent)
  {
    this.router.navigate(['/organismes', org.id]);
  }

  protected onCreateOrg()
  {
    this.router.navigate(['/organismes', -1]);
  }

  protected canCreate()
  {
    return true;
  }

}
