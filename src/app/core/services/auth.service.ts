import {Injectable, OnInit} from '@angular/core';
import {Owner, Product} from "../models/product";
import {map, catchError} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile, tap} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";
import {SignInUser, SignUpUser} from "../models/auth";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {SessionService} from "./session.service";
import {ProfileService} from "./profile.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public authUser: BehaviorSubject<boolean>;
  public  handleError: HandleError;
  public  cookieValue = 'UNKNOWN';


  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              // private cookieService: CookieService,
              private router: Router,
              private sessionService:SessionService,
              private profileService: ProfileService
  ) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }


  public ngOnInit() {
  }


  public getReg(reg: SignUpUser) {
    // const obj = {
    //   "username": "AndyG00D",
    //   "email": "achicunov+1@gmail.com",
    //   "password1": "aaaa123456789",
    //   "password2": "aaaa123456789"
    // };
    return this.http.post(apiUrls.reg, reg)
      .pipe(
        map((data) => {
          console.log('auth: ' + JSON.stringify(data));
        }),
        catchError(this.handleError('Sign Up:', reg))
        // catchError(error => {
        //   console.log(error.error.message || 'Server error');
        //   console.log(error.error.name);
        //   console.log(error.error.email);
        //   return throwError(error.message);
        // })
      );
  }

  public verifyEmail(key: any) {
    // const obj = {
    //   "username": "AndyG00D",
    //   "email": "achicunov+1@gmail.com",
    //   "password1": "aaaa123456789",
    //   "password2": "aaaa123456789"
    // };
    return this.http.post(apiUrls.verify, key)
      .pipe(
        map((data) => {
          console.log('verify: ' + data);
        }),
        catchError(this.handleError('Verify Email:', key))
        // catchError(error => {
        //   console.log(error.error.message || 'Server error');
        //   console.log(error.error.name);
        //   console.log(error.error.email);
        //   return throwError(error.message);
        // })
      );
  }


  public getLogIn(log: SignInUser) {
    // const obj = {
    //   "email": "achicunov+1@gmail.com",
    //   "password1": "aaaa123456789",
    // };
    return this.http.post(apiUrls.login, log)
      .pipe(
        tap((data: any) => {
          console.log('login: ' + JSON.stringify(data));
          this.sessionService.token = data.token;
          this.sessionService.user = data.user;
          this.profileService.profile$.next(data.user);
          // this.cookieService.set( 'token', data['token']);
          // this.cookieService.set( 'user', data['user']);
          this.authUser = data.user;
          // localStorage.setItem("token", data['token']);
          this.router.navigate(['/products']);

        }),
        catchError(this.handleError('Sign In:', log))
        // catchError(error => {
        //   console.log(error.message || 'Server error');
        //   return throwError(error.message);
        // })));

      )
  }


  public logout() {
    return this.http.get(apiUrls.logout).subscribe(
      () => {
        this.sessionService.token = null;
        this.sessionService.user = null;
        // this.cookieService.delete('token');
        // this.cookieService.delete('user');
        // this.currentUser.next(false);
      }
    );
  }

}
