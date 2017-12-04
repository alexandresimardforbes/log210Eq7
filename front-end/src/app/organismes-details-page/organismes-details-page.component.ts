import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrganismeService } from '../services/organisme.service';
import { AuthService } from '../services/auth.service';
import { Organisme } from '../public/organisme';
@Component({
  selector: 'app-organismes-details-page',
  templateUrl: './organismes-details-page.component.html',
  styleUrls: ['./organismes-details-page.component.css']
})
export class OrganismesDetailsPageComponent implements OnInit {
  public org: Organisme = new Organisme();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected OrganismesService: OrganismeService,
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

  goToUsers(){
    this.router.navigate(['/users/', this.org.id]);
  }

  goToPds(){
    this.router.navigate(['organismes', this.org.id, 'pointDeServices']);
  }

  canModify()
  {
    return true;
  }
}
