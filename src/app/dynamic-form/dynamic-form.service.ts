import {Injectable, OnInit} from '@angular/core';
import {FormControlConf} from "./dynamic-form.model";
import {productFormConf} from "./config/productFormConf";
import {demoFormConf} from "./config/demoFormConf";
import {signInFormConf} from "./config/signInFormConf";
import {signUpFormConf} from "./config/signUpFormConf";
import {avatarFormConf, profileFormConf} from "./config/profileFormConf";
import {resetPasswordFormConf} from "./config/resetPasswordFormConf";
import {resetConfirmFormConf} from "./config/resetConfirmFormConf";

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
      case 'profile':
        return profileFormConf;
      case 'avatar':
        return avatarFormConf;
      case 'resetPassword':
        return resetPasswordFormConf;
      case 'resetConfirm':
        return resetConfirmFormConf;
      default:
        console.log('exist form config!');
        return null;
    }
  }
}
