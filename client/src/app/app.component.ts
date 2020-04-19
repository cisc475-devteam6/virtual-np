import { Component, OnInit  } from '@angular/core';
import { Page } from './pages/models/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
    pages: any;
  newProperty: any;


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
      },
      {
  name: 'User Chat Page',
  route: '/user-chat'
      },
      {
  name: 'Admin Chat Page',
  route: '/admin-chat'
      },
      {
  name: 'User Data Page',
  route: '/user-data-page'
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
  name: 'User Chat Page',
  route: '/user-chat'
      },
      {
  name: 'Admin Chat Page',
  route: '/admin-chat'
      },
      {
  name:'User Data Page',
  route: '/user-data-page'
      }
    ];
  }
}
