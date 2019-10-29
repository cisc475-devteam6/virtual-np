import { Component, OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

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
