import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
import { ReferentsService } from '../referents.service';
import { Referent } from '../Referent';
import { Telephone } from '../Telephone';

@Component({
  selector: 'app-referent-details-page',
  templateUrl: './referent-details-page.component.html',
  styleUrls: ['./referent-details-page.component.css']
})
export class ReferentDetailsPageComponent implements OnInit {
  protected ref: Referent;
  protected disable: Referent = new Referent();
    
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      protected referentsService: ReferentsService,
      protected login: AuthService) 
      {
        this.ref = new Referent();
      }
  
    ngOnInit() {
      this.referentsService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.ref = r);
      this.ref.organisme_referent_id = this.route.snapshot.paramMap.get('org');
      this.disable.disable = localStorage.getItem('refdisabled') === "true" ? true : false;
    }
  
    onSubmit()
    {
      localStorage.setItem('refdisabled', this.disable.disable.toString());
      if(+this.route.snapshot.paramMap.get('id') === -1) this.referentsService.create(this.ref).subscribe(r => {
        this.ref = r;
      }, error => {
          alert("Email exisdte déja!");
      });
      this.referentsService.update(this.ref).subscribe(r => this.ref = r);
    }
  
    onReset()
    {
      this.referentsService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.ref = r);
    }
  
    canModify()
    {
      return true;
    }
}
