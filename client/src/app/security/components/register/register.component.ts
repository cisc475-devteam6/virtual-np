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
  passwordC: string; 
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  matched: boolean;

  constructor(private _authSvc: AuthService) { }

  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[]= [];
  registerClick() {
    this._authSvc.register(
      this.email,
      this.password,
      this.passwordC,
      this.firstName,
      this.lastName,
      this.gender,
      this.age
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = '';
    this.age = 0;
    for (var i = 18;  i < 100; i++){
      this.ages.push(i);
    }
  }

  passwordMatch() {
    this.matched =  this.password !== this.passwordC;

  }

  

}

