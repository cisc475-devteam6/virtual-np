import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ErrorInterceptor } from './security/interceptors/error.interceptor'
// import { JwtInterceptor } from './security/interceptors/jwt.interceptor'
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SecurityModule } from './security/security.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserChatPageComponent } from './pages/user-chat-page/user-chat-page.component';
import { AdminChatPageComponent } from './pages/admin-chat-page/admin-chat-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    UserChatPageComponent,
    AdminChatPageComponent,
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
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: DropdownSelectComponent, useClass: DropdownSelectComponent}
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
