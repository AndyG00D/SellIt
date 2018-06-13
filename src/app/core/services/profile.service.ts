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


@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit {

  public profile$: BehaviorSubject<any>;
  public  handleError: HandleError;
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


  getProfile(){
      return this.http.get(apiUrls.reg)
        .pipe(
          map((data) => {
            console.log('auth: ' + JSON.stringify(data));
          }),
          catchError(this.handleError('getProfile:'))
        );
    }

    changeProfile(){
     return this.profile$.asObservable();
    }



  ngOnInit() {
  }


}
