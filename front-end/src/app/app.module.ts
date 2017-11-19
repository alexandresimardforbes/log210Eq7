import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ReferentsService } from './referents.service';
import { OrganismesService } from './organismes.service';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';
import { OrganismePageComponent } from './organisme-page/organisme-page.component';
import { ReferentPageComponent } from './referent-page/referent-page.component';
import { ReferentDetailsPageComponent } from './referent-details-page/referent-details-page.component';
import { OrganismeDetailsPageComponent } from './organisme-details-page/organisme-details-page.component';
import { NbThemeModule } from '@nebular/theme';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersPageComponent, canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes', component: OrganismePageComponent, canActivate: [AuthGuard] },
  { path: 'referents', component: ReferentPageComponent, canActivate: [AuthGuard] },
  { path: 'referents/:id/:org', component: ReferentDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/:id', component: OrganismeDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'organismes/referents/:id', component: ReferentPageComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  /* { path: '**', component: PageNotFoundComponent } */
];

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

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
    OrganismePageComponent,
    ReferentPageComponent,
    ReferentDetailsPageComponent,
    OrganismeDetailsPageComponent
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
  providers: [AuthGuard, AuthService, ReferentsService, OrganismesService, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
