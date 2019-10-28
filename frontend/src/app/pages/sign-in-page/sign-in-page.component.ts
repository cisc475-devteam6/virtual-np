import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  constructor(public myapp: AppComponent) {
    this.myapp.pages.length = 0;
    this.myapp.pages = [
      {
	name: 'Sign Up',
	route: '/sign-up'
      },
      {
	name: 'Sign in',
	route: '/sign-in'
      },
      {
  name: 'Landing Page',
  route: '/landing-page'
      }
    ];
   }

  ngOnInit() {
  }

}
