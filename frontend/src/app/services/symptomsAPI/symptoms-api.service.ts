import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

  private headers = new HttpHeaders({
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
		"x-rapidapi-key": "39005a4e53mshd68d48c5674370dp12ad63jsnf044c0e1708d"
  });

  constructor(private http: HttpClient) { }

  private bodyIDs: number[] = [];
  private locations: string[] = [];
  private symptoms: string[] = [];

  public getBodyLocations() {
    this.http.get<any>("https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb", {headers:this.headers}).subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        this.locations.push(data[i].Name);
        this.bodyIDs.push(data[i].ID);
      }
    });
    return this.locations;
  }

  /*
  public getSymptoms(bodyPart: string) {
    let names: string[] = this.getBodySublocations(bodyPart);
    let bodySublocations: any[] = this.getBodySublocations(bodyPart);
    let id: number = 0;
    id = bodySublocations[bodySublocations.length - 1];
    for(let i = 0; i < bodySublocations.length; i++) {
      console.log(bodySublocations[i]);
    }
    let url: string = "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/" + id.toString() + "/man?language=en-gb";
    this.http.get<any>(url, {headers:this.headers}).subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        names.push(data[i].Name);
      }
    });
    return [];
  }
  */

  /*
  public getSymptoms(a: string) {
    this.getBodySublocations('a');
    return [];
  }
  */

  public getSymptoms(bodyPart: string) {
    console.log("getSymptoms called");
    let sublocations: any[] = [];
    let subIDs: any[] = [];
    let id: number = 0;
    for(let i = 0; i < this.locations.length; i++) {
      if(this.locations[i] === bodyPart){
        id = this.bodyIDs[i];
      }
    }
    let idString: string = id.toString();
    let url: string = "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/"+idString+"?language=en-gb";
    console.log("beginning get");
    this.http.get<any>(url, {headers: this.headers}).subscribe(data => {
      console.log("looping over result object");
      for(let i = 0; i < data.length; i++) {
        sublocations.push(data[i].Name);
        subIDs.push(data[i].ID);
      }
      console.log("returning");
      return sublocations;
    });
  }
  

}
