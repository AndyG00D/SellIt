import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";


export let signInFormConf: Array<FormControlConf> = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.required, Validators.minLength(6), Validators.email],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'password',
    type: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.minLength(6)],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Sign In',
  }
];
