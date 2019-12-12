import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatPageComponent } from './user-chat-page.component';

describe('UserChatPageComponent', () => {
  let component: UserChatPageComponent;
  let fixture: ComponentFixture<UserChatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
