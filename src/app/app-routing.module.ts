import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component'


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
