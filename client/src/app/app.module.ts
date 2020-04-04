import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';

import { AppComponent } from './app.component';
import {
  HomePageComponent,
  SignInPageComponent,
  SignUpPageComponent,
  LandingPageComponent,
  UserChatPageComponent,
  AdminChatPageComponent,
  VisitPageComponent,
  CalendarPageComponent
} from './pages';


import { HeaderComponent } from './components/navigation/header/header.component'
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpPageComponent,
    SignInPageComponent,
    LandingPageComponent,
    UserChatPageComponent,
    AdminChatPageComponent,
    HeaderComponent,
    VisitPageComponent,
    DropdownSelectComponent,
    CalendarPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SecurityModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: DropdownSelectComponent, useClass: DropdownSelectComponent}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
