import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {Local} from "../public/local";
import {LocalService} from "../services/local.service";

@Component({
  selector: 'app-local-details-page',
  templateUrl: './local-details-page.component.html',
  styleUrls: ['./local-details-page.component.css']
})
export class LocalDetailsPageComponent implements OnInit {

  public local: Local = new Local();
  protected org: number;
  protected pds: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected localService: LocalService,
    protected login: AuthService) {}

  ngOnInit() {
    this.org = +this.route.snapshot.paramMap.get('id');
    this.pds = +this.route.snapshot.paramMap.get('pds');

    if(+this.route.snapshot.paramMap.get('local') !== -1) this.localService.getById(+this.route.snapshot.paramMap.get('local'), this.org, this.pds).subscribe(r => this.local = r);
  }

  onSubmit()
  {
    if(+this.route.snapshot.paramMap.get('local') === -1) this.localService.create(this.local, this.org, this.pds).subscribe(r => this.local = r);
    else this.localService.update(this.local, this.org, this.pds).subscribe(r => this.local = r);
  }

  onReset()
  {
    this.localService.getById(+this.route.snapshot.paramMap.get('local'), this.org, this.pds).subscribe(r => this.local = r);
  }

  goBack(){
    this.router.navigate(['organismes', this.org, 'pointDeServices', this.pds, 'locaux']);
  }

  canModify()
  {
    return true;
  }

}
