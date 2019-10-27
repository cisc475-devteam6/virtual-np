import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private _http: HttpClient, private _userSvc: UserService) { }

  public login(userName: string, password: string, client: string) {
    return this._http.post(
      'http://localhost:3000/api/auth/login',
      { email: userName, password: password, clientid: client },
      { headers: this.headers}
    ).pipe(map((user: any) => {
      this._userSvc.setUser(user);
      return user;
    }));
  }

  public logout() {
    this._userSvc.removeUser();
  }

}
