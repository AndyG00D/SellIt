import { Component } from '@angular/core';
import { DataProductsService } from "../data-products.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  providers:[DataProductsService]
})
export class ProductListPageComponent   {
  products: Product[];
  constructor(private dataProducts: DataProductsService){
  this.products = dataProducts.getDataProducts();
  }

}
