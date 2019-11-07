import { Injectable } from '@angular/core';
import { UserService } from '../../security/services/user.service';
import { Page } from '../models/page'

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  avalaliblePages: Array<Page>;
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {
    this.userService.status.subscribe((status) => this.isLoggedIn = status);
  }

  public getPages() {
    if (this.isLoggedIn) {
      return [
        {
          name: 'Landing Page',
          route: '/landing-page'
        }
      ];
    }
    return [
      {
        name: 'Sign Up',
        route: '/sign-up'
      },
      {
        name: 'Sign in',
        route: '/sign-in'
      },
    ]
  }
}
