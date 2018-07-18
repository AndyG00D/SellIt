import {FormControlConf} from '../dynamic-form.model';
import {Validators} from '@angular/forms';


export const signInFormConf: Array<FormControlConf> = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'password',
    type: 'password',
    label: 'Password',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Sign In',
  }
];
