import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';


import {ApiUrls} from '../api-urls';
import {mockLogin} from '../../../assets/mock-data/login';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {ProfileService} from './profile.service';
import {User} from '../models/user';
import {SessionService} from './session.service';
import {Router} from '@angular/router';

describe('ProfileService', () => {

  let service: ProfileService;
  let httpTestingController: HttpTestingController;
  let sessionService: jasmine.SpyObj<SessionService>;
  let router: jasmine.SpyObj<Router>;

  const testRequestFunction = (
    functionName,
    url,
    type,
    mockData,
    resData,
    ...params) => {
    describe(`Testing #${functionName}`, () => {

      it(`#${functionName}: should return data of`, () => {
        // function should have made one request and equaled result data
        service[functionName](...params).subscribe(data => {
          expect(data).toEqual(resData);
        });

        // The following `expectOne()` will match the request's URL.
        const req = httpTestingController.expectOne(url);

        // Assert the request type ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
        expect(req.request.method).toBe(type);

        // Respond with the mock data
        req.flush(mockData);
      });

      it(`#${functionName}: can test for 404 error`, () => {
        const emsg = 'deliberate 404 error';
        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.status).toEqual(404, 'status');
            expect(error.error).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Respond with mock error
        req.flush(emsg, {status: 404, statusText: 'Not Found'});
      });

      it(`#${functionName}: can test for network error`, () => {
        const emsg = 'simulated network error';

        // function should have made one request and get respond fail
        service[functionName](...params).subscribe(
          data => fail,
          (error: HttpErrorResponse) => {
            expect(error.error.message).toEqual(emsg, 'message');
          }
        );

        const req = httpTestingController.expectOne(url);
        expect(req.request.method).toBe(type);

        // Create mock ErrorEvent, raised when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc
        const mockError = new ErrorEvent('Network error', {
          message: emsg,
        });

        // Respond with mock error
        req.error(mockError);
      });
      // auth
      // it(`#${functionName}: should emit 'false' for 401 Unauthorized`, () => {
      //
      //   service[functionName](mockData).subscribe((next) => {
      //     expect(next).toBeTruthy();
      //   });
      //
      //   const req = httpTestingController.expectOne(url);
      //   expect(req.request.method).toBe(type);
      //   req.flush(null, {status: 401, statusText: 'Unauthorized'});
      // });
    });
  };

  beforeEach(() => {
    const sessionSpy = jasmine.createSpyObj(
      'SessionService',
      ['user', 'setUser', 'token']
    );
    // sessionSpy.isLoggedIn = sessionIsLoggedIn;

    const routerSpy = jasmine.createSpyObj(
      'Router',
      ['navigate']
    );
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProfileService,
        HttpClient,
        HttpErrorHandler,
        MessageService,
        {provide: SessionService, useValue: sessionSpy},
        {provide: Router, useValue: routerSpy}
      ]
    });
    // injects the service
    service = TestBed.get(ProfileService);
    httpTestingController = TestBed.get(HttpTestingController);
    sessionService = TestBed.get(SessionService);
    router = TestBed.get(Router);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    // httpTestingController.verify();
  });

  // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([ProfileService], (serviceAnother: ProfileService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // test functions
  const mockUser = mockLogin.user as User;
  const newUser = {username: 'Andy'};
  const newPassword = {new_password1: 'qwerty123', new_password2: 'qwerty123'};
  const mockDetail = {detail: 'some detail text'};
  let testUrl;

  testUrl = ApiUrls.profile;
  testRequestFunction('getProfile', testUrl, 'GET', mockUser, mockUser);

  // testUrl = ApiUrls.profile;
  // testRequestFunction('updateProfile', testUrl, 'PATCH', mockUser, mockUser, newUser);

  testUrl = ApiUrls.changePassword;
  testRequestFunction('getChangePassword', testUrl, 'POST', mockDetail, mockDetail, newPassword);

});
