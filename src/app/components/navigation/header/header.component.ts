import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/models/Page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: String;
  @Input() pages: Page[];

  constructor() { }

  ngOnInit() {
  }

}
