import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrganismesService } from '../organismes.service';
import { AuthService } from '../auth.service';
import { OrganismeReferent } from '../organisme-referent';
import { Adresse } from '../adresse';

@Component({
  selector: 'app-organisme-details-page',
  templateUrl: './organisme-details-page.component.html',
  styleUrls: ['./organisme-details-page.component.css']
})
export class OrganismeDetailsPageComponent implements OnInit {
  protected org: OrganismeReferent;
  
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      protected referentsService: OrganismesService,
      protected login: AuthService) { }
  
    ngOnInit() {
      this.org = this.referentsService.getById(this.route.snapshot.paramMap.get('id'));
    }
  
    onSubmit()
    {
      if(+this.route.snapshot.paramMap.get('id') === -1) this.referentsService.create(this.org);
      this.referentsService.update(this.org);
    }
  
    onReset()
    {
      this.org = this.referentsService.getById(+this.route.snapshot.paramMap.get('id'));
    }
  
    canModify()
    {
      return true;
    }
}
