// ///<reference path="product-images.service.ts"/>
// import {HttpClient, HttpErrorResponse} from '@angular/common/http';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {inject, TestBed} from '@angular/core/testing';
//
// import {ApiUrls} from '../api-urls';
// import {Image, Product} from '../models/product';
// import {mockProducts} from '../../../assets/mock-data/products';
// import {mockLogin} from '../../../assets/mock-data/login';
// import {HttpErrorHandler} from './http-error-handler.service';
// import {MessageService} from './message.service';
// import {OptionsConf} from '../../dynamic-form/dynamic-form.model';
// import {AuthService} from './auth.service';
// import {Router, RouterModule} from '@angular/router';
// import {SessionService} from './session.service';
// import {ProfileService} from './profile.service';
// import {AuthService as SocialAuthService} from 'angular5-social-login';
// import {SignInUser} from '../models/auth';
// import {RouterTestingModule} from '@angular/router/testing';
// import {CookieService} from 'ngx-cookie-service';
//
// describe('AuthService', () => {
//
//   let service: AuthService;
//   let httpTestingController: HttpTestingController;
//   let sessionService: jasmine.SpyObj<SessionService>;
//   let router: jasmine.SpyObj<Router>;
//
//   const testRequestFunction = (
//     functionName,
//     url,
//     type,
//     mockData,
//     resData,
//     ...params) => {
//     describe(`Testing #${functionName}`, () => {
//
//       it(`#${functionName}: should return data of`, () => {
//         // function should have made one request and equaled result data
//         service[functionName](...params).subscribe(data => {
//           expect(data).toEqual(resData);
//         });
//
//         // The following `expectOne()` will match the request's URL.
//         const req = httpTestingController.expectOne(url);
//
//         // Assert the request type ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
//         expect(req.request.method).toBe(type);
//
//         // Respond with the mock data
//         req.flush(mockData);
//       });
//
//       it(`#${functionName}: can test for 404 error`, () => {
//         const emsg = 'deliberate 404 error';
//         // function should have made one request and get respond fail
//         service[functionName](...params).subscribe(
//           data => fail,
//           (error: HttpErrorResponse) => {
//             expect(error.status).toEqual(404, 'status');
//             expect(error.error).toEqual(emsg, 'message');
//           }
//         );
//
//         const req = httpTestingController.expectOne(url);
//         expect(req.request.method).toBe(type);
//
//         // Respond with mock error
//         req.flush(emsg, {status: 404, statusText: 'Not Found'});
//       });
//
//       it(`#${functionName}: can test for network error`, () => {
//         const emsg = 'simulated network error';
//
//         // function should have made one request and get respond fail
//         service[functionName](...params).subscribe(
//           data => fail,
//           (error: HttpErrorResponse) => {
//             expect(error.error.message).toEqual(emsg, 'message');
//           }
//         );
//
//         const req = httpTestingController.expectOne(url);
//         expect(req.request.method).toBe(type);
//
//         // Create mock ErrorEvent, raised when something goes wrong at the network level.
//         // Connection timeout, DNS error, offline, etc
//         const mockError = new ErrorEvent('Network error', {
//           message: emsg,
//         });
//
//         // Respond with mock error
//         req.error(mockError);
//       });
//       // auth
//       // it(`#${functionName}: should emit 'false' for 401 Unauthorized`, () => {
//       //
//       //   service[functionName](mockData).subscribe((next) => {
//       //     expect(next).toBeTruthy();
//       //   });
//       //
//       //   const req = httpTestingController.expectOne(url);
//       //   expect(req.request.method).toBe(type);
//       //   req.flush(null, {status: 401, statusText: 'Unauthorized'});
//       // });
//     });
//   };
//
//   beforeEach(() => {
//     const sessionSpy = jasmine.createSpyObj(
//       'SessionService',
//       ['user', 'setUser', 'token']
//     );
//     // sessionSpy.isLoggedIn = sessionIsLoggedIn;
//
//     const routerSpy = jasmine.createSpyObj(
//       'Router',
//       ['navigate']
//     );
//
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//         // RouterTestingModule
//       ],
//       providers: [
//         AuthService,
//         HttpClient,
//         HttpErrorHandler,
//         MessageService,
//         // Router,
//         // {
//         //   provide: Router,
//         //   useClass: class {
//         //     navigate = jasmine.createSpy('navigate');
//         //   }
//         // },
//         {provide: SessionService, useValue: sessionSpy},
//         {provide: Router, useValue: routerSpy},
//         // SessionService,
//         // CookieService,
//         ProfileService,
//         // SocialAuthService
//       ]
//     });
//     // injects the service
//     service = TestBed.get(AuthService);
//     httpTestingController = TestBed.get(HttpTestingController);
//     sessionService = TestBed.get(SessionService);
//     router = TestBed.get(Router);
//     // router: Router,
//     //   useClass: class { navigate = jasmine.createSpy("navigate"); }
//   });
//
//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });
//
//   // // test service
//   // it('should have a service instance', () => {
//   //   expect(service).toBeDefined();
//   // });
//   //
//   // it('should be created', inject([AuthService], (serviceAnother: AuthService) => {
//   //   expect(serviceAnother).toBeTruthy();
//   // }));
//
//   // test functions
//   // const advertPK = 132;
//   // const imageID = 132;
//   const signInUser: SignInUser = {email: 'achicunov+1@gmail.com', password: 'aaaa123456789'};
//   const mockDetail = {detail: 'some text message'};
//   const email = {email: 'some@mail.com'};
//   // const resImages = mockProducts.results[3].images as Image[];
//   // const mockImage = mockImages[0] as Image;
//   // const resImage = mockImages[0] as Image;
//   // const newImageFile = 'fileInBase64Format';
//   // const newImageFiles = [newImageFile, newImageFile, newImageFile];
//   let testUrl;
//
//   testUrl = ApiUrls.google;
//   testRequestFunction('getRestAuthGoogle', testUrl, 'POST', mockLogin, mockLogin, mockLogin);
//
//   testUrl = ApiUrls.login;
//   testRequestFunction('getLogIn', testUrl, 'POST', mockLogin, mockLogin, signInUser);
//
//   testUrl = ApiUrls.resetPassword;
//   testRequestFunction('getResetPassword', testUrl, 'POST', mockDetail, mockDetail, email);
//
//   // it('should return expected heroes (called multiple times)', () => {
//   //
//   //   service.uploadImages(advertPK, newImageFiles).subscribe((response) => {
//   //     expect(response).toBeTruthy();
//   //   });
//   //
//   //   // const requests = httpTestingController.match(testUrl);
//   //   // expect(requests.length).toEqual(3, 'calls to uploadImage()');
//   //
//   //   // Respond to each request with different mock hero results
//   //   // requests[0].flush(mockImage);
//   //   // requests[1].flush(mockImage);
//   //   // requests[2].flush(mockImage);
//   // });
//   //
//   // testUrl = ApiUrls.products + advertPK + '/image/' + imageID;
//   // testRequestFunction('updateImage', testUrl, 'PATCH', mockImage, resImage, imageID, advertPK, newImageFile);
//   //
//   // testUrl = ApiUrls.products + advertPK + '/image/' + imageID;
//   // testRequestFunction('deleteImage', testUrl, 'DELETE', null, null, imageID, advertPK);
//   // {email:"user654321@gmail.com",
//   //   password1
//   //   :
//   //   "user654321"
//   // password2
//   //   :
//   //   "user654321"
//   // username
//   //   :
//   //   "user654321"}
//
// });
