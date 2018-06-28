import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './textarea.component.html'
})
export class TextareaComponent {
  @Input() prop: any;
  @Input() form: FormGroup;

  constructor() { }

}
