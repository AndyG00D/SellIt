import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {HttpErrorHandler, HandleError} from "./http-error-handler.service";
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class SessionService {

  public handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private cookieService: CookieService) {

    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }

  public get token(): string {
    return this.cookieService.get('token');
  }

  public set token(value: string) {
    if (value === null) {
      this.cookieService.delete('token');
    } else {
      this.cookieService.set('token', value);
    }
  }

  public get user(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

  public set user(value: User) {
    if (value === null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem("user", JSON.stringify(value));
    }
  }

}
