import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ReferentsService } from '../services/referents.service';
import { Referent } from '../public/referent';
import { Telephone } from '../public/telephone';

@Component({
  selector: 'app-referent-details-page',
  templateUrl: './referent-details-page.component.html',
  styleUrls: ['./referent-details-page.component.css']
})
export class ReferentDetailsPageComponent implements OnInit {
  protected ref: Referent;
  protected organismeReferent: number;

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
      this.ref.organisme_referent_id = this.route.snapshot.paramMap.get('orgRef');
      this.organismeReferent = +this.route.snapshot.paramMap.get('orgRef');
    }

    protected onSubmit()
    {
      if(+this.route.snapshot.paramMap.get('id') === -1) this.referentsService.create(this.ref).subscribe(r => {
        this.ref = r;
      }, error => {
          alert("Email exisdte déja!");
      });
      else this.referentsService.update(this.ref).subscribe(r => this.ref = r);
    }

    protected goBack(){
      this.router.navigate(['/organismesReferents', this.organismeReferent, 'referents']);
    }

    protected onReset()
    {
      this.referentsService.getById(this.route.snapshot.paramMap.get('id')).subscribe(r => this.ref = r);
    }

    protected canModify()
    {
      return true;
    }
}
