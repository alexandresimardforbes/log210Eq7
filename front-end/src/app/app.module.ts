import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ReferentsService } from './services/referents.service';
import { OrganismesReferentService } from './services/organismes-referent.service';
import { UsersService } from './services/users.service';
import { OrganismeService } from './services/organisme.service';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { OrganismeReferentPageComponent } from './organisme-referent-page/organisme-referent-page.component';
import { ReferentPageComponent } from './referent-page/referent-page.component';
import { ReferentDetailsPageComponent } from './referent-details-page/referent-details-page.component';
import { OrganismeReferentDetailsPageComponent } from './organisme-referent-details-page/organisme-referent-details-page.component';
import { NbThemeModule } from '@nebular/theme';



const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'users/:org', component: UsersPageComponent, canActivate: [AuthGuard] },
  { path: 'user/:id/:org', component: UserDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id/pointDeServices', component: PointDeServicePageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id/pointDeServices/:pds', component: PointDeServiceDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id/pointDeServices/:pds/locaux', component: LocalPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id/pointDeServices/:pds/locaux/:local', component: LocalDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes', component: OrganismesPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id', component: OrganismesDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismesReferents', component: OrganismeReferentPageComponent, canActivate: [AuthGuard] },
  { path: 'organismesReferents/:id', component: OrganismeReferentDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismesReferents/:orgRef/referents/:id', component: ReferentDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismesReferents/:orgRef/referents', component: ReferentPageComponent, canActivate: [AuthGuard] },
  /* { path: '**', component: PageNotFoundComponent } */
];

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { OrganismesPageComponent } from './organismes-page/organismes-page.component';
import { OrganismesDetailsPageComponent } from './organismes-details-page/organismes-details-page.component';
import { PointDeServicePageComponent } from './point-de-service-page/point-de-service-page.component';
import { PointDeServiceDetailsPageComponent } from './point-de-service-details-page/point-de-service-details-page.component';
import { LocalDetailsPageComponent } from './local-details-page/local-details-page.component';
import { LocalPageComponent } from './local-page/local-page.component';
import {PointDeServiceService} from "./services/point-de-service.service";
import {LocalService} from "./services/local.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginPageComponent,
    UsersPageComponent,
    HomePageComponent,
    UserDetailsPageComponent,
    OrganismeReferentPageComponent,
    ReferentPageComponent,
    ReferentDetailsPageComponent,
    OrganismeReferentDetailsPageComponent,
    OrganismesPageComponent,
    OrganismesDetailsPageComponent,
    PointDeServicePageComponent,
    PointDeServiceDetailsPageComponent,
    LocalDetailsPageComponent,
    LocalPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NbThemeModule.forRoot({ name: 'default' }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard, AuthService, ReferentsService, OrganismesReferentService, OrganismeService, PointDeServiceService, LocalService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
