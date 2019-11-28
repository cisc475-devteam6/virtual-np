import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string ;
  public toggleVal: string = 'patient';

  constructor(private _alertSvc: AlertService, private _authSvc: AuthService) { }

  loginClick() {
    if (this.toggleVal == 'np') {
      this._authSvc.np_login(this.email, this.password).subscribe(
        data => console.log('Data:' + data),
          err => this._alertSvc.error(err)
      );
    } else {
      this._authSvc.login(this.email, this.password).subscribe(
        data => console.log('Data:' + data),
          err => this._alertSvc.error(err)
      );
    }
  }

  ngOnInit() {
    this.email = this.password = '';
  }

}
