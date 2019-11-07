import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error.interceptor'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';
import { RegisterComponent } from './components/register/register.component';
// import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    // AuthRoutingModule,
  ],
  providers: [
    ErrorInterceptor,
  ],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent]
})
export class SecurityModule {}
