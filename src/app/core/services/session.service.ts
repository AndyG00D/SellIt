import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {CookieService} from 'ngx-cookie-service';

/**
 * Service for save/delete auth token on cookies and
 * auth user data on LocalStorage
 */
@Injectable()
export class SessionService {

  constructor(private cookieService: CookieService) {
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
    return JSON.parse(localStorage.getItem('user'));
  }

  public set user(value: User) {
    if (value === null) {
      localStorage.removeItem('user');
    } else {
      localStorage.setItem('user', JSON.stringify(value));
    }
  }

}
