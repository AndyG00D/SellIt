import { Component } from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public isSignIn: boolean = true;
  public signInProps: FormControlConf[];
  public signUpProps: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService, private authService:AuthService) {
    this.signInProps = this.dynamicFormService.getFormConfig('signIn');
    this.signUpProps = this.dynamicFormService.getFormConfig('signUp');
  }

  public onSignIn(event) {
    console.log(event);
    this.authService.getLogIn(event).subscribe();
  }

  public onSignUp(event) {
    console.log(event);
    this.authService.getReg(event).subscribe();
  }



}
