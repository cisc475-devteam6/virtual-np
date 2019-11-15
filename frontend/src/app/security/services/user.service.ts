import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  status: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() {
    this.status.next(this.getUser() != null);
  }

  // Add or remove user to/from local memory
  setUser(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.user));
      localStorage.setItem('token', JSON.stringify(user.token));
      this.status.next(true);
    } else {
      localStorage.removeItem('user');
      this.status.next(false);
    }
  };

  // Get user from local memory
  getUser = () => JSON.parse(localStorage.getItem('user'));

  // Get token from local memory
  getToken = () => JSON.parse(localStorage.getItem('token'));

  // Remove user from local memory
  removeUser = () => this.setUser(null);

}
