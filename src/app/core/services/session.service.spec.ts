import {inject, TestBed} from '@angular/core/testing';
import {mockLogin} from '../../../assets/mock-data/login';
import {SessionService} from './session.service';
import {CookieService} from 'ngx-cookie-service';

describe('SessionService', () => {

  let service: SessionService;
  let cookieService: jasmine.SpyObj<CookieService>;

  beforeEach(() => {
    cookieService = jasmine.createSpyObj(
      'CookieService',
      ['delete', 'set', 'get']
    );

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SessionService,
        // CookieService
        {
          provide: CookieService, useValue: cookieService
        },
      ]
    });
    // injects the service
    service = TestBed.get(SessionService);
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('user');
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([SessionService], (serviceAnother: SessionService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  describe('Test user', () => {
    it('should get user from local storage', () => {
      localStorage.setItem('user', JSON.stringify(mockLogin.user));
      expect(service.user).toEqual(mockLogin.user);
    });

    it('should set user to local storage', () => {
      service.user = mockLogin.user;
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(mockLogin.user));
      service.user = null;
      expect(localStorage.getItem('user')).toBeFalsy();
    });
  });

  describe('Test token', () => {
    it('should get token from cookies', () => {
      const a = service.token;
      expect(cookieService.get).toHaveBeenCalled();
    });

    it('should set token to cookies', () => {
      service.token = mockLogin.token;
      expect(cookieService.set).toHaveBeenCalled();
      service.token = null;
      expect(cookieService.delete).toHaveBeenCalled();
    });
  });

});
