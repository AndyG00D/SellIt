import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() props;
  @Output() submitted = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit() {
    this.form = this.createForm(this.props);
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
        formGroup[prop.key] = new FormControl(prop.value, prop.validators);
      }
    }
    return new FormGroup(formGroup);
  }

  // createItem(props): FormGroup {
  //   for (let prop of props) {
  //     if (prop.type === 'nested') { // generate Nested Form
  //       formGroup[prop.key] = this.createForm(prop.conf);
  //     } else if (prop.type === 'array') { // generate Form Array
  //       let items = [];
  //       const item = this.createForm(prop.conf);
  //       for (let i = 0; i < prop.arrayLength; i++) {
  //         items.push(item);
  //       }
  //       formGroup[prop.key] = new FormArray(items);
  //     } else if (prop.type != 'submit' && prop.type !== 'reset') { // generate Form Control
  //       formGroup[prop.key] = new FormControl(prop.value, prop.validators);
  //     }
  //   }
  //   return new FormGroup(formGroup);
  // }

  // addItem(event): void {
  //   // this.items = this.fg.get('items') as FormArray;
  //   // this.items.push(this.createItem());
  //   this.form.get('items').push(this.createForm(prop));
  // }
  //
  // removeItem(i: number) {
  //   this.fg.get('items').removeAt(i);
  // }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted...');
      this.submitted.emit(this.form.value);
    }
  }
}
