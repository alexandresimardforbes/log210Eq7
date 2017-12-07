import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PointDeService} from "../public/point-de-service";
import {PointDeServiceService} from "../services/point-de-service.service";
import {Role} from "../public/user";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-point-de-service-page',
  templateUrl: './point-de-service-page.component.html',
  styleUrls: ['./point-de-service-page.component.css']
})
export class PointDeServicePageComponent implements OnInit {

  public pdss: Array<PointDeService>;
  protected org: number;


  constructor(protected pdsService: PointDeServiceService, private login: AuthService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.org = +this.route.snapshot.paramMap.get('id');

    this.pdsService.getAll(this.org).subscribe(r => this.pdss = r);
  }

  protected onPdsClicked(pds: PointDeService)
  {
    this.router.navigate(['organismes', this.org ,'pointDeServices', pds.id]);
  }

  protected onCreate()
  {
    this.router.navigate(['organismes', this.org ,'pointDeServices', -1]);
  }

  protected canCreate()
  {
    return this.login.getUser().user_type == Role.director;
  }

}
