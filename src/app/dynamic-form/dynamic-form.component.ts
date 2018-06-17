import {Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
    this.form = this.createForm(this.props);
    // if (this.data) {
    //   this.form.patchValue(this.data);
    //   console.log("load form data: " + JSON.stringify(this.data))
    // }
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
        formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
      }

    }
    return new FormGroup(formGroup);
  }

  setFormData(){
    for(let item in this.data)
      if(this.data[item] &&  this.form.get(item)) {
        this.form.get(item).patchValue(this.data[item]);
        // console.log(item + ": " + this.data[item]);
      }
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

  reset(){
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

}
