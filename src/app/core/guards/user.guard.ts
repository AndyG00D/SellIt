import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SessionService} from "../services/session.service";
import {MessageService} from "../services/message.service";

/**
 * protect pages for auth users
 */
@Injectable()
export class UserGuard implements CanActivate {

  constructor(private sessionService: SessionService,
              private router: Router,
              private messageService:MessageService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.sessionService.token) {
      return true;
    } else {
      this.messageService.addWarning('This page only for login Users!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
