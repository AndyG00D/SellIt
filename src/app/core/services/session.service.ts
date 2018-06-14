import {Injectable, OnInit} from '@angular/core';
import {User} from "../models/user";
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


@Injectable({
  providedIn: 'root'
})
export class SessionService implements OnInit {

  public  handleError: HandleError;

  constructor(private http: HttpClient,
              public httpErrorHandler: HttpErrorHandler,
              private cookieService: CookieService,
              private router: Router
  ) {
    this.handleError = httpErrorHandler.createHandleError('Errors: ');
  }


  public ngOnInit() {
  }



  get token() {
    return this.cookieService.get('token');
  }

  set token(value: any) {
    if (value === null) {
      this.cookieService.delete('token');
    } else {
      this.cookieService.set('token', value);
    }
  }


  get user(): User {

    return JSON.parse(localStorage.getItem("user"));
  }

  set user(value: User) {
    if (value === null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem("user", JSON.stringify(value));
    }
  }

}
