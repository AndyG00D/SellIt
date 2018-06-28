import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-control-errors',
  templateUrl: './form-control-errors.component.html'
})
export class FormControlErrorsComponent {
  @Input() errors: any;
  @Input() title: string = 'Field';

  constructor() {}
}
