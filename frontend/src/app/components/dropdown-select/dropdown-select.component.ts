import { Component, OnInit } from '@angular/core';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  public bodyParts: string[] = ["Head", "Arms", "Leg", "Torso", "Skin"];

  constructor(public myAPISvc: SymptomsAPIService) { }

  ngOnInit() {
  }

  refreshOptions() {
    document.getElementById("label").innerHTML = "Select Symptom";
    this.bodyParts = [];
    this.myAPISvc.getSymptoms().forEach(x => {
      this.bodyParts.push(x);
    });
    document.getElementById("submit").innerHTML = "Submit";
    document.getElementById("default").innerHTML = "Select Symptom";
  }

}
