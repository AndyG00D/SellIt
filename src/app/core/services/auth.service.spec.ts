import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {inject, TestBed} from '@angular/core/testing';
import {ApiUrls} from '../api-urls';
import {mockProducts} from '../../../assets/mock-data/products';
import {mockLogin} from '../../../assets/mock-data/login';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {SessionService} from './session.service';
import {ProfileService} from './profile.service';
import {AuthService as SocialAuthService} from 'angular5-social-login';
import {SignInUser, SignUpUser} from '../models/auth';

describe('AuthService', () => {

  let service: AuthService;
  let httpTestingController: HttpTestingController;

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
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthService,
        HttpClient,
        HttpErrorHandler,
        MessageService,
        ProfileService,
        {
          provide: SessionService, useValue: jasmine.createSpyObj(
            'SessionService',
            ['user', 'setUser', 'token']
          )
        },
        {
          provide: Router, useValue: jasmine.createSpyObj(
            'Router',
            ['navigate']
          )
        },
        {
          provide: SocialAuthService, useValue: jasmine.createSpyObj(
            'SocialAuthService',
            ['signIn']
          )
        },
      ]
    });

    // injects the service
    service = TestBed.get(AuthService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  // // test service
  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  it('should be created', inject([AuthService], (serviceAnother: AuthService) => {
    expect(serviceAnother).toBeTruthy();
  }));

  // configs
  const mockDetail = {detail: 'some text message'};
  let testUrl;

  // getRestAuthGoogle
  testUrl = ApiUrls.google;
  testRequestFunction('getRestAuthGoogle', testUrl, 'POST', mockLogin, mockLogin, mockLogin);

  // getLogIn
  const signInUserParams: SignInUser = {
    email: 'achicunov+1@gmail.com',
    password: 'aaaa123456789'
  };
  testUrl = ApiUrls.login;
  testRequestFunction('getLogIn', testUrl, 'POST', mockLogin, mockLogin, signInUserParams);

  // getRegistration
  const signUpUserParams: SignUpUser = {
    email: 'user654321@gmail.com',
    password1: 'user654321',
    password2: 'user654321',
    username: 'user654321'
  };
  testUrl = ApiUrls.reg;
  testRequestFunction('getRegistration', testUrl, 'POST', mockDetail, mockDetail, signUpUserParams);

  // getVerifyEmail
  const keyParams = 'dfgdfger6675';
  testUrl = ApiUrls.verify;
  testRequestFunction('getVerifyEmail', testUrl, 'POST', mockDetail, mockDetail, keyParams);

  // getResetPassword
  const emailParams = {email: 'some@mail.com'};
  testUrl = ApiUrls.resetPassword;
  testRequestFunction('getResetPassword', testUrl, 'POST', mockDetail, mockDetail, emailParams);

  // getResetConfirm
  const resetConfirmParams = {
    uid: 'sdkfbhjkb345',
    token: 'dfgdfgrdse567487589679',
    new_password1: 'user654321',
    new_password2: 'user654321',
  };
  testUrl = ApiUrls.resetConfirm;
  testRequestFunction('getResetConfirm', testUrl, 'POST', mockDetail, mockDetail, resetConfirmParams);

  // getLogout
  testUrl = ApiUrls.logout;
  testRequestFunction('getLogout', testUrl, 'GET', mockDetail, mockDetail);

});
