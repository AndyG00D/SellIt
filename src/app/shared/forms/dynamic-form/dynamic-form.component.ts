import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = this.createForm(this.dataObject);
  }

  // setup the form
  createForm(conf): FormGroup {
    const formGroup = {};
    for (let prop of conf) {
      if (prop.type === 'nested') { // generate Nested Form
        formGroup[prop.key] = this.createForm(prop.conf);
      } else if (prop.type === 'array') { // generate Form Array
        let items = [];
        const item = this.createForm(prop.conf);
        for (let i = 0; i < prop.arrayLength; i++) {
          items.push(item);
        }
        formGroup[prop.key] = new FormArray(items);
      }
      else { // generate Form Control
        formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
      }
    }
    return new FormGroup(formGroup);
  }


  // addItem(): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.fg.get('items').push(this.createItem());
  // }

  // removeItem(i: number) {
  //   this.fg.get('items').removeAt(i);
  // }

  // private mapValidators(validators) {
  //   const formValidators = [];
  //
  //   if(validators) {
  //     for(const validation of Object.keys(validators)) {
  //       if(validation === 'required') {
  //         formValidators.push(Validators.required);
  //       } else if(validation === 'min') {
  //         formValidators.push(Validators.min(validators[validation]));
  //       }
  //     }
  //   }
  //
  //   return formValidators;
  // }

  onSubmit(form) {
    if (form.valid) {
      console.log(form);
    }
  }
}
