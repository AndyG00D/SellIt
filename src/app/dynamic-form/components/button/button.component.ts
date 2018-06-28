import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './button.component.html'
})
export class ButtonComponent{
  @Input() prop: any;

  constructor() { }

}
