import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {AuthService} from "../core/services/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  public isSignIn: boolean = true;
  public signInProps: FormControlConf[];
  public signUpProps: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService, private authService:AuthService,
              private router: ActivatedRoute) {
    this.signInProps = this.dynamicFormService.getFormConfig('signIn');
    this.signUpProps = this.dynamicFormService.getFormConfig('signUp');
  }

  ngOnInit(){
    console.log(this.router.snapshot.queryParams['key']);
    this.authService.verifyEmail(this.router.snapshot.queryParams['key']).subscribe();
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
