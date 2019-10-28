import { Component, OnInit  } from '@angular/core';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  public pages: Page[];

  private readonly newProperty = this.title = 'Melanie Hurst';

  constructor() {
    this.newProperty;
    this.pages = [
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
    this.pages = [
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
      },
      {
        name: 'Visit Page',
        route: '/visit-page'
      }
    ];
  }
}
