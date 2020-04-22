import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
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
  birthdate: string;

  constructor(private _authSvc: AuthService) { }

  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[] = [];
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.birthdate = `${event.value}`
  }
  registerClick() {
    console.log(this.birthdate);
    this._authSvc.register(
      this.email,
      this.password,
      this.firstName,
      this.lastName,
      this.gender,
      this.age,
      this.birthdate
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = '';
    this.age = 0;
    for (var i = 18; i < 100; i++) {
      this.ages.push(i);
    }
  }
}

