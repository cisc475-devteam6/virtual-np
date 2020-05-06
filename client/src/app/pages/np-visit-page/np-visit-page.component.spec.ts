import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpVisitPageComponent } from './np-visit-page.component';

describe('NpLandingPageComponent', () => {
    let component: NpVisitPageComponent;
    let fixture: ComponentFixture<NpVisitPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NpVisitPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NpVisitPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});