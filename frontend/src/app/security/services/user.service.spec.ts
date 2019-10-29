import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    // service = TestBed.get(UserService);
  });

  it('should create the service', 
    inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('setUser()', () => {
    it('should add a user to localStorage',
      inject([UserService], (service: UserService) => {
        service.setUser({'name' : 'John Doe'});
        expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
      })
    );
    it('should remove a user from localStorage',
      inject([UserService], (service: UserService) => {
        localStorage.setItem('user', '{"name":"John Doe"}');
        expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
        service.setUser(null);
      })
    );
  });

  describe('getUser()', () => {
    it('should return stored user from localStorage',
      inject([UserService], (service: UserService) => {
        localStorage.setItem('user', '{"name":"John Doe"}');
        expect(service.getUser().name).toEqual('John Doe');
      })
    );
  });

  describe('removeUser()', () => {
    it('should remove stored user from localStorage',
      inject([UserService], (service: UserService) => {
        localStorage.setItem('user', '{"name":"John Doe"}');
        expect(localStorage.getItem('user')).toEqual('{"name":"John Doe"}');
        service.removeUser();
        expect(localStorage.getItem('user')).toEqual(null);
      })
    );
  });
});
