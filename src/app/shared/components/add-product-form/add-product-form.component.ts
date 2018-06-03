import {Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddProductFormComponent implements OnInit, OnDestroy {
  public newProductForm;

  constructor() {
    this.newProductForm = new FormGroup(
      {
        theme: new FormControl('',
          [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        text: new FormControl('',
          [Validators.maxLength(400)]),
        price: new FormControl('',
          [Validators.required]),
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
    this.newProductForm.get('currency').patchValue(1);
    this.newProductForm.get('currency').disable();
  }


  public ngOnDestroy(): void {
  }

  public onSignIn() {
    if(this.newProductForm.valid) {
      console.log(this.newProductForm.value);
    }
  }
}
