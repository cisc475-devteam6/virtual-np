import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatPageComponent } from './admin-chat-page.component';

describe('AdminChatPageComponent', () => {
  let component: AdminChatPageComponent;
  let fixture: ComponentFixture<AdminChatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
