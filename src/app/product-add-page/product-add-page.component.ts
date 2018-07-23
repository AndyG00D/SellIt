import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormService} from '../dynamic-form/dynamic-form.service';
import {FormControlConf} from '../dynamic-form/dynamic-form.model';
import {ProductService} from '../core/services/product.service';

/**
 * page for adding new product with images and selecting location
 */
@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.scss']
})

export class ProductAddPageComponent implements OnInit {

  @ViewChild('imagesUploader') imagesLoader;
  public props: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.getFormConfig();
  }

  /**
   * get config for product with data of Location from RestApi
   */
  private getFormConfig(): void {
    this.props = this.dynamicFormService.getFormConfig('product');
    this.productService.getLocations().subscribe(data => {
      for (const prop of this.props) {
        if (prop.key === 'location') {
          prop.options.push(...data);
        }
      }
    });
  }

  onAddProduct(event) {
    this.productService.addProduct(event).subscribe(
      data => this.imagesLoader.uploadNewImages(data.pk)
    );
  }
}




