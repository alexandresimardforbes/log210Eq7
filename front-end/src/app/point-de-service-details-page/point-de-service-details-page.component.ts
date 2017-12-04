import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {PointDeService} from "../public/point-de-service";
import {PointDeServiceService} from "../services/point-de-service.service";

@Component({
  selector: 'app-point-de-service-details-page',
  templateUrl: './point-de-service-details-page.component.html',
  styleUrls: ['./point-de-service-details-page.component.css']
})
export class PointDeServiceDetailsPageComponent implements OnInit {

  public pds: PointDeService = new PointDeService();
  protected org: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    protected pdsService: PointDeServiceService,
    protected login: AuthService) {}

  ngOnInit() {
    this.org = +this.route.snapshot.paramMap.get('id');
    if(+this.route.snapshot.paramMap.get('pds') !== -1) this.pdsService.getById(+this.route.snapshot.paramMap.get('id'), this.org).subscribe(r => this.pds = r);
  }

  onSubmit()
  {
    if(+this.route.snapshot.paramMap.get('pds') === -1) this.pdsService.create(this.pds, this.org).subscribe(r => this.pds = r);
    else this.pdsService.update(this.pds, this.org).subscribe(r => this.pds = r);
  }

  onReset()
  {
    this.pdsService.getById(+this.route.snapshot.paramMap.get('pds'), this.org).subscribe(r => this.pds = r);
  }

  goToLocal(){
    this.router.navigate(['organismes', this.org, 'pointDeServices', this.pds.id, 'locaux']);
  }

  goBack(){
    this.router.navigate(['organismes', this.org, 'pointDeServices']);
  }

  canModify()
  {
    return true;
  }

}
