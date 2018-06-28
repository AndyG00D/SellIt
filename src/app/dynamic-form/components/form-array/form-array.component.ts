import {Component, Input} from '@angular/core';
import {FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-nested-field',
  templateUrl: './form-array.component.html'
})
export class FormArrayComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

  public get formArray() {
    return this.form.get(this.prop.key) as FormArray;
  }

  removeItem(i: number) {
    this.formArray.removeAt(i);
  }

}
