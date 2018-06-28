import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './select-color.component.html'
})
export class SelectColorComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() {
  }

}
