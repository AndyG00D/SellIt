import {Component, OnDestroy, OnInit} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../core/services/product.service";
import {Product} from "../core/models/product";
import {Subject} from "rxjs/internal/Subject";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {ProfileService} from "../core/services/profile.service";
import {User} from "../core/models/user";
import {MessageService} from "../core/services/message.service";


@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss']
})
export class ProductEditPageComponent implements OnInit, OnDestroy {
  public loading$ = new BehaviorSubject(true);
  private destroy = new Subject();
  public product: Product;
  public user: User;
  public props: FormControlConf[];


  constructor(private dynamicFormService: DynamicFormService,
              private dataProductsService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user) => {
      this.user = user
    });
  }

  ngOnInit() {
    this.getProduct();
    this.ownerProtect();
    this.getFormConfig();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
    this.loading$.complete();
  }

  private getProduct(): void {
    this.route.data.subscribe(
      product => {
        this.product = product.data;
      }
    );
  }

  private ownerProtect(): void {
    if (this.user.id !== this.product.owner.id) {
      this.messageService.addWarning('You are not owner of this product! You can not edit it.');
      this.router.navigate(['/products/' + this.product.pk])

    }
  }

  private getFormConfig(): void {
    this.props = this.dynamicFormService.getFormConfig('product');
    this.dataProductsService.getLocations().subscribe(data => {
      for (let prop of this.props) {
        if (prop.key === 'location') {
          prop.options.push(...data);
        }
      }
    });
  }

  public onUpdateProduct(event): void {
    this.dataProductsService.updateProduct(this.product.pk, event).subscribe();
  }

  public onDeleteProduct(): void {
    this.dataProductsService.deleteProduct(this.product.pk).subscribe(
      () => this.router.navigate(['/products'])
    );
  }

}




