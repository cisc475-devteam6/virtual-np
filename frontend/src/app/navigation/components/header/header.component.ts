import { Component, OnInit, Input } from "@angular/core";
import { PagesService } from '../../../pages/services/pages.service'
import { UserService } from '../../../security/services/user.service'
import { AuthService } from '../../../security/services/auth.service'
import { Page } from '../../../pages/models/page'
import {Router} from '@angular/router';

// TODO: Toggle sidnav, emit event when toggled on/off

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  pages: Array<Page>;
  isLoggedIn: boolean = false;
  dropdownVisible: boolean = false;

  constructor(
    private _pagesService: PagesService,
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.pages = this._pagesService.getPages();
    this._userService.status.subscribe((status) => {
      this.pages = this._pagesService.getPages();
      this.isLoggedIn = status;
    });
    this._router.events.subscribe(val => {
      this.dropdownVisible = false;
    })
  }
  onToggleSidenav() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  logout() {
    this._authService.logout();
  }
}
