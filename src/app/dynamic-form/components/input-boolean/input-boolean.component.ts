import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-boolean.component.html',
  styleUrls: ['./input-boolean.component.scss']
})
export class InputBooleanComponent implements OnInit {
  @Input() prop: any;
  @Input() form: FormGroup;
  public isCheck: boolean;
  // control = this.form.controls[this.prop.key] ;

  constructor() {

  }

  onChange() {
    this.isCheck = !this.isCheck;
    // console.log(this.isCheck );
    // console.log(event);
    // let value: any;
    // if('options' in this.prop){
    //   value = event ? this.prop.options[0].value : '';
    // } else {
    //   value = event;
    // }
    // this.isCheck = this.isCheck;
    this.form.get(this.prop.key).patchValue(this.isCheck);
    // this.control.patchValue(!this.isCheck);
  }


  ngOnInit() {
    this.isCheck = !!this.form.get(this.prop.key).value;
    this.form.get(this.prop.key).patchValue(this.isCheck);
    // this.control.patchValue(!!this.control.value);
    // if('options' in this.prop){
    //   if(this.form.get(this.prop.key).value === ''){
    //     this.form.get(this.prop.key).patchValue(false);
    //   }
    // }

  }

}
