import { Component, OnInit, Input } from '@angular/core';
import { Product} from "../../../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  pathURL:string = 'sellit/detail/';
  pathImg:string =  '/../../../../assets/img/';

    constructor() {

  }

  ngOnInit() {
    window.console.log(this.product.id);
  }

}
