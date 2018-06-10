import {Component, ViewEncapsulation, OnDestroy, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form-control-errors',
  templateUrl: './form-control-errors.component.html',
  styleUrls: ['./form-control-errors.component.scss'],
})
export class FormControlErrorsComponent implements OnInit, OnDestroy {
  @Input() errors: any;
  @Input() title: string = 'Field';


  constructor() {}

  public ngOnInit() {}


  public ngOnDestroy(): void {}

}
