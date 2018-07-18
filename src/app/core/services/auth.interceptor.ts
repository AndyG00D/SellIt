import {AuthService} from './auth.service';
import {Observable} from 'rxjs/index';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SessionService} from './session.service';
import {tap} from 'rxjs/operators';


/**
 * Interceptor add token in requests to RestApi for register user
 * and check auth ( if caching error 401 will cleaned auth data in browser
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public sessionService: SessionService,
              private authService: AuthService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authHeader = `JWT ${this.sessionService.token}`;
    if (this.sessionService.token) {
      const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
      return next.handle(authReq).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authService.resetAuth();
            }
          }
        }));
    } else {
      return next.handle(req);
    }
  }

}
