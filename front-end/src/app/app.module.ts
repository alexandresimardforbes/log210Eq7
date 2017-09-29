import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDetailsPageComponent } from './user-details-page/user-details-page.component';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserDetailsPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
  /* { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginPageComponent,
    UsersPageComponent,
    HomePageComponent,
    UserDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
