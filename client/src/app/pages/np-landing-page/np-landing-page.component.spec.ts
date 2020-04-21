import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpLandingPageComponent } from './np-landing-page.component';

describe('NpLandingPageComponent', () => {
  let component: NpLandingPageComponent;
  let fixture: ComponentFixture<NpLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
