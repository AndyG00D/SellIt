import { Component } from '@angular/core';
import { productFormConf } from '../dynamic-form/productFormConf';
import { testFormConf} from "../dynamic-form/testFormConf";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.css']
})
export class TestFormPageComponent {

  props = testFormConf;

  constructor() {
  }


}
