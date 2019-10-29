import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AuthService,
    UserService
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})
export class SecurityModule {}
