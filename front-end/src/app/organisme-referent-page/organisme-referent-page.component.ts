import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganismesReferentService } from '../services/organismes-referent.service';
import { AuthService } from '../services/auth.service';
import { OrganismeReferent } from '../public/organisme-referent';

@Component({
  selector: 'app-organisme-referent-page',
  templateUrl: './organisme-referent-page.component.html',
  styleUrls: ['./organisme-referent-page.component.css']
})
export class OrganismeReferentPageComponent implements OnInit {
  public orgs: Array<OrganismeReferent>;


  constructor(protected orgService: OrganismesReferentService, private router: Router) {
  }

  ngOnInit() {
    this.orgService.getAll().subscribe(r => this.orgs = r);
  }

  protected onOrgClicked(org: OrganismeReferent)
  {
    this.router.navigate(['/organismesReferents', org.id]);
  }

  protected onCreateOrg()
  {
    this.router.navigate(['/organismesReferents', -1]);
  }

  protected canCreate()
  {
    return true;
  }

}
