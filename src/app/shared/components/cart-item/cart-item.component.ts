import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';
import {Patterns} from '../../../dynamic-form/patterns';
import {CartService} from '../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

/**
 * item product in cart
 *  (used in product list page)
 *  @Input() product: Product; data o current product
 *  @Input() isOwner: boolean; true if auth user is owner
 */
export class CartItemComponent {

  @Input() data: ProductInOrder;

  constructor(private cartService: CartService) {
  }

  public setCart(event: ProductInOrder) {
    this.cartService.setProductCountInCart(event.product, event.count);
  }

  public removeProduct(id: number) {
    this.cartService.removeProductInCart(id);
  }
}
