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

  public test() {
    return this._http
    .get<any>(
      "http://localhost:3000/api/stuff/info",
      { headers: this.headers }
    ).toPromise()
    .then(response => {
      let data = response;
      console.log(data);
      return data;
    });
  }

  public np_login(email: string, password: string) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/login",
      { email: email, password: password },
      { headers: this.headers }
    )
    .pipe(
      map((user: any) => {
        this._userSvc.setUser(user);
        this.router.navigate(['np-landing-page']);
        return user;
      })
    );
  }

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
    passwordC: string,
    firstName: string,
    lastName: string,
    gender: String,
    birthdate: String

  ) {
    return this._http
    .post(
      "http://localhost:3000/api/auth/register",
      {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        passwordC: passwordC,
        gender: gender,
        birthdate: birthdate
      },
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

}
