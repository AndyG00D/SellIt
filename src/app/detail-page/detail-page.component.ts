import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject} from 'rxjs/internal/Subject';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {Product} from "../core/models/product";
import {User} from "../core/models/user";
import {DataProductsService} from "../core/services/data-products.service";
import {ProfileService} from "../core/services/profile.service";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})

export class DetailPageComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public product: Product;

  //temp userProps of user
  public user: User;

  constructor(
    private dataProductsService: DataProductsService,
    private route: ActivatedRoute,
    private profileService: ProfileService) {

    this.profileService.getUser().subscribe((user) => {this.user = user});
  }

  ngOnInit() {
    this.route.data.subscribe(
        product => {
          this.product = product.data;
          // console.log("product: " + JSON.stringify(product.data));
        },
        err => {
          console.log(err.message);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }
}
