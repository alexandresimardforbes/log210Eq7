import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrganismesReferentService } from '../services/organismes-referent.service';
import { AuthService } from '../services/auth.service';
import { OrganismeReferent } from '../public/organisme-referent';

@Component({
  selector: 'app-organisme-referent-details-page',
  templateUrl: './organisme-referent-details-page.component.html',
  styleUrls: ['./organisme-referent-details-page.component.css']
})
export class OrganismeReferentDetailsPageComponent implements OnInit {
  public org: OrganismeReferent = new OrganismeReferent();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected OrganismesService: OrganismesReferentService,
    protected login: AuthService) {}

    ngOnInit() {
      if(+this.route.snapshot.paramMap.get('id') !== -1) this.OrganismesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.org = r);
    }

    onSubmit()
    {
      if(+this.route.snapshot.paramMap.get('id') === -1) this.OrganismesService.create(this.org).subscribe(r => this.org = r);
      else this.OrganismesService.update(this.org).subscribe(r => this.org = r);
    }

    onReset()
    {
      this.OrganismesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.org = r);
    }

    goToReferent(){
      this.router.navigate(['/organismesReferents/', this.org.id, 'referents']);
    }

    canModify()
    {
      return true;
    }
}
