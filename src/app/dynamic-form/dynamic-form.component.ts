import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {FormControlConf} from './dynamic-form.model';
import {CustomValidatorsService} from './custom-validators.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

/**
 * In component generating model part of dynamic Form by config.
 * Add Form controls, groups, validators by type in config.
 * @Input() props - configuration of Form
 * @Input() data: any - default data of form
 * @Output() submitted: EventEmitter - emmit on Submit
 */
export class DynamicFormComponent implements OnInit {
  @Input() props;
  @Input() data: any;
  @Output() submitted = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});

  constructor(private customValidators: CustomValidatorsService) {
  }

  ngOnInit() {
    // create Form model
    this.form = this.createForm(this.props);
    // set default form values
    if (this.data) {
      this.setFormData();
    }
  }


  /**
   * Function generate model part of dynamic Form by config.
   * Add  Form controls/groups by type in config.
   * Can callback recursive for implementation of nesting form groups
   * @param props - config for current component
   * @returns {FormGroup} - model part of Form
   */
  private createForm(props): FormGroup {
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

  /**
   * Function generate array of Validators by type in config.
   * Implement standard validation for other type inputs.
   * @param {FormControlConf} prop - config of form control
   * @returns {ValidatorFn[]}
   */
  private getValidators(prop: FormControlConf): ValidatorFn[] {
    let res: ValidatorFn[];
    switch (prop.type) {
      case 'text':
        res = [Validators.minLength(4), Validators.maxLength(20)];
        break;
      case 'email':
        res = [Validators.minLength(6), Validators.maxLength(30), this.customValidators.email];
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
        res = [Validators.min(1), Validators.max(100000)];
        break;
      case 'range':
        res = [Validators.min(1), Validators.max(100000)];
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

  /**
   * Set data in exist controls of form
   */
  private setFormData(): void {
    for (let item in this.data)
      if (this.data[item] && this.form.get(item)) {
        this.form.get(item).patchValue(this.data[item]);
      }
  }

  /**
   * Recursive function for mark all controls in form as dirty
   */
  private markAllDirty(control: AbstractControl): void {
    if (control.hasOwnProperty('controls')) {
      control.markAsDirty(); // mark group
      let ctrl = <any>control;
      for (let inner in ctrl.controls) {
        this.markAllDirty(ctrl.controls[inner] as AbstractControl);
      }
    }
    else {
      (<FormControl>(control)).markAsDirty();
    }
  }

  /**
   * If form submitted
   * mark all controls in form as dirty
   * if form valid
   * generate emmit with object of form value
   */
  public onSubmit(): void {
    this.markAllDirty(this.form);
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
