import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, catchError, tap} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {Router} from "@angular/router";
import {SignInUser, SignUpUser} from "../models/auth";
import {SessionService} from "./session.service";
import {ProfileService} from "./profile.service";
import {AuthService as SocialAuthService, GoogleLoginProvider} from "angular5-social-login";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AuthService implements OnInit {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private router: Router,
              private sessionService: SessionService,
              private profileService: ProfileService,
              private socialAuthService: SocialAuthService,) {

    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public ngOnInit() {

  }

  public getRegistration(reg: SignUpUser) {
    return this.http.post(apiUrls.reg, reg)
      .pipe(
        // map((data) => {
        //   console.log('auth: ' + JSON.stringify(data));
        // }),
        catchError(this.handleError('Sign Up:', reg))
      );
  }

  public getLogIn(signInUser: SignInUser): Observable<any> {
    //   "email": "achicunov+1@gmail.com",
    //   "password1": "aaaa123456789",
    return this.http.post(apiUrls.login, signInUser)
      .pipe(
        tap((data: any) => {
          // console.signInUser('login: ' + JSON.stringify(data));
          this.sessionService.token = data.token;
          // this.setNoAvatar(data.user);
          this.sessionService.user = data.user;
          this.profileService.setUser(data.user);
          this.router.navigate(['/products']);
        }),
        catchError(this.handleError('getLogIn:', signInUser))
      )
  }

  public AuthGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData: any) => {
        // console.log("Google sign in data : ", userData);
        this.getRestAuthGoogle(userData).subscribe();
      });
  }


  public getRestAuthGoogle(params: any) {
    return this.http.post(apiUrls.google, {'access_token': params.token})
      .pipe(
        tap((data: any) => {
          console.log('login: ' + JSON.stringify(data));
          this.sessionService.token = data.token;
          // this.setNoAvatar(params.user);
          this.sessionService.user = data.user;
          this.profileService.setUser(data.user);
          this.router.navigate(['/products']);
        }),
        catchError(this.handleError('getRestAuthGoogle:'))
      )
  }


  public getVerifyEmail(key: any): Observable<any> {
    return this.http.post(apiUrls.verify, key)
      .pipe(
        // map((data) => {
        //   console.log('verify: ' + data);
        // }),
        catchError(this.handleError('Verify Email:', key))
      );
  }

  public getResetPassword(email: any): Observable<any> {
    return this.http.post(apiUrls.resetPassword, email)
      .pipe(
        catchError(this.handleError('getResetPassword:', email))
      );
  }

  public getResetConfirm(params: any): Observable<any> {
    return this.http.post(apiUrls.resetConfirm, params)
      .pipe(
        catchError(this.handleError('getResetConfirm:', params))
      );
  }

  public logout(): void {
    this.http.get(apiUrls.logout).subscribe(
      () => {
        this.sessionService.token = null;
        this.sessionService.user = null;
        this.profileService.setUser(null);
        this.router.navigate(['/products']);
      }
    );
  }

}
