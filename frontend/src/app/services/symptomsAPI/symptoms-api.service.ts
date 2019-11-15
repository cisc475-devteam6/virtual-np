import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

  constructor() { }

  public getSymptoms(): string[] {
    return ["Headache", "Stomachache", "Rash"];
  }

}
