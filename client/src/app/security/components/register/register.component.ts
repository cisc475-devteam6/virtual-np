import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { TermsComponent} from'../../../components/terms/terms.component'
import { MatDialog } from '@angular/material';

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
  checked: boolean;

  constructor(private _authSvc: AuthService, public dialog: MatDialog) { }


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
    this.age = 0;
    this.checked = false;
    for (var i = 18;  i < 100; i++){
      this.ages.push(i);
    }
  }

  passwordMatch() {
    this.matched =  this.password !== this.passwordC;

  }

  

}

