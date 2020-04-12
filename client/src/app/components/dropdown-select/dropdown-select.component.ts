import { Component, OnInit } from '@angular/core';
import { SymptomsAPIService } from '../../services/symptomsAPI/symptoms-api.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  public disabledBody = true;
  public disabledSymptoms = true;

  public bodyPartsObservable: any;
  public bodyParts: string[] = [];
  public bodyIDs: number[] = [];

  public chosenBodyLocation: string;

  public subLocationsObservable: any;
  public sublocations: string[] = [];
  public subIDs: number[] = [];

  public symptomsObservables: any[] = [];
  public symptoms: string[] = [];

  public tempSymptom: string;
  public addedSymptoms: string[] = [];
  public hiddenHeader = true;

  constructor(public myAPISvc: SymptomsAPIService) {
    this.bodyPartsObservable = myAPISvc.getBodyLocations();
    this.bodyPartsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.bodyParts.push(data[i].Name);
        this.bodyIDs.push(data[i].ID);
      }
      this.disabledBody = false;
    });
  }

  ngOnInit() {
  }

  getBodyPart(sel: any) {
    this.chosenBodyLocation = sel;
  }

  getSublocations() {

    // First clear sublocations and sublocation IDs
    this.sublocations = [];
    this.subIDs = [];
    this.disabledSymptoms = true;

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
    this.subLocationsObservable.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.sublocations.push(data[i].Name);
        this.subIDs.push(data[i].ID);
      }
      this.getSymptoms(chosenbodyPartID);
    });
  }

  getSymptoms(chosenbodyPartID: number) {

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
        this.disabledSymptoms = false;
    });

  }

  prepSymptom(sel: any) {
    this.tempSymptom = sel;
  }

  addSymptom() {
    this.addedSymptoms.push(this.tempSymptom);
    this.hiddenHeader = false;
  }

}
