import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

}
