import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs/internal/Subject';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Product} from "../core/models/product";
import {User} from "../core/models/user";
import {ProductService} from "../core/services/product.service";
import {ProfileService} from "../core/services/profile.service";

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

  constructor(
    private dataProductsService: ProductService,
    private route: ActivatedRoute,
    private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user) => {this.user = user});
  }

  ngOnInit() {
    this.route.data.subscribe(
        product => {
          this.product = product.data;
          console.log("product: " + JSON.stringify(product.data));
        },
        err => {
          console.log(err.message);
        }
      );
  }

  public isOwner(){
    return (this.user && this.user.id) === this.product.owner.id;
  }


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
}
