import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  });

  it('should be created', 
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('login()', () => {
    it('should login a user successfully correctly',
      fakeAsync( 
        inject(
          [AuthService, HttpTestingController] ,
          (service: AuthService, backend: HttpTestingController) => {
            const url = 'http://localhost:3000/api/auth/login';
            const responseObject = {
              name: 'John Doe',
            };
            const userName ='test@example.com';
            const password ='testpassword';
            let response = null;

            service.login(userName, password).subscribe(
              (receivedResponse: any) => {
                response = receivedResponse;
              },
              (error: any) => {}
            );
            const requestWrapper = backend.expectOne({
              url: 'http://localhost:3000/api/auth/login'
            });
            requestWrapper.flush(responseObject);

            tick();
            expect(requestWrapper.request.method).toEqual('POST');
            expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
            // expect(response.body).toEqual(responseObject);
            // expect(response.status).toBe(200);
          })));
  })

  describe('register()', () => {
    it('should register a user successfully correctly',
      fakeAsync( 
        inject(
          [AuthService, HttpTestingController] ,
          (service: AuthService, backend: HttpTestingController) => {
            const url = 'http://localhost:3000/api/auth/register';
            const responseObject = {
              name: 'John Doe',
            };
            const userName ='test@example.com';
            const firstName ='John';
            const lastName ='Doe';
            const password ='testpassword';
            const passwordC ='testpassword';
            const gender = 'male';
            const age = 20;
            let response = null;

            service.register(
              userName,
              password,
              passwordC,
              firstName,
              lastName,
              gender,
              age
            ).subscribe(
              (receivedResponse: any) => {
                response = receivedResponse;
              },
              (error: any) => {}
            );
            const requestWrapper = backend.expectOne({
              url: 'http://localhost:3000/api/auth/register'
            });
            requestWrapper.flush(responseObject);

            tick();
            expect(requestWrapper.request.method).toEqual('POST');
            expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
            // expect(response.body).toEqual(responseObject);
            // expect(response.status).toBe(200);
          })));
  })

  describe('logout()', () => {
    it('Should remove the user from local storage', 
      fakeAsync(
        inject(
          [AuthService, HttpTestingController] ,
          (service: AuthService, backend: HttpTestingController) => {
            localStorage.setItem('user', '{"name":"John Doe"}');
            expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
            service.logout();
            expect(localStorage.getItem('user')).toEqual(null);
          })));
  });


});
