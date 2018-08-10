import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../core/models/user';
import {ProfileService} from '../../../core/services/profile.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {CartService} from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: User;
  public userName: string;
  public countCart: Number;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService,
              private profileService: ProfileService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.profileService.getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        this.user = user;
      });

    this.cartService.countOfProductsInCart$
      .pipe(takeUntil(this.destroy$))
      .subscribe((count) => {
        this.countCart = count;
      });
  }

  onLogOut() {
    this.authService.getLogout().subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
