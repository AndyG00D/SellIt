import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs/internal/Subject';
import {Product} from '../core/models/product';
import {User} from '../core/models/user';
import {ProductService} from '../core/services/product.service';
import {ProfileService} from '../core/services/profile.service';
import {CartService} from '../core/services/cart.service';
import {ProductInOrder} from '../core/models/product-in-order';

/**
 * detail page of product by id
 * for auth user view chat
 * for product owner view button to product edit page by same id
 */
@Component({
  selector: 'app-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})

export class ProductDetailPageComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public product: Product;
  public user: User;
  public count = 0;

  constructor(
    private dataProductsService: ProductService,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private cartService: CartService) {
    this.profileService.getUser().subscribe((user) => this.user = user);
  }

  ngOnInit() {
    this.route.data.subscribe(
      product => this.product = product.data
    );
    this.cartService.getCart().subscribe((data: ProductInOrder[]) => {
      const productInCart: ProductInOrder = data.find(item => item.product.pk === this.product.pk);
      this.count = productInCart ? productInCart.count : 0;
    });
  }

  public isOwner() {
    return (this.user && this.user.id) === this.product.owner.id;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  public addCart() {
    this.cartService.addProductInCart(this.product);
  }

  public setCart(event: ProductInOrder) {
    this.cartService.setProductCountInCart(event.product, event.count);
  }

  public removeProduct(id: number) {
    this.cartService.removeProductInCart(id);
  }
}
