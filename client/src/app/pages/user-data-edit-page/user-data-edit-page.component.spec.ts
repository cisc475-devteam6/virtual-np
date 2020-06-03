import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataEditPageComponent } from './user-data-edit-page.component';

describe('UserDataEditPageComponent', () => {
  let component: UserDataEditPageComponent;
  let fixture: ComponentFixture<UserDataEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 