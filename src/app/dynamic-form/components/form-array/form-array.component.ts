import {Component, Input} from '@angular/core';
import {FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-nested-field',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

  public get formArray() {
    return this.form.get(this.prop.key) as FormArray;
  }

  // public get formGroup() {
  //   return this.form.controls as FormGroup;
  // }

  // items = [{}];

  // createItem(): FormGroup {
  //   return new FormGroup({
  //     name: new FormControl( '', [this.sameField]),
  //     description:  new FormControl(''),
  //     price:  new FormControl('')
  //   });
  // }

  // addItem(): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.fg.get('items').push(this.createItem());
  // }

  removeItem(i: number) {
    this.formArray.removeAt(i);
  }

}
