import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../core/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

/**
 * item product
 *  (used in product list page)
 *  @Input() product: Product; data o current product
 *  @Input() isOwner: boolean; true if auth user is owner
 */
export class ProductItemComponent {

  @Input() product: Product;
  @Input() isOwner = false;
  @Output() addProduct = new EventEmitter<any>();

  constructor() {
  }

  public clickAddProduct() {
    this.addProduct.emit(this.product);
  }
}
