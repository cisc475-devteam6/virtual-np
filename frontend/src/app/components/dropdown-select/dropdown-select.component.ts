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

  constructor(public myAPISvc: SymptomsAPIService) { }

  ngOnInit() {
  }

  refreshOptions() {
    this.symptoms = this.myAPISvc.getSymptoms();
  }

  prepSymptom(sel: any) {
    this.tempSymptom = sel;
  }

  addSymptom() {
    this.addedSymptoms.push(this.tempSymptom);
    this.hiddenHeader = false;
  }

}
