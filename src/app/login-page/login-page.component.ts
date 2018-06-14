import {Component, OnInit} from '@angular/core';
import {DynamicFormService} from "../dynamic-form/dynamic-form.service";
import {FormControlConf} from "../dynamic-form/dynamic-form.model";
import {AuthService} from "../core/services/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {GoogleLoginProvider} from "angular5-social-login";
import {AuthService as SocialAuthService } from "angular5-social-login";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  public isSignUp: boolean = false;
  public signInProps: FormControlConf[];
  public signUpProps: FormControlConf[];

  constructor(private dynamicFormService: DynamicFormService, private authService:AuthService,
              private socialAuthService: SocialAuthService,
              private router: ActivatedRoute) {
    this.signInProps = this.dynamicFormService.getFormConfig('signIn');
    this.signUpProps = this.dynamicFormService.getFormConfig('signUp');
  }

  ngOnInit(){
    //verify email
    if(this.router.snapshot.queryParams['key']) {
      this.authService.verifyEmail(this.router.snapshot.queryParams['key']).subscribe();
    }
    //register
    if(this.router.snapshot.queryParams['isSignUp']) {
      this.isSignUp = true;
    }
  }

  public onSignIn(event) {
    console.log(event);
    this.authService.getLogIn(event).subscribe();
  }

  public onSignUp(event) {
    console.log(event);
    this.authService.getReg(event).subscribe();
  }

  public authGoogle(){
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log("Google sign in data : " , userData);
        this.authService.getLogGoogle(userData).subscribe();
      }
    );
  }


}
