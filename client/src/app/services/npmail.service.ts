import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NPmailService {

  constructor(private _http: HttpClient) {}
 
  sendSignUpMessage(email: string) {
    return this._http
     .post(
	'http://localhost:3000/sendmail',
	{
	email: email, 
	subj: 'Account Creation', 
	message : 'Hello, Thank you for creating an account at virtual-np.'
	});
  }

  sendMessage(email: string) {
    return this._http
     .post(
	'http://localhost:3000/sendmail',
	{
	  email: email, subj: 'Test', message : 'hello!'
	});
  }
}
