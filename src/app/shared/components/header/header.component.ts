import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/models/user';
import {ProfileService} from '../../../core/services/profile.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User;
  public userName: string;
  private until$: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profileService.getUser()
      .pipe(takeUntil(this.until$))
      .subscribe((user) => {
      this.user = user;
    });

    if (this.user) {
      if (this.user.first_name) {
        this.userName = this.user.first_name + ' ' + this.user.last_name;
      } else if (this.user.username) {
        this.userName = this.user.username;
      } else {
        this.userName = 'User';
      }
    }
  }

  onLogOut() {
    this.authService.getLogout().subscribe();
  }

   ngOnDestroy() {
    this.until$.next();
    this.until$.complete();
  }

}
