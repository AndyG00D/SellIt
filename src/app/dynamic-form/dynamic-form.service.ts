import {Injectable, OnInit} from '@angular/core';
import {FormControlConf} from "./dynamic-form.model";
import {productFormConf} from "./config/productFormConf";
import {demoFormConf} from "./config/demoFormConf";
import {signInFormConf} from "./config/signInFormConf";
import {signUpFormConf} from "./config/signUpFormConf";



@Injectable({
  providedIn: 'root'
})
export class DynamicFormService implements OnInit {

  constructor() {
  }

  public ngOnInit() {
  }

  public getFormConfig(name:string): FormControlConf[]  {
    switch(name) {
      case 'product':
        return productFormConf;
      case 'demo':
        return demoFormConf;
      case 'signIn':
        return signInFormConf;
      case 'signUp':
        return signUpFormConf;
      default:
        console.log('exist form config!');
        return null;
    }
  }
}
