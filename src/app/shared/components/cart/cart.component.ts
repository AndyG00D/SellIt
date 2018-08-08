import {Component, Input} from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';
import {CartService} from '../../../core/services/cart.service';
import {Subscription} from 'rxjs';

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
export class CartComponent {
  public data: ProductInOrder[];
  public total: Number;


  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((data) => {
      this.data = data;
    });
    this.cartService.getTotal().subscribe((total) => {
      this.total = total;
    });
  }

  // public setCart(event: ProductInOrder) {
  //   this.cartService.setProductInCart(event.product, event.count);
  // }
  //
  // public removeProduct(id: number) {
  //   console.log(id);
  //   this.cartService.removeProductInCart(id);
  // }
}
