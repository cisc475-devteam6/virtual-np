import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error.interceptor'
import { JwtInterceptor } from './interceptors/jwt.interceptor'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';
import { RegisterComponent } from './components/register/register.component';
import { AlertComponent } from './components/alert/alert.component';
import { MatCheckboxModule} from '@angular/material';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  declarations: [LoginComponent, RegisterComponent, AlertComponent],
  exports: [LoginComponent, RegisterComponent, AlertComponent]
})
export class SecurityModule {}
