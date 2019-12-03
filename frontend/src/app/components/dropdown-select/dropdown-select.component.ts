import { Component, OnInit } from '@angular/core';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  public bodyParts: string[] = ["Head", "Arms", "Leg", "Torso", "Skin"];
  public symptoms: string[] = [];
  public addedSymptoms: string[] = [];
  public hiddenHeader: boolean = true;
  public tempSymptom: string;
  public chosenBodyPart: string;

  constructor(public myAPISvc: SymptomsAPIService) { 
    this.bodyParts = myAPISvc.getBodyLocations();
  }

  ngOnInit() {
  }

  refreshOptions() {
    this.symptoms = this.myAPISvc.getSymptoms(this.chosenBodyPart);
  }

  prepSymptom(sel: any) {
    this.tempSymptom = sel;
  }

  getBodyPart(sel: any) {
    this.chosenBodyPart = sel;
  }

  addSymptom() {
    this.addedSymptoms.push(this.tempSymptom);
    this.hiddenHeader = false;
  }

}
