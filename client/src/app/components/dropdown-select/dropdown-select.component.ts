import { Component, OnInit } from '@angular/core';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  private disabledBody = true;
  private disabledSubBody = true;
  private disabledSymptoms = true;

  private bodyPartsObservable: any;
  private bodyParts: string[] = [];
  private bodyIDs: number[] = [];

  private chosenBodyLocation: string;
  private chosenSubBodyLocation: string;

  private subLocationsObservable: any;
  private sublocations: string[] = [];
  private subIDs: number[] = [];

  private symptomsObservables: any[] = [];
  private symptoms: string[] = [];

  private tempSymptom: string;
  private addedSymptoms: string[] = [];
  private hiddenHeader = true;

  constructor(private myAPISvc: SymptomsAPIService) {
    this.bodyPartsObservable = myAPISvc.getBodyLocations();
    this.bodyPartsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.bodyParts.push(data[i].Name);
        this.bodyIDs.push(data[i].ID);
      }
      this.disabledBody = false;
    });
    //console.log(this.bodyParts);
    //console.log("DropdownSelectComponent -> constructor -> bodyParts", this.bodyIDs);
  }

  ngOnInit() {
  }


  getSublocationSymptoms() {
    // Find id
    let chosenSubBodyPartID: number;
    for (let i = 0; i < this.sublocations.length; i++) {
      if (this.chosenSubBodyLocation === this.sublocations[i]) {
        chosenSubBodyPartID = i;
        break;
      }
    }
    //console.log("sublocation id: " + chosenbodyPartID);
    this.getSymptoms(chosenSubBodyPartID);
  }

  getSublocations() {

    // First clear sublocations and sublocation IDs
    this.sublocations = [];
    this.subIDs = [];
    this.disabledSubBody = false;

    // Find id
    let chosenbodyPartID: number;
    for (let i = 0; i < this.bodyParts.length; i++) {
      if (this.chosenBodyLocation === this.bodyParts[i]) {
        chosenbodyPartID = i;
        break;
      }
    }
    // get the observable for sublocations from the chosen body location
    this.subLocationsObservable = this.myAPISvc.getBodySublocations(this.bodyIDs[chosenbodyPartID]);
    //console.log(this.bodyIDs[chosenbodyPartID]);
    this.subLocationsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.sublocations.push(data[i].Name);
        this.subIDs.push(data[i].ID);
      }
    });
  }

  getSymptoms(chosenbodyPartID: number) {

    this.disabledSymptoms = false;

    // First, clear our existing symptoms and observables
    this.symptomsObservables = [];
    this.symptoms = [];

    // get a symptoms observable for every sublocation
    let thisObservable = this.myAPISvc.getSymptoms(this.subIDs[chosenbodyPartID]);
    this.symptomsObservables.push(thisObservable);

    // loop over every observable and gets its symptoms, pushing them into the symptoms list
    thisObservable.subscribe(data => {
        for (let j = 0; j < data.length; j++) {
          this.symptoms.push(data[j].Name);
        }
    });

  }

  getBodyPart(sel: any) {
    this.chosenBodyLocation = sel;
  }

  getSubBodyPart(sel: any) {
    this.chosenSubBodyLocation = sel;
  }

  prepSymptom(sel: any) {
    this.tempSymptom = sel;
  }

  addSymptom() {
    this.addedSymptoms.push(this.tempSymptom);
    this.hiddenHeader = false;
  }

}
