import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

    // createChat(): Observable<Cat[]> {
    //   return this.http.post<Cat[]>('http://localhost:3000/chat')
    // }

    // Uses http.get() to load data from a single API endpoint
    getChat() {
      return this.http.get('http://localhost:3000/chat/');
  }

}
