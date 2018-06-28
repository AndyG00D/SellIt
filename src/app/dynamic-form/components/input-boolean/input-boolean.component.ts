import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-boolean.component.html'
})
export class InputBooleanComponent implements OnInit {
  @Input() prop: any;
  @Input() form: FormGroup;
  public isCheck: boolean;

  constructor() {
  }

  onChange() {
    this.isCheck = !this.isCheck;
    this.form.get(this.prop.key).patchValue(this.isCheck);
  }

  ngOnInit() {
    this.isCheck = !!this.form.get(this.prop.key).value;
    this.form.get(this.prop.key).patchValue(this.isCheck);
  }

}
