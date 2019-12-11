import { Injectable } from '@angular/core';
import { UserService } from '../../security/services/user.service';
import { Page } from '../models/page'

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private authPages: Array<Page> = [
    {
      name: 'Landing Page',
      route: '/landing-page'
    },
    {
      name: 'Chat',
      route: '/user-chat'
    }
  ];
  private noAuthPages: Array<Page> = [
      {
        name: 'Sign Up',
        route: '/sign-up'
      },
      {
        name: 'Sign in',
        route: '/sign-in'
      },
    ];
  private isLoggedIn: boolean = false;

  constructor(private userService: UserService) {
    this.userService.status.subscribe((status) => this.isLoggedIn = status);
  }

  public getPages() {
    return this.isLoggedIn ? this.authPages : this.noAuthPages
  }
}
