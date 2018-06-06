import { Component } from '@angular/core';
import { productFormConf } from '../shared/forms/productFormConf';
import { testFormConf} from "../shared/forms/testFormConf";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.css']
})
export class TestFormPageComponent {

  person;
  dataForm;

  constructor() {
    this.person = productFormConf;
    this.dataForm = testFormConf;
  }


}
