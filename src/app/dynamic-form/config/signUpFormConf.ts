import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";


export let signUpFormConf: Array<FormControlConf> = [
  {
    key: 'username',
    type: 'text',
    label: 'User Name',
    validators: [Validators.minLength(6)],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.required, Validators.minLength(8), Validators.email],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'password1',
    type: 'password',
    label: 'Password',
    validators: [Validators.required, Validators.minLength(6)],
    hideLabel: true,
    invertTheme: true

  },
  {
    key: 'password2',
    type: 'password',
    label: 'Confirm',
    validators: [Validators.required, Validators.minLength(6)],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Sign Up',
  }
];
