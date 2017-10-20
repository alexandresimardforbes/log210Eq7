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
  
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      protected referentsService: ReferentsService,
      protected login: AuthService) { }
  
    ngOnInit() {
      this.ref = this.referentsService.getById(this.route.snapshot.paramMap.get('id'));
    }
  
    onSubmit()
    {
      if(+this.route.snapshot.paramMap.get('id') === -1) this.referentsService.create(this.ref);
      this.referentsService.update(this.ref);
    }
  
    onReset()
    {
      this.ref = this.referentsService.getById(+this.route.snapshot.paramMap.get('id'));
    }
  
    canModify()
    {
      return true;
    }
}
