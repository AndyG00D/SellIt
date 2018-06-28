import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {ProductService} from "./services/product.service";
import {Product} from "./models/product";

@Injectable()
export class DataProductResolver implements Resolve<Product> {

  constructor(
    private service: ProductService
  ) {}

  public resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<Product> | Promise <Product> | Product {
    // console.log('params: ' + JSON.stringify(route.url));
    return this.service.getProduct(route.params.id);
  }
}
