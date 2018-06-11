import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nested-field',
  templateUrl: './nested-field.component.html',
  styleUrls: ['./nested-field.component.scss']
})
export class NestedFieldComponent {
  @Input() prop: any;
  @Input() form: FormGroup;
  @Input() parentsFormGroup: string = '';

  constructor() {
  }

}
