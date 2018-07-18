import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './select.component.html',
})
export class SelectComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

}
