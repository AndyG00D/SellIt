import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {DataProductsService} from "./services/data-products.service";
import {Product} from "./models/product";

@Injectable({
  providedIn: 'root'
})
export class DataProductResolver implements Resolve<Product> {

  constructor(
    private service: DataProductsService
  ) {}

  public resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    :Observable<Product> | Promise <Product> | Product {
    return this.service.getDataProduct(route.params.id);
  }
}
