import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  @Input() nameForm = 'fg';
  form: FormGroup;
  // objectProps;

  constructor() {
  }

  ngOnInit() {

    // setup the form
    const formGroup = {};
    for(let prop of this.dataObject) {
      formGroup[prop.key] = new FormControl(prop.value || '', prop.validators);
    // console.log(prop);
    }
    // console.log(formGroup);


    this.form = new FormGroup(formGroup);
    console.log(this.form);
  }

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
    console.log(form);
  }
}
