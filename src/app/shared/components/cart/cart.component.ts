import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';
import {CartService} from '../../../core/services/cart.service';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

/**
 * item product
 *  (used in product list page)
 *  @Input() product: Product; data o current product
 *  @Input() isOwner: boolean; true if auth user is owner
 */
export class CartComponent implements OnInit, OnDestroy {
  public data: ProductInOrder[];
  public total: Number;

  private destroy$: Subject<void> = new Subject<void>();


  constructor(private cartService: CartService) {
  }

  public ngOnInit() {
    this.cartService.cart$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
      this.data = data;
    });
    this.cartService.totalOfCart$
      .pipe(takeUntil(this.destroy$))
      .subscribe((total) => {
      this.total = total;
    });
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
