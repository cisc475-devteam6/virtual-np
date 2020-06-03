import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TermsComponent} from'../../../components/terms/terms.component'
import { MatDialog } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NPmailService } from '../../../services/npmail.service';
import * as $ from 'jquery'
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
  checked: boolean;

  constructor(private _authSvc: AuthService, private _mailSvc: NPmailService, public dialog: MatDialog) { }


  genders: string[] = [
    'Male', 'Female'
  ];
  ages: number[] = [];
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    var date = new Date(`${event.value}`);
    this.birthdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  }
  registerClick() {
    $('#termsE').text(
      'You must agree terms and conditions'
    );
    this._authSvc.register(
      this.email,
      this.password,
      this.passwordC,
      this.firstName,
      this.lastName,
      this.gender,
      this.birthdate,
      this.checked,
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
    this._mailSvc.sendSignUpMessage(
	this.email
    ).subscribe(
      data => console.log('Data:' + data),
      err => console.log(err)
    );
  }

  isChecked() {
    this.checked = !this.checked;
    console.log(this.checked);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TermsComponent, {
      width: '70%',
      data: { name: "termsCondition", color: "black" }
    });
  }
  ngOnInit() {
    this.email = this.password = this.firstName = this.lastName = this.gender = this.passwordC = '';
    this.checked = false;
    for (var i = 18;  i < 100; i++){
      this.ages.push(i);
    }
  }
  passwordMatch() {
    this.matched =  this.password !== this.passwordC;
  }


}

