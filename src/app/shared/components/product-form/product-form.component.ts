import {Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit, OnDestroy {
  public productForm;

  constructor() {
    this.productForm = new FormGroup(
      {
        theme: new FormControl('',
          [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        text: new FormControl('',
          [Validators.maxLength(400)]),
        price: new FormControl('',
          [Validators.required, Validators.min(0)]),
        currency: new FormControl(''),
        contract_price: new FormControl(''),
        location: new FormGroup(
          {
            country: new FormControl('',
              [Validators.minLength(3), Validators.maxLength(12)]),
            zone: new FormControl('',
              [Validators.minLength(3), Validators.maxLength(12)]),
            city: new FormControl('',
              [Validators.minLength(3), Validators.maxLength(12)]),
            address: new FormControl('',
              [Validators.minLength(6), Validators.maxLength(12)]),
            zipcode: new FormControl('',
              [Validators.minLength(6), Validators.maxLength(6)])
          }),
        is_active: new FormControl('')
      });
  }

  public ngOnInit() {
    this.productForm.get('currency').patchValue(1);
    this.productForm.get('currency').disable();
  }


  public ngOnDestroy(): void {
  }

  public onAdd() {
    if(this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }
}