import { Component, OnInit, Input } from "@angular/core";
import { PagesService } from '../../../pages/services/pages.service'
import { UserService } from '../../../security/services/user.service'
import { AuthService } from '../../../security/services/auth.service'
import { Page } from '../../../pages/models/page'
import { first } from 'rxjs/operators';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  pages: Array<Page>;
  isLoggedIn: boolean = false;

  constructor(
    private pagesService: PagesService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.pages = this.pagesService.getPages();
    this.userService.status.subscribe((status) => {
      this.pages = this.pagesService.getPages();
      this.isLoggedIn = status;
    });
  }

  ngOnInit() {
    // this.pages =this.pagesService.getPages()
  }
  onToggleSidenav() {}

  logout() {
    this.authService.logout();
  }
}
