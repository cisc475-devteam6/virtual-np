import { Injectable  } from "@angular/core";
import { UserService } from "./user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router'

@Injectable({
  providedIn: "root"
})
export class AuthService {

  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(
    private router: Router,
    private _http: HttpClient,
    private _userSvc: UserService
  ) {}

  public login(email: string, password: string) {
     return this._http
       .post(
         "http://localhost:3000/api/auth/login",
         { email: email, password: password },
         { headers: this.headers }
       )
       .pipe(
         map((user: any) => {
           this._userSvc.setUser(user);
           this.router.navigate(['landing-page']);
           return user;
         })
       );
  }

  public logout() {
    this._userSvc.removeUser();
    this.router.navigate(['sign-in']);
  }

  public register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return this._http
      .post(
        "http://localhost:3000/api/auth/register",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password
        },
        { headers: this.headers }
      )
      .pipe(
        map((user: any) => {
          this._userSvc.setUser(user);
          return user;
        })
      );
  }

  public isLoggedIn() {
    return localStorage.getItem('user') != null;
  }

}
