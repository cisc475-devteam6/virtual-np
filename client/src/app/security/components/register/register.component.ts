import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(private _authSvc: AuthService) { }

  registerClick() {
    this._authSvc.register(
      this.email,
      this.password,
      this.firstName,
      this.lastName
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = '';
  }

}
