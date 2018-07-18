import {FormControlConf} from '../dynamic-form.model';
import {Validators} from '@angular/forms';
import {CustomValidatorsService} from '../custom-validators.service';


export const resetConfirmFormConf: Array<FormControlConf> = [
  {
    key: 'new_password1',
    type: 'password',
    label: 'Password',
    validators: [Validators.required],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'new_password2',
    type: 'password',
    label: 'Password',
    validators: [Validators.required, CustomValidatorsService.prototype.confirm('new_password1')],
    hideLabel: true,
    invertTheme: true
  },
  {
    key: 'submit',
    type: 'submit',
    label: 'Change Password',
  }
];
