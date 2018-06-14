import { AuthService } from './auth.service';
import {Observable} from "rxjs/index";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SessionService} from "./session.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private sessionService:SessionService)
  {}

  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
//     // const authToken = this.auth.getAuthorizationToken();
//     // const authToken = `Token S908347568903805020v6yeuilh`;
//     const authToken =  this.sessionService.token;
//
//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', authToken)
//     });
//
//     // send cloned request with header to the next handler.
//     console.log(authReq);
//     return next.handle(authReq);
//     const authHeader = `JWT ${authToken}`;
//     if(this.sessionService.token) {
//       const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
//       return next.handle(authReq);
//     } else {
//       return next.handle(req);
//     }
//   }
// }


//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//
//     const clonedRequest = req.clone({
//       headers: req.headers.set('X-CustomAuthHeader', `JWT ${this.sessionService.token}`)
//     });
//
//     console.log("new headers", clonedRequest.headers.keys());
//
//     return next.handle(clonedRequest);
//   }
//
// }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = `JWT ${this.sessionService.token}`;

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
