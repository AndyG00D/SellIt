import {FormControlConf} from '../dynamic-form.model';
import {Validators} from '@angular/forms';
import {CustomValidatorsService} from '../custom-validators.service';


export const signUpFormConf: Array<FormControlConf> = [
  {
    key: 'username',
    type: 'text',
    label: 'User Name',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'password1',
    type: 'password',
    label: 'Password',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true

  },
  {
    key: 'password2',
    type: 'password',
    label: 'Confirm',
    validators: [Validators.required, CustomValidatorsService.prototype.confirm('password1')],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Sign Up',
  }
];
