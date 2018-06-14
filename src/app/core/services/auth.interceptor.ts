import { AuthService } from './auth.service';
import {Observable} from "rxjs/index";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SessionService} from "./session.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(public sessionService: SessionService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authHeader = `JWT ${this.sessionService.token}`;
    if(this.sessionService.token) {
      const authReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }

}
