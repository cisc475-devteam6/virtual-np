import { Injectable } from '@angular/core';

var unirest = require("unirest");

@Injectable({
  providedIn: 'root'
})
export class ApiMedicService {
  baseUri: "priaid-symptom-checker-v1.p.rapidapi.com";
  bodyParts: [];
  symptoms: [];
  
  req.headers({
    "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
    "x-rapidapi-key": "39005a4e53mshd68d48c5674370dp12ad63jsnf044c0e1708d"
  });
  
  constructor(baseAPIUri: string) {
    this.baseUri = baseAPIUri;
  }
  
  getSymptoms(){
    this.symptoms = this.baseUri + '/symptoms';
      
}


var req = unirest("GET", "https://priaid-symptom-checker-v1.p.rapidapi.com");

req.query({
	"language": "en-gb"
});



req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});