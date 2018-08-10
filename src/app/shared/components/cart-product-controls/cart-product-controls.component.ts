import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductInOrder} from '../../../core/models/product-in-order';
import {Patterns} from '../../../dynamic-form/patterns';

@Component({
  selector: 'app-cart-product-controls',
  templateUrl: './cart-product-controls.component.html',
  styleUrls: ['./cart-product-controls.component.scss']
})

export class CartProductControlsComponent {

  @Input() data: ProductInOrder;
  @Input() step = 1;
  @Output() plusProduct = new EventEmitter<any>();
  @Output() minusProduct = new EventEmitter<any>();
  @Output() setProduct = new EventEmitter<any>();
  @Output() removeProduct = new EventEmitter<any>();

  constructor() {
  }

  public clickPlusProduct() {
    this.data.count = this.data.count + this.step;
    this.plusProduct.emit(this.data);
  }

  public clickMinusProduct() {
    if ((this.data.count - this.step) >= 1) {
      this.data.count -= this.step;
      this.minusProduct.emit(this.data);
    }
  }

  public clickRemoveProduct() {
    console.log('remove');
    this.removeProduct.emit(this.data.product.pk);
  }

  public onSetProduct(event: any) { // without type info
    if (Patterns.number.test(event.target.value) && event.target.value > 0) {
      this.data.count = +event.target.value;
    } else {
      event.target.value = this.data.count;
    }
    this.setProduct.emit(this.data);
  }
}
