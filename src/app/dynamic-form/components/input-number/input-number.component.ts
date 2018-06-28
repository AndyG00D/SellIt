import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() { }

}
