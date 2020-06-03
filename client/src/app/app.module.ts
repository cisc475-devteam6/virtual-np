import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SecurityModule } from './security/security.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import {
  HomePageComponent,
  SignInPageComponent,
  SignUpPageComponent,
  LandingPageComponent,
  UserChatPageComponent,
  AdminChatPageComponent,
  VisitPageComponent,
  CalendarPageComponent,
  UserDataPageComponent,
  UserDataEditPageComponent
} from './pages';


import { HeaderComponent } from './components/navigation/header/header.component'
import { DropdownSelectComponent } from './components/dropdown-select/dropdown-select.component';
import { NpLandingPageComponent } from './pages/np-landing-page/np-landing-page.component';
import { NpVisitPageComponent } from './pages/np-visit-page/np-visit-page.component';
import { PaypalPageComponent } from './pages/paypal-page/paypal-page.component';
import { TermsComponent} from './components/terms/terms.component'
import { MatDialogModule } from '@angular/material';
import { NPmailService } from './services/npmail.service'; 

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
    UserDataPageComponent,
    UserDataEditPageComponent,
    NpLandingPageComponent,
    NpVisitPageComponent,
    PaypalPageComponent,
    TermsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SecurityModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: DropdownSelectComponent, useClass: DropdownSelectComponent }
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [TermsComponent]
})
export class AppModule { }
