import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

  private headers = new HttpHeaders({
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
		"x-rapidapi-key": "39005a4e53mshd68d48c5674370dp12ad63jsnf044c0e1708d"
  });

  constructor(private http: HttpClient) { }

  public getSymptoms() {
    let names: string[];
    this.http.get<any>("https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms", {headers:this.headers}).toPromise().then(response => {
      let data = response;
      console.log(data);
      names.push(data);
    });
    return names;
  }
}
