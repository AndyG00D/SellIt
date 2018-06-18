import {FormControlConf} from '../dynamic-form.model'
import {Validators} from "@angular/forms";


export let resetPasswordFormConf: Array<FormControlConf> = [
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    validators: [Validators.required, Validators.minLength(6), Validators.email],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Send message for reset pass',
  }
];
