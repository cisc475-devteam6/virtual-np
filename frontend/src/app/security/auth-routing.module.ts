import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { AuthGuard } from './auth.guard';

const authRoutes: Routes = [
  {
    path: 'user',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'landing-page', component: LandingPageComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
