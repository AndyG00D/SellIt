/**
* model of product in order/cart (Back)
*/
import {Product} from './product';

export interface Basket {
  id: number; // id of product in order
  basket: number; // id  of basket
  product: number; // pk of product
  count: number; // count of product in order
}

/**
 * model of product in order/cart (Front)
 */
export interface ProductInOrder {
  product: Product; // pk of product
  count: number; // count of product in order
}
