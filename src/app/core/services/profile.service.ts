import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
import {map, catchError, share, distinctUntilChanged} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {takeWhile, tap,} from "rxjs/operators";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {CookieService} from 'ngx-cookie-service';
import {Router} from "@angular/router";
import {SignInUser, SignUpUser} from "../models/auth";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {SessionService} from "./session.service";


@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit {

  private _userSubject = new BehaviorSubject<User>(null);
  // public user = this._userSubject.asObservable()
  //   .pipe(distinctUntilChanged(), share());

  // setUser(user: User) {
  //   this._userSubject.next(user);
  // }

  // getUser() {
  //   return this._userSubject.asObservable()
  //     .pipe(distinctUntilChanged(), share());
  // }

  get user() {
    let res: User;
    this._userSubject.asObservable().subscribe(data => res = data);
    return res;
  }

  set user(user: User) {
    this._userSubject.next(user);
  }

  private _isAuthSubject = new BehaviorSubject<boolean>(false);
  public isAuth = this._isAuthSubject.asObservable()
    .pipe(distinctUntilChanged(), share());

  setIsAuth(IsAuth: boolean) {
    this._isAuthSubject.next(IsAuth);
  }

  // public profile$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public handleError: HandleError;

  // public  cookieValue = 'UNKNOWN';

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    // private cookieService: CookieService,
    private router: Router,
    // private sessionService:SessionService
  ) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  //
  // getProfile(){
  //   return this.http.get(apiUrls.reg)
  //     .pipe(
  //       map((data) => {
  //         console.log('auth: ' + JSON.stringify(data));
  //       }),
  //       catchError(this.handleError('getProfile:'))
  //     );
  // }

  // getProfile() {
  //   return this.profile$.asObservable();
  // }


  ngOnInit() {
  }


}

//
//   private user$: BehaviorSubject<User|boolean> = new BehaviorSubject<User|boolean>(false);
//   // public profile$: Observable<User|boolean> = this.user$.asObservable();
//
//   public  handleError: HandleError;
//
//   constructor(
//               private http: HttpClient,
//               public httpErrorHandler: HttpErrorHandler,
//   ) {
//     this.handleError = httpErrorHandler.createHandleError('Errors: ');
//   }
//
//   set profile$(user: User|boolean){
//
//
//   }
//
//
//   get profile$(): User|boolean {
//     let res: User|boolean = false;
//     if(this.user$.asObservable()) this.user$.asObservable().subscribe(data => res = data);
//
//     return res;
//       // return this.http.get(apiUrls.reg)
//       //   .pipe(
//       //     map((data) => {
//       //       console.log('auth: ' + JSON.stringify(data));
//       //     }),
//       //     catchError(this.handleError('getProfile:'))
//       //   );
//     }
//
//
//
//
//     changeProfile(){
//      return this.profile$.asObservable();
//     }
//
//
//
//   ngOnInit() {
//   }
//
//
// }
