import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../../../pages/models/page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() pages: Page[];

  constructor() { }

  ngOnInit() { }

}
