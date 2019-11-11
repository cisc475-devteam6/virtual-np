import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SecurityModule } from './security/security.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './navigation/components/header/header.component'
import { VisitPageComponent } from './pages/visit-page/visit-page.component';
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpPageComponent,
    SignInPageComponent,
    LandingPageComponent,
    HeaderComponent,
    VisitPageComponent,
    DropdownSelectComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SecurityModule,
  ],
  providers: [
    {provide: DropdownSelectComponent, useClass: DropdownSelectComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
