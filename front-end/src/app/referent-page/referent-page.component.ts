import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferentsService } from '../referents.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AuthService } from '../auth.service';
import { Referent } from '../Referent';

@Component({
  selector: 'app-referent-page',
  templateUrl: './referent-page.component.html',
  styleUrls: ['./referent-page.component.css']
})
export class ReferentPageComponent implements OnInit {
  public referents: Array<Referent>;
  public search: Referent;

  constructor(protected referentsService: ReferentsService, private router: Router, 
    private route: ActivatedRoute) {
    this.getAll();
    this.search = new Referent();
   }

  ngOnInit() {
  }

  protected onReferentClicked(referent: Referent)
  {
    this.router.navigate(['/referents', referent.id, 1]);
  }

  protected onCreateReferent()
  {
    this.router.navigate(['/referents', -1, 1]);
  }

  protected canShow(ref: Referent){
    let it = ref.first_name.indexOf(this.search.first_name);
    if(ref.first_name.indexOf(this.search.first_name) == -1)
      return false;
    if(ref.last_name.indexOf(this.search.last_name) == -1)
      return false;
    if(ref.phone_b.indexOf(this.search.phone_b) == -1)
      return false;
    if(ref.phone_c.indexOf(this.search.phone_c) == -1)
      return false;
    if(ref.title.indexOf(this.search.title) == -1)
      return false;

    return true;
  }

  protected getAll(){
    this.referentsService.getAll().subscribe(r => this.referents = r);
  }

  protected canCreate()
  {
    return true;
  }

}
