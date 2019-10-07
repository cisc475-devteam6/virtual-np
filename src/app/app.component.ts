import { Component, OnInit  } from '@angular/core';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:String;
  pages: Page[];

  ngOnInit() {
    this.title = 'Melanie Hurst';
    this.pages = [
      {
        name: 'Sign Up',
        route: '/sign-up'
      },
      {
        name: 'Sign in',
        route: '/sign-in'
      }
    ]
  }
}
