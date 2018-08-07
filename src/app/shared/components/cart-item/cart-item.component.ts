import { Component, Input } from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

/**
 * item product
 *  (used in product list page)
 *  @Input() product: Product; data o current product
 *  @Input() isOwner: boolean; true if auth user is owner
 */
export class CartItemComponent {

  @Input() data: ProductInOrder;

    constructor() {
  }

}
