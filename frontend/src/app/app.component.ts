import { Component, OnInit  } from '@angular/core';
import { Page } from './navigation/models/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  public pages: Page[];


  constructor() { }

  ngOnInit() {
    this.title = 'Melanie Hurst';
  }
}
