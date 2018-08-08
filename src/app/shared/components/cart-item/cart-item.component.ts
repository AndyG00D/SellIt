import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';
import {Patterns} from '../../../dynamic-form/patterns';

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
  @Output() plusProduct = new EventEmitter<any>();
  @Output() minusProduct = new EventEmitter<any>();
  @Output() setProduct = new EventEmitter<any>();
  @Output() removeProduct = new EventEmitter<any>();
  step = 1;

  constructor() {
  }

  public clickPlusProduct() {
    this.data.count = this.data.count + this.step;
    this.plusProduct.emit(this.data);
  }

  public clickMinusProduct() {
    if (this.data.count - this.step > 1) {
      this.data.count -= this.step;
      this.minusProduct.emit(this.data);
    }
  }

  public clickRemoveProduct() {
      this.removeProduct.emit(this.data.product.pk);
  }

  public onSetProduct(event: any) { // without type info
    if (Patterns.number.test(event.target.value) && event.target.value > 1) {
      this.data.count = ++event.target.value;
    } else {
      event.target.value = this.data.count;
    }
    this.setProduct.emit(this.data);
  }
}
