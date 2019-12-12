import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

  // required headers to make HTTP requests to the API
  private headers = new HttpHeaders({
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
		"x-rapidapi-key": "39005a4e53mshd68d48c5674370dp12ad63jsnf044c0e1708d"
  });

  constructor(private http: HttpClient) { }

  // return the observable from the HTTP get for all body locations (we subscribe to the observable in the component)
  public getBodyLocations() {

    return this.http.get<any>("https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb", {headers:this.headers});

  }

  // return the observable from the HTTP get for all body sublocations given a body location (ID) (we subscribe in the component)
  public getBodySublocations(id: number) {
    let url: string = "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations/" + id.toString() + "?language=en-gb";
    return this.http.get<any>(url, {headers:this.headers});
  }


  // return the observable from the HTTP get for all symptoms given a body sublocation (ID) (we subscribe in the component)
  public getSymptoms(sublocationID: number) {

    let url: string = "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms/" + sublocationID.toString() + "/man?language=en-gb";
    return this.http.get<any>(url, {headers: this.headers});

  }
  

}
