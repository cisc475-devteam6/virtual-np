import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VisitPageComponent } from './pages/visit-page/visit-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'visit-page', component: VisitPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
