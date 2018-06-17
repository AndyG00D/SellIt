import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SessionService} from "../services/session.service";

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.sessionService.token) {
      return true;
    } else {
      console.log('Yo must login for this page!');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
