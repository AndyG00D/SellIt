import {Component, ViewEncapsulation, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignInFormComponent implements OnInit, OnDestroy {
  public signInForm;

  constructor() {
    this.signInForm = new FormGroup(
      {
        email: new FormControl('',
          [Validators.required, Validators.minLength(6), Validators.email]),
        password: new FormControl('',
          [Validators.required, Validators.minLength(6)])
      });
  }

  public ngOnInit() {
  }


  public ngOnDestroy(): void {
  }

  public onSignIn() {
    if(this.signInForm.valid) {
      console.log(this.signInForm.value);
    }
  }
}
