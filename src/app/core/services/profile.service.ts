import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
import {tap, catchError, share, distinctUntilChanged} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {SessionService} from "./session.service";


@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit {
  public handleError: HandleError;
  private _userSubject = new BehaviorSubject<User>(null);
  // public user = this._userSubject.asObservable()
  //   .pipe(distinctUntilChanged(), share());

  // private _isAuthSubject = new BehaviorSubject<boolean>(false);
  // public isAuth = this._isAuthSubject.asObservable()
  //   .pipe(distinctUntilChanged(), share());

  constructor(
    private http: HttpClient,
    public httpErrorHandler: HttpErrorHandler,
    private sessionService: SessionService
  ) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  setUser(user: User) {
    this._userSubject.next(user);
  }

  getUser() {
    if (this._userSubject.value) {
    }
    else if (this.sessionService.user) this._userSubject.next(this.sessionService.user);
    else if (this.sessionService.token) this.getProfile().subscribe();
    return this._userSubject.asObservable().pipe(distinctUntilChanged(), share());
  }


  // get user() {
  //   let res: User;
  //   console.log(this._userSubject.value);
  //   this._userSubject.asObservable().subscribe(data => res = data);
  //   return res;
  // }

  set user(user: User) {
    this._userSubject.next(user);
  }


  // setIsAuth(IsAuth: boolean) {
  //   this._isAuthSubject.next(IsAuth);
  // }

  public getProfile() {
    return this.http.get(apiUrls.profile)
      .pipe(
        tap((data: any) => {
          console.log('login: ' + JSON.stringify(data));
          this.sessionService.user = data;
          this._userSubject.next(data);
        }),
        catchError(this.handleError('getProfile:'))
      )
  }

  public updateProfile(user: any) {
    return this.http.patch(apiUrls.profile, {user})
      .pipe(
        tap((data: any) => {
          console.log('updateProfile: ' + JSON.stringify(data));
          this.sessionService.user = data;
          this._userSubject.next(data);
        }),
        catchError(this.handleError('onSubmit:'))
      )
  }


  ngOnInit() {
  }


}
