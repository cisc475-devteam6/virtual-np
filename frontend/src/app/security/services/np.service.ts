import { Injectable } from '@angular/core';
import { UserService } from "./user.service";
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpService {
  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  constructor(private _userSvc: UserService) {
    let isLoggedIn = false;
    this._userSvc.status.subscribe((status) => {
      isLoggedIn = status
      if (isLoggedIn) {
        let user = this._userSvc.getUser();
        if (user) 
          this.status.next(user.role == 'Admin');
      } else {
        this.status.next(false);
      }
    });
  }

}
