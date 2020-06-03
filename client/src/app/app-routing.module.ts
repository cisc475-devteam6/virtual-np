import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminChatPageComponent } from './pages/admin-chat-page/admin-chat-page.component';
import { UserChatPageComponent } from './pages/user-chat-page/user-chat-page.component';
import { AuthGuard } from './security/auth.guard';
import { VisitPageComponent } from './pages/visit-page/visit-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { UserDataPageComponent } from './pages/user-data-page/user-data-page.component';
import { NpLandingPageComponent } from './pages/np-landing-page/np-landing-page.component';
import { NpVisitPageComponent } from './pages/np-visit-page/np-visit-page.component';
import { UserDataEditPageComponent } from './pages/user-data-edit-page/user-data-edit-page.component';
import { PaypalPageComponent } from './pages/paypal-page/paypal-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'user-chat', component: UserChatPageComponent},
  { path: 'admin-chat', component: AdminChatPageComponent},
  {path: 'landing-page',component: LandingPageComponent,canActivate: [AuthGuard],},
  { path: 'visit-page', component: VisitPageComponent}, //, canActivate: [AuthGuard] }
  { path: 'calendar-page', component: CalendarPageComponent},
  { path: 'user-data-page', component: UserDataPageComponent},
  { path: 'user-data-edit-page', component: UserDataEditPageComponent},
  { path: 'np-landing-page', component: NpLandingPageComponent, canActivate: [AuthGuard]},
  { path: 'np-visit-page', component: NpVisitPageComponent},
  { path: 'paypal-page', component: PaypalPageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
