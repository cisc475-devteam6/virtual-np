import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//var unirest = require("unirest");

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {

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

  public getSymptoms() {
    let symptoms: string[];

    let result = this.http.get<string[]>("priaid-symptom-checker-v1.p.rapidapi.com/symptoms/");
    console.log(result);
    return symptoms;
  }

}
