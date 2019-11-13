import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Page } from 'src/app/models/Page';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

    constructor(public myapp: AppComponent) { 
        this.myapp.pages.length = 0;
        this.myapp.pages = [
            {
                name: 'User Profile',
                route: ''
            },
            {
                name: 'Chat',
                route: '/user-chat'
            }
        ];
    }

    ngOnInit() {
    }

}
