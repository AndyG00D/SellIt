import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
import {tap, catchError, share, distinctUntilChanged} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {apiUrls} from "../api-urls";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {SessionService} from "./session.service";
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";
import {Router} from "@angular/router";

/**
 * Service contains HTTP requests functions for working with profile user data on ResApi,
 * contains subject of data auth user and functions for working with it
 */
@Injectable()
export class ProfileService {
  public handleError: HandleError;
  private _userSubject = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private messageService: MessageService,
              private router: Router,
              private sessionService: SessionService) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public setUser(user: User): void {
    this._userSubject.next(user);
  }

  public getUser(): Observable<User> {
    if (this.sessionService.token) {
      if (!this._userSubject.value && this.sessionService.user) {
        this._userSubject.next(this.sessionService.user);
      }
      else {
        this.getProfile().subscribe();
      }
    } else {
      this._userSubject.next(null);
    }
    return this._userSubject.asObservable().pipe(distinctUntilChanged(), share());
  }

  public getProfile(): Observable<any> {
    return this.http.get(apiUrls.profile)
      .pipe(
        tap((data: User) => {
          this.sessionService.user = data;
          this._userSubject.next(data);
        }),
        catchError(this.handleError('getProfile:'))
      )
  }

  public updateProfile(user: User): Observable<any> {
    return this.http.patch(apiUrls.profile, user)
      .pipe(
        tap((user: User) => {
          if (this._userSubject.value.username === user.username) {
            this.sessionService.user = user;
            this._userSubject.next(user);
            this.messageService.addSuccess('User data was update');
          } else {
            this.sessionService.token = null;
            this.sessionService.user = null;
            this._userSubject.next(null);
            this.router.navigate(['/login']);
            this.messageService.addWarning('Username was change. Need repeat sign in.');
          }
        }),
        catchError(this.handleError('updateProfile:'))
      )
  }

  public getChangePassword(params: any): Observable<any> {
    return this.http.post(apiUrls.changePassword, params)
      .pipe(
        tap((response: any) => {
          this.messageService.addSuccess(response.detail);
        }),
        catchError(this.handleError('getChangePassword:'))
      )
  }


}
