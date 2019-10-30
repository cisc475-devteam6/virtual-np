import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private email: string;
  private password: string;
  private firstName: string;
  private lastName: string;

  constructor(private _authSvc: AuthService) { }

  registerClick() {
    this._authSvc.register(
      this.email,
      this.password,
      this.firstName,
      this.lastName,
      'virtual-np'
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = '';
  }

}
