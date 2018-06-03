import {Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  public signUpForm;

  constructor() {
    this.signUpForm = new FormGroup(
      {
        username: new FormControl('',
          [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
        first_name: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
        last_name: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
        email: new FormControl('',
          [Validators.required, Validators.minLength(6), Validators.email]),
        password: new FormGroup(
          {
            pwd: new FormControl('',
              [Validators.required, Validators.minLength(6), Validators.maxLength(32)]),
            confirmPwd: new FormControl('',
              [Validators.required, Validators.minLength(6), Validators.maxLength(32)])
          }),
      });
  }

  public ngOnInit() {
  }


  public ngOnDestroy(): void {
  }

  public onSignUp() {
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }
}
