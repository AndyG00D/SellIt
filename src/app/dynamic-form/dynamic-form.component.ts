import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators, ValidatorFn} from '@angular/forms';
import {FormControlConf} from "./dynamic-form.model";
import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {CustomValidatorsService} from "./custom-validators.service";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, AfterViewInit {
  @Input() props;
  @Input() data: any;
  @Output() submitted = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});

  constructor(private customValidators:CustomValidatorsService
  ) {
  }

  ngOnInit() {
    // create Form model
    this.form = this.createForm(this.props);

    // set default form values
    if (this.data) {
      this.setFormData();
    }
  }

  ngAfterViewInit() {
  }

  // setup the form
  createForm(props): FormGroup {
    const formGroup = {};
    for (let prop of props) {
      if (prop.type === 'nested') { // generate Nested Form
        formGroup[prop.key] = this.createForm(prop.conf);
      } else if (prop.type === 'array') { // generate Form Array
        let items = [];
        const item = this.createForm(prop.conf);
        for (let i = 0; i < prop.arrayLength; i++) {
          items.push(item);
        }
        formGroup[prop.key] = new FormArray(items);
      } else if (prop.type != 'submit' && prop.type !== 'reset') { // generate Form Control
        formGroup[prop.key] = new FormControl(prop.value || '', this.getValidators(prop));
      }

    }
    return new FormGroup(formGroup);
  }

  private getValidators(prop: FormControlConf): ValidatorFn[] {
    let res: ValidatorFn[];
    switch (prop.type) {
      case 'text':
        res = [Validators.minLength(6), Validators.maxLength(20)];
        break;
      case 'email':
        res = [Validators.minLength(6), Validators.maxLength(20), this.customValidators.email];
        break;
      case 'password':
        res = [Validators.minLength(8), Validators.maxLength(20), this.customValidators.password];
        break;
      case 'search':
        res = [Validators.minLength(2), Validators.maxLength(20)];
        break;
      case 'tel':
        res = [Validators.minLength(6), Validators.maxLength(13)];
        break;
      case 'number':
        res = [Validators.min(0), Validators.max(100000)];
        break;
      case 'range':
        res = [Validators.min(0), Validators.max(100000)];
        break;
      case 'color':
        res = [];
        break;
      case 'file':
        res = [Validators.nullValidator];
        break;
      case 'checkbox':
        res = [];
        break;
      case 'radio':
        res = [this.customValidators.existValue(prop.options)];
        break;
      case 'textarea':
        res = [Validators.minLength(4), Validators.maxLength(400)];
        break;
      case 'select':
        res = [this.customValidators.existValue(prop.options)];
        break;
      case 'select-color':
        res = [this.customValidators.existValue(prop.options)];
        break;
    }
    if (prop.validators !== undefined) {
      res = res.concat(prop.validators);
    }
    return res;
  }

  setFormData() {
    for (let item in this.data)
      if (this.data[item] && this.form.get(item)) {
        this.form.get(item).patchValue(this.data[item]);
        // console.log(item + ": " + this.data[item]);
      }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted...');
      this.submitted.emit(this.form.value);
    }
  }

  // reset() {
  //   this.form.markAsPristine();
  //   this.form.markAsUntouched();
  // }

  // addItem(event): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.form.get('items').push(this.createForm(prop));
  // }

  // removeItem(i: number) {
  //   this.fg.get('items').removeAt(i);
  // }
}
