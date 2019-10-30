import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string ;

  constructor(private _authSvc: AuthService) { }

  loginClick() {
    this._authSvc.login(this.email, this.password).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.email = this.password = '';
  }

}
