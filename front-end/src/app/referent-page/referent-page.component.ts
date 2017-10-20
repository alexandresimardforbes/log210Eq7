import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferentsService } from '../referents.service';
import { AuthService } from '../auth.service';
import { Referent } from '../Referent';

@Component({
  selector: 'app-referent-page',
  templateUrl: './referent-page.component.html',
  styleUrls: ['./referent-page.component.css']
})
export class ReferentPageComponent implements OnInit {

  constructor(protected referentsService: ReferentsService, private router: Router) { }

  ngOnInit() {
  }

  protected onReferentClicked(referent: Referent)
  {
    this.router.navigate(['/referents', referent.id]);
  }

  protected onCreateReferent()
  {
    this.router.navigate(['/referents', -1]);
  }

  protected canCreate()
  {
    return true;
  }

}
