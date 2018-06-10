import { Component } from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public isSignIn: boolean = true;
  public signInProps: FormControlConf[];
  public signUpProps: FormControlConf[];

  constructor(private service: DynamicFormService) {
    this.signInProps = this.service.getFormConfig('signIn');
    this.signUpProps = this.service.getFormConfig('signUp');
  }
}
