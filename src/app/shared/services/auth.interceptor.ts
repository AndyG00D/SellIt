import { AuthService } from './auth.service';
import {Observable} from "rxjs/index";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();
    // const authToken = `Token S908347568903805020v6yeuilh`;
    const authToken = `JWT ${localStorage.getItem("token")}`;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    console.log(authReq);
    return next.handle(authReq);
  }
}
