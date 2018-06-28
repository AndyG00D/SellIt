import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html'
})
export class FormGroupComponent {
  @Input() prop: any;
  @Input() form: FormGroup;
  @Input() formGroupKey: string;

  constructor() {
  }

}
