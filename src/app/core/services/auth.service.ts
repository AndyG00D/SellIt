import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {map, catchError, tap} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {Router} from "@angular/router";
import {SignInUser, SignUpUser} from "../models/auth";
import {SessionService} from "./session.service";
import {ProfileService} from "./profile.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private router: Router,
              private sessionService: SessionService,
              private profileService: ProfileService) {
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
          this.profileService.setUser(data.user);
          this.router.navigate(['/products']);
        }),
        catchError(this.handleError('Sign In:', log))
      )
  }


  // public getProfile() {
  //   return this.http.get(apiUrls.profile)
  //     .pipe(
  //       tap((data: any) => {
  //         console.log('login: ' + JSON.stringify(data));
  //         this.sessionService.user = data;
  //         this.profileService.user = data;
  //       }),
  //       catchError(this.handleError('getProfile:'))
  //     )
  // }

  public isAuth(){
    return !!this.sessionService.token;
  }

  public verifyEmail(key: any) {
    return this.http.post(apiUrls.verify, key)
      .pipe(
        map((data) => {
          console.log('verify: ' + data);
        }),
        catchError(this.handleError('Verify Email:', key))
      );
  }

  // getUser(){
  //   if(this.profileService.user) {
  //     console.log("1");
  //     return this.profileService.user;
  //   }
  //   else if(this.sessionService.user){
  //     console.log("2");
  //    return this.profileService.user = this.sessionService.user;
  //   }
  //   else if (this.sessionService.token) {
  //     this.getProfile().subscribe();
  //     console.log("3");
  //   }
  //   console.log("4");
  //   return this.profileService.user
  // }


  public logout() {
    return this.http.get(apiUrls.logout).subscribe(
      () => {
        this.sessionService.token = null;
        this.sessionService.user = null;
        this.profileService.setUser(null);
      }
    );
  }

}
