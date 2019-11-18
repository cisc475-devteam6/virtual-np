import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

  private headers = new HttpHeaders({
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
  });

  constructor(private http: HttpClient) { }

  /*
  var req = unirest("GET", "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms");
    req.query({
      "format":"json",
      "language":"en-gb"
    });
    req.headers({
      "x-rapidapi-host":"priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key":"SIGN-UP-FOR-KEY"
    });
    req.end(function(res) {
      if (res.error) throw new Error(res.error);
      symptoms = res.body;
    })
    return symptoms;
  */

  
  /*
  public getSymptoms() {
    let symptoms: string[];

    let result = this.http.get<string[]>("priaid-symptom-checker-v1.p.rapidapi.com/symptoms/").pipe(map(data => {
      console.log(data);
    })).subscribe(result =>{
      console.log(result);
    });
    console.log(result);
    return symptoms;
  }
  */

  public getSymptoms() {
    return this.http.get<any>("priaid-symptom-checker-v1.p.rapidapi.com/symptoms/", {headers:this.headers}).toPromise().then(response => {
      let data = response;
      console.log(data);
      return data;
    });
  }
}
