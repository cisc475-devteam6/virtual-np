import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SymptomsAPIService {
  // required headers to make HTTP requests to the API
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
    'x-rapidapi-key': env.symptomApiKey
  });

  constructor(private http: HttpClient) {}

  // return the observable from the HTTP get for all body locations (we subscribe to the observable in the component)
  public getBodyLocations() {
    const params = new HttpParams()
      .set('language', 'en-gb');
    const url = 'https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations';
    return this.http.get<any>(
      url,
      {
        headers: this.headers,
        params
      }
    );
  }

  // return the observable from the HTTP get for all body sublocations given a body location (ID) (we subscribe in the component)
  public getBodySublocations(id: number) {
    const params = new HttpParams()
      .set('language', 'en-gb')
      .set('locationid', id.toString());
    const url = 'https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations';
    return this.http.get<any>(url, { headers: this.headers, params });
  }

  // return the observable from the HTTP get for all symptoms given a body sublocation (ID) (we subscribe in the component)
  public getSymptoms(sublocationID: number) {
    const params = new HttpParams()
      .set('language', 'en-gb')
      .set('locationid', sublocationID.toString())
      .set('selectorstatus', 'man');
    const url = 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms';
    return this.http.get<any>(url, { headers: this.headers, params });
  }
}
