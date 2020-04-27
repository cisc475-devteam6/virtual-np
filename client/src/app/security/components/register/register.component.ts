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
  passwordC: string; 
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  birthdate: string;
  matched: boolean;

  constructor(private _authSvc: AuthService) { }

  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[] = [];
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    var date = new Date(`${event.value}`);
    this.birthdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    console.log(date.getMonth() + 1);
    console.log(date.getDate());
    console.log(date.getFullYear());
  }
  registerClick() {
    console.log(this.birthdate);
    this._authSvc.register(
      this.email,
      this.password,
      this.passwordC,
      this.firstName,
      this.lastName,
      this.gender,
      this.birthdate
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }
  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = this.birthdate = '';
  }

  passwordMatch() {
    this.matched =  this.password !== this.passwordC;
  }

  

}

