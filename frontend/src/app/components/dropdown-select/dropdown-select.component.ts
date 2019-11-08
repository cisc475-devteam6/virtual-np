import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  public bodyParts: string[] = ["Head", "Arms", "Leg", "Torso", "Skin"];

  constructor() { }

  ngOnInit() {
  }

}
