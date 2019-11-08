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
      localStorage.setItem('user', JSON.stringify(user));
      this.status.next(true);
    } else {
      localStorage.removeItem('user');
      this.status.next(false);
    }
  };

  // Get user from local memory
  getUser = () => JSON.parse(localStorage.getItem('user'));

  // Remove user from local memory
  removeUser = () => this.setUser(null);

}
