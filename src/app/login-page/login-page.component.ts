import {Component, OnChanges, OnInit} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {AuthService} from "../core/services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService as SocialAuthService} from "angular5-social-login";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public currentForm: string = 'signIn';
  public props: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService,
              private authService: AuthService,
              private socialAuthService: SocialAuthService,
              private router: ActivatedRoute) {
    this.props = this.dynamicFormService.getFormConfig(this.currentForm);
  }

  ngOnInit() {
    for (let param in this.router.snapshot.queryParams) {
      //verify email
      switch (param) {
        case 'key':
          this.authService.getVerifyEmail(this.router.snapshot.queryParams['key']).subscribe();
          break;
        //verify Confirm reset password
        case 'uid':
          this.changeForm('resetConfirm');
          break;
        //load current form
        case 'form':
          this.changeForm(this.router.snapshot.queryParams['form']);
          break;
      }
    }
  }

  changeForm(currentForm: string) {
    this.currentForm = currentForm;
    this.props = this.dynamicFormService.getFormConfig(this.currentForm);
  }

  public onSignIn(event) {
    this.authService.getLogIn(event).subscribe();
  }

  public onSignUp(event) {
    this.authService.getRegistration(event).subscribe(
      () => this.changeForm('signIn')
    );
  }

  public onResetPassword(event) {
    this.authService.getResetPassword(event).subscribe(
      () => this.changeForm('signIn')
    );
  }

  public onResetConfirm(event) {
    let params = {...event};
    params.uid = this.router.snapshot.queryParams['uid'];
    params.token = this.router.snapshot.queryParams['token'];
    this.authService.getResetConfirm(params).subscribe(
      () => this.changeForm('signIn')
    );
  }

  public onAuthGoogle() {
    this.authService.AuthGoogle();
  }

}
