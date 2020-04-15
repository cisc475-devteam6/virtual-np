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
  gender: string;
  age: number;

  constructor(private _authSvc: AuthService) { }

  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[]= [];
  registerClick() {
    this._authSvc.register(
      this.email,
      this.password,
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
    this.email = this.password = this.firstName = this.lastName = this.gender ='';
    this.age = 0;
    for (var i = 18;  i < 100; i++){
      this.ages.push(i);
    }
  }

}

