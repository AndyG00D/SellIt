import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {Router} from "@angular/router";
import {SignInUser, SignUpUser} from "../models/auth";
import {SessionService} from "./session.service";
import {ProfileService} from "./profile.service";
import {AuthService as SocialAuthService, GoogleLoginProvider} from "angular5-social-login";
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";


/**
 * service contains HTTP requests functions for working with registration on ResApi
 */
@Injectable()
export class AuthService {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService,
              private router: Router,
              private sessionService: SessionService,
              private profileService: ProfileService,
              private socialAuthService: SocialAuthService) {

    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public getLogIn(signInUser: SignInUser): Observable<any> {
    //   "email": "achicunov+1@gmail.com",
    //   "password1": "aaaa123456789",
    return this.http.post(apiUrls.login, signInUser)
      .pipe(
        tap((data: any) => {
          this.sessionService.token = data.token;
          this.sessionService.user = data.user;
          this.profileService.setUser(data.user);
          console.log("User sign in!");
          this.router.navigate(['/products']);
        }),
        catchError(this.handleError('getLogIn:', signInUser))
      )
  }

  public AuthGoogle(): void {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData: any) => {
        this.getRestAuthGoogle(userData).subscribe();
      });
  }

  public getRestAuthGoogle(params: any): Observable<any> {
    return this.http.post(apiUrls.google, {'access_token': params.token})
      .pipe(
        tap((data: any) => {
          this.sessionService.token = data.token;
          this.sessionService.user = data.user;
          this.profileService.setUser(data.user);
          console.log("Google sign in!");
          this.router.navigate(['/products']);
        }),
        catchError(this.handleError('getRestAuthGoogle:'))
      )
  }

  public getRegistration(reg: SignUpUser): Observable<any> {
    return this.http.post(apiUrls.reg, reg)
      .pipe(
        tap((data: any) => {
          if ('detail' in data) {
            this.messageService.addSuccess(data.detail);
          }
        }),
        catchError(this.handleError('Sign Up:', reg))
      );
  }

  public getVerifyEmail(key: any): Observable<any> {
    return this.http.post(apiUrls.verify, key)
      .pipe(
        tap((data: any) => {
          if ('detail' in data) {
            this.messageService.addSuccess(data.detail);
          }
        }),
        catchError(this.handleError('Verify Email:', key))
      );
  }

  public getResetPassword(email: any): Observable<any> {
    return this.http.post(apiUrls.resetPassword, email)
      .pipe(
        tap((data: any) => {
          if ('detail' in data) {
            this.messageService.addSuccess(data.detail);
          }
        }),
        catchError(this.handleError('getResetPassword:', email))
      );
  }

  public getResetConfirm(params: any): Observable<any> {
    return this.http.post(apiUrls.resetConfirm, params)
      .pipe(
        tap((data: any) => {
          if ('detail' in data) {
            this.messageService.addSuccess(data.detail);
          }
        }),
        catchError(this.handleError('getResetConfirm:', params))
      );
  }

  public resetAuth(): void {
    this.sessionService.token = null;
    this.sessionService.user = null;
    this.profileService.setUser(null);
    this.sessionService.token = null;
    this.router.navigate(['/products']);
  }

  public getLogout(): Observable<any> {
    return this.http.get(apiUrls.logout).pipe(
      tap(() => {
        this.resetAuth();
      })
    );
  }

}
