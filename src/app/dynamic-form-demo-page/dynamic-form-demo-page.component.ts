import {Component} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";

@Component({
  selector: 'app-dynamic-form-demo-page',
  templateUrl: './dynamic-form-demo-page.component.html',
  styleUrls: ['./dynamic-form-demo-page.component.css']
})
export class DynamicFormDemoPageComponent {

  props: FormControlConf[];

  constructor(private service: DynamicFormService) {
    this.props = this.service.getFormConfig('demo');
  }
}
