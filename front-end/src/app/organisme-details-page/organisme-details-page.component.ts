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
  public org: OrganismeReferent = new OrganismeReferent();
  public disable: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected OrganismesService: OrganismesService,
    protected login: AuthService) {}
  
    ngOnInit() {
      this.disable = this.OrganismesService.getDisable();
      if(+this.route.snapshot.paramMap.get('id') !== -1) this.OrganismesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.org = r);
    }
  
    onSubmit()
    {
      if(+this.route.snapshot.paramMap.get('id') === -1) this.OrganismesService.create(this.org).subscribe(r => this.org = r);
      this.OrganismesService.update(this.org).subscribe(r => this.org = r);
    }
  
    onReset()
    {
      this.OrganismesService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.org = r);
    }
  
    goToReferent(){
      this.router.navigate(['/organismes/referents', this.org.id]);
    }

    canModify()
    {
      return true;
    }
}
